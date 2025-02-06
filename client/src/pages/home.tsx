import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    // Load JetBrains Mono font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="min-h-screen bg-black text-green-400 font-mono">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQgPSJNMCAwaDJNMCAwdjIiIHN0cm9rZT0iIzAwZmYwMDEwIiBzdHJva2Utd2lkdGg9Ii41Ii8+Cjwvc3ZnPg==')] opacity-10" />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}