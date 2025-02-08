import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";

interface Command {
  command: string;
  output: string;
}

const SECTIONS = {
  "/": "home",
  "/about": "about",
  "/projects": "projects",
  "/contact": "contact"
};

const SECTION_CONTENT = {
  home: `
    Dakota South
    ===========
    Full Stack Developer

    {
      "name": "Dakota South",
      "role": "Full Stack Developer",
      "skills": ["web_dev", "systems", "automation"],
      "status": "building_cool_stuff",
      "location": "localhost"
    }
  `,
  about: `
    About Me
    ========
    I'm a passionate developer with expertise in creating engaging digital experiences. 
    With a strong foundation in both design and development, I bridge the gap between 
    aesthetics and functionality.

    Skills:
    - React / Next.js
    - TypeScript
    - Node.js
    - UI/UX Design

    Experience:
    - 5+ Years Development
    - 50+ Projects
    - 20+ Happy Clients
  `,
  projects: `
    Featured Projects
    ================

    1. E-commerce Platform
       Modern online shopping experience
       Tech: React, Node.js, MongoDB

    2. Analytics Dashboard
       Data visualization platform
       Tech: TypeScript, D3.js, API

    3. Social Media App
       Connected communities platform
       Tech: React Native, Firebase

    4. Portfolio Generator
       Custom website builder
       Tech: Next.js, Tailwind

    5. AI Assistant
       Smart productivity tool
       Tech: Python, TensorFlow

    6. Crypto Tracker
       Real-time market data
       Tech: React, WebSocket
  `,
  contact: `
    Get in Touch
    ===========
    Let's work together! Feel free to reach out for collaborations or just a friendly hello.

    Contact Information:
    - Email: hello@example.com
    - LinkedIn: https://linkedin.com
    - GitHub: https://github.com
  `
};

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [, setLocation] = useLocation();
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commands]);

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().split(" ");
    const command = args[0].toLowerCase();

    let output = "";

    switch (command) {
      case "help":
        output = `
Available commands:
  ls              - List available sections
  cd <section>    - Navigate to a section
  cat <section>   - Display section content
  clear           - Clear terminal
  pwd             - Show current section
  help            - Show this help message
`;
        break;

      case "ls":
        output = Object.values(SECTIONS).join("\n");
        break;

      case "cd":
        if (!args[1]) {
          output = "Usage: cd <section>";
          break;
        }
        const section = args[1].toLowerCase();
        const path = Object.entries(SECTIONS).find(([, name]) => 
          name === section
        )?.[0];

        if (path) {
          setLocation(path);
          output = `Navigating to ${section}...`;
        } else {
          output = `Section '${section}' not found`;
        }
        break;

      case "cat":
        if (!args[1]) {
          output = "Usage: cat <section>";
          break;
        }
        const sectionName = args[1].toLowerCase();
        const content = SECTION_CONTENT[sectionName as keyof typeof SECTION_CONTENT];

        if (content) {
          output = content;
        } else {
          output = `Section '${sectionName}' not found`;
        }
        break;

      case "clear":
        setCommands([]);
        return;

      case "pwd":
        const currentSection = Object.entries(SECTIONS).find(([path]) => 
          path === window.location.pathname
        )?.[1] || "home";
        output = currentSection;
        break;

      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setCommands(prev => [...prev, { command: cmd, output }]);
    setCurrentInput("");
  };

  return (
    <div className="min-h-screen bg-black text-[#00ff00] p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <p>Welcome to Dakota South's portfolio terminal.</p>
          <p>Type 'help' for available commands.</p>
        </div>

        {commands.map((cmd, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center">
              <span className="text-[#ECDFCC]">$ </span>
              <span className="ml-2">{cmd.command}</span>
            </div>
            {cmd.output && (
              <pre className="mt-1 whitespace-pre-wrap">{cmd.output}</pre>
            )}
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-[#ECDFCC]">$ </span>
          <input
            type="text"
            value={currentInput}
            onChange={e => setCurrentInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && currentInput.trim()) {
                handleCommand(currentInput);
              }
            }}
            className="ml-2 bg-transparent border-none outline-none flex-1 text-[#00ff00]"
            autoFocus
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}