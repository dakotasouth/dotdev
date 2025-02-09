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
    Software Engineer

    {
      "role": "Software Engineer",
      "skills": ["cloud_infra", "data_engineering", "backend_dev", "realtime_systems"],
      "status": "building/accelerating",
      "location": "localhost",
      "experience": "${(() => {
        const startDate = new Date('2022-05-28T09:00:00');
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const seconds = Math.floor((diff % (1000 * 60 * 60)) / 1000);
        const milliseconds = diff % 1000;

        return `${String(years).padStart(2, '0')}:${String(months).padStart(2, '0')}:${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
      })()}"
    }
  `,
  "about.txt": `
    About Me
    ========
    I'm a passionate software engineer learning how to build the future. 
    With expertise in web applications, cloud infrastructure, and data engineering,
    I'm driven to build innovative solutions that make a positive impact.

    Technical Skills:
    - AWS
    - .NET
    - Node.js
    - React
    - Next.js
    - MySQL
    - PostgreSQL
    - OpenSearch

    Languages:
    - C#
    - Python
    - TypeScript

    Experience:
    - Data Pipelines
    - Jobs/Automations
    - Web Applications
    - Real-time Applications

    Find me at:
    X (Twitter): @dakotasouth
    LinkedIn: /in/dakota-south
    GitHub: /dakotasouth
  `,
  "projects.json": `
    {
      "featured_projects": [
        {
          "name": "BackJox",
          "description": "A collection of multiplayer games",
          "tech_stack": ["React", "Node.js"],
          "url": "https://backjox.com"
        },
        {
          "name": "Weaver Solver",
          "description": "A solution to the popular weaver game",
          "tech_stack": ["React", "Python"],
          "url": "https://weaver-solver.tech"
        },
        {
          "name": "Coming Soon",
          "description": "Work in Progress - New project under development",
          "tech_stack": ["Under", "Development"],
          "url": ""
        }
      ]
    }
  `,
  "contact.md": `
    Get in Touch
    ===========
    Let's work together! Feel free to reach out for collaborations or just a friendly hello.

    Contact Information:
    - Email: southd20@gmail.com
    - LinkedIn: https://linkedin.com/in/dakota-south
    - GitHub: https://github.com/dakotasouth

    You can also use the contact form on my website to send me a message directly.
  `
};

const formatOutput = (output: string) => {
  if (output.trim().startsWith("{") || output.trim().startsWith("[")) {
    try {
      const parsed = JSON.parse(output);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return output;
    }
  }
  return output;
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
    <div className="min-h-screen bg-black text-[#ECDFCC] p-2 sm:p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <p className="text-sm sm:text-base">Welcome to Dakota South's portfolio terminal.</p>
          <p className="text-sm sm:text-base">Type 'help' for available commands.</p>
        </div>

        {commands.map((cmd, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center">
              <span className="text-[#ECDFCC] text-sm sm:text-base">$ </span>
              <span className="ml-2 text-sm sm:text-base">{cmd.command}</span>
            </div>
            {cmd.output && (
              <pre className="mt-1 whitespace-pre-wrap text-xs sm:text-sm overflow-x-auto font-mono">
                {formatOutput(cmd.output)}
              </pre>
            )}
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-[#ECDFCC] text-sm sm:text-base">$ </span>
          <input
            type="text"
            value={currentInput}
            onChange={e => setCurrentInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && currentInput.trim()) {
                handleCommand(currentInput);
              }
            }}
            className="ml-2 bg-transparent border-none outline-none flex-1 text-[#ECDFCC] text-sm sm:text-base"
            autoFocus
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}