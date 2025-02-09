import { useEffect, useState } from "react";
import { MotionDiv } from "../ui/motion";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText(""); // Reset text when prop changes
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer); // Cleanup
  }, [text]); // Re-run when text prop changes

  return <span>{displayText}<span className="animate-pulse">_</span></span>;
};

export default function Hero() {
  const sections = [
    { name: "./about.txt", path: "#about" },
    { name: "./projects.json", path: "#projects" },
    { name: "./contact.md", path: "#contact" }
  ];

  const handleResumeDownload = () => {
    window.location.href = '/api/resume';
  };

  return (
    <div className="min-h-screen relative flex items-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center space-x-2 text-[#ECDFCC] mb-4">
          <span className="text-xl sm:text-2xl">$</span>
          <TypewriterText key="whoami" text="whoami" />
        </div>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-mono">
            <span className="text-[#ECDFCC]">&gt; </span>
            Dakota South
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#ECDFCC]/70 font-mono">
            {`{`}<br/>
            &nbsp;&nbsp;"role": "Software Engineer",<br/>
            &nbsp;&nbsp;"skills": ["cloud_infra", "data_engineering", "backend_dev", "realtime_systems"],<br/>
            &nbsp;&nbsp;"status": "building/accelerating",<br/>
            &nbsp;&nbsp;"location": "localhost"<br/>
            {`}`}
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 sm:space-y-3 col-span-1">
              {sections.map((section, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-[#ECDFCC]/70">$</span>
                  <a 
                    href={section.path}
                    className="inline-block bg-[#ECDFCC]/10 border border-[#ECDFCC]/30 hover:bg-[#ECDFCC]/20 transition-colors px-3 sm:px-6 py-1.5 sm:py-2 text-[#ECDFCC] font-mono text-sm sm:text-base w-36 sm:w-48"
                  >
                    {section.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="space-y-2 sm:space-y-3 sm:pl-4">
              <div className="flex items-center space-x-2">
                <span className="text-[#ECDFCC]/70">$</span>
                <button 
                  onClick={handleResumeDownload}
                  className="inline-block bg-[#ECDFCC]/10 border border-[#ECDFCC]/30 hover:bg-[#ECDFCC]/20 transition-colors px-3 sm:px-6 py-1.5 sm:py-2 text-[#ECDFCC] font-mono text-sm sm:text-base w-36 sm:w-48 text-left"
                >
                  ./resume.pdf
                </button>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}