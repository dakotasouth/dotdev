import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    // Load Playfair Display and Raleway fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Raleway:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="min-h-screen bg-[#181C14] text-[#ECDFCC]">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
