import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";

interface Command {
  command: string;
  output: string;
}

const SECTIONS = {
  "/": "README.md",
  "/about": "about.txt",
  "/projects": "projects.json",
  "/contact": "contact.md",
  "/resume": "resume.pdf"
};

const SECTION_CONTENT = {
  "README.md": `
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
  "about.txt": `
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
  "projects.json": `
    {
      "featured_projects": [
        {
          "name": "E-commerce Platform",
          "description": "Modern online shopping experience",
          "tech": ["React", "Node.js", "MongoDB"]
        },
        {
          "name": "Analytics Dashboard",
          "description": "Data visualization platform",
          "tech": ["TypeScript", "D3.js", "API"]
        },
        {
          "name": "Social Media App",
          "description": "Connected communities platform",
          "tech": ["React Native", "Firebase"]
        },
        {
          "name": "Portfolio Generator",
          "description": "Custom website builder",
          "tech": ["Next.js", "Tailwind"]
        },
        {
          "name": "AI Assistant",
          "description": "Smart productivity tool",
          "tech": ["Python", "TensorFlow"]
        },
        {
          "name": "Crypto Tracker",
          "description": "Real-time market data",
          "tech": ["React", "WebSocket"]
        }
      ]
    }
  `,
  "contact.md": `
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
  ls              - List available files
  cd <section>    - Navigate to a section
  cat <file>      - Display file content
  get resume.pdf  - Download resume
  clear           - Clear terminal
  pwd             - Show current location
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
        const target = args[1].toLowerCase();

        // Check if target is a file
        if (target.includes('.')) {
          output = `cd: not a directory: ${target}`;
          break;
        }

        const path = Object.entries(SECTIONS).find(([, name]) => 
          name.toLowerCase().replace(/\.(md|txt|json)$/, '') === target
        )?.[0];

        if (path) {
          setLocation(path);
          output = `Navigating to ${target}...`;
        } else {
          output = `cd: no such directory: ${target}`;
        }
        break;

      case "cat":
        if (!args[1]) {
          output = "Usage: cat <file>";
          break;
        }
        const fileName = args[1].toLowerCase();
        const content = SECTION_CONTENT[
          Object.values(SECTIONS).find(
            (name) => name.toLowerCase() === fileName
          ) as keyof typeof SECTION_CONTENT
        ];

        if (content) {
          output = content;
        } else {
          output = `File '${fileName}' not found`;
        }
        break;

      case "get":
        if (args[1]?.toLowerCase() === "resume.pdf") {
          window.location.href = '/api/resume';
          output = "Downloading resume.pdf...";
        } else {
          output = "Usage: get resume.pdf";
        }
        break;
      case "clear":
        setCommands([]);
        return;

      case "pwd":
        const currentSection = Object.entries(SECTIONS).find(([path]) => 
          path === window.location.pathname
        )?.[1] || "README.md";
        output = currentSection;
        break;

      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setCommands(prev => [...prev, { command: cmd, output }]);
    setCurrentInput("");
  };

  return (
    <div className="min-h-screen bg-black text-[#ECDFCC] p-4 font-mono">
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
            className="ml-2 bg-transparent border-none outline-none flex-1 text-[#ECDFCC]"
            autoFocus
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}