import {
  MotionDiv,
  MotionHeading,
  MotionParagraph,
  fadeIn,
  stagger,
} from "../ui/motion";
import { LinkedinIcon, GithubIcon } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16 bg-[#3C3D37] relative"
    >
      <MotionDiv
        className="max-w-6xl mx-auto w-full"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <MotionHeading
          className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-12"
          variants={fadeIn}
        >
          About Me
        </MotionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <MotionParagraph
              className="font-['Raleway'] text-lg leading-relaxed"
              variants={fadeIn}
            >
              I'm a passionate software engineer learning how to build the
              future. With expertise in web applications, cloud infrastructure,
              and data engineering, I'm driven to build innovative solutions
              that make a positive impact.
            </MotionParagraph>

            <MotionDiv
              variants={fadeIn}
              className="flex flex-col space-y-4 relative z-10"
            >
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/dakotasouth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-3 bg-[#ECDFCC]/10 hover:bg-[#ECDFCC]/20 rounded-lg transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/dakotasouthhh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ECDFCC] hover:text-[#ECDFCC]/70 transition-colors"
                >
                  @dakotasouthhh
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/dakota-south/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-3 bg-[#ECDFCC]/10 hover:bg-[#ECDFCC]/20 rounded-lg transition-colors"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/dakota-south/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ECDFCC] hover:text-[#ECDFCC]/70 transition-colors"
                >
                  /in/dakota-south
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/dakotasouth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center p-3 bg-[#ECDFCC]/10 hover:bg-[#ECDFCC]/20 rounded-lg transition-colors"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/dakotasouth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ECDFCC] hover:text-[#ECDFCC]/70 transition-colors"
                >
                  /dakotasouth
                </a>
              </div>
            </MotionDiv>
          </div>

          <div className="space-y-6">
            <MotionDiv
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={fadeIn}
            >
              <div className="sm:col-span-1">
                <h3 className="font-['Playfair_Display'] font-bold mb-2">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                  <ul className="font-['Raleway'] space-y-2 text-[#697565]">
                    <li>AWS</li>
                    <li>.NET</li>
                    <li>Node.js</li>
                    <li>React</li>
                  </ul>
                  <ul className="font-['Raleway'] space-y-2 text-[#697565]">
                    <li>Next.js</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>OpenSearch</li>
                  </ul>
                </div>
              </div>
              <div className="sm:col-span-1">
                <h3 className="font-['Playfair_Display'] font-bold mb-2">
                  Languages
                </h3>
                <ul className="font-['Raleway'] space-y-2 text-[#697565]">
                  <li>C#</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="sm:col-span-1">
                <h3 className="font-['Playfair_Display'] font-bold mb-2">
                  Experience
                </h3>
                <ul className="font-['Raleway'] space-y-2 text-[#697565]">
                  <li>Data Pipelines</li>
                  <li>Jobs/Automations</li>
                  <li>Web Applications</li>
                  <li>Real-time Applications</li>
                </ul>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}
