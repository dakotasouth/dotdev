import { useEffect, useState } from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Terminal from "@/components/terminal/Terminal";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Terminal as TerminalIcon, Monitor } from "lucide-react";

export default function Home() {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  useEffect(() => {
    // Load JetBrains Mono font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#ECDFCC] font-mono relative">
      <TooltipProvider>
        <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`fixed top-4 right-4 z-50 bg-black/50 backdrop-blur-sm border-[#ECDFCC] hover:bg-[#ECDFCC]/20 ${!isTerminalMode ? 'pulse' : ''}`}
            onClick={() => setIsTerminalMode(!isTerminalMode)}
          >
            {isTerminalMode ? (
              <Monitor className="h-4 w-4" />
            ) : (
              <TerminalIcon className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isTerminalMode ? 'Switch to normal view' : 'Try terminal mode!'}</p>
        </TooltipContent>
      </Tooltip>
      </TooltipProvider>

      {isTerminalMode ? (
        <Terminal />
      ) : (
        <>
          <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMCAwaDJNMCAwdjIiIHN0cm9rZT0iIzAwZmYwMDEwIiBzdHJva2Utd2lkdGg9Ii41Ii8+Cjwvc3ZnPg==')] opacity-10" />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </main>
  );
}