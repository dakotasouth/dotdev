import {
  MotionDiv,
  MotionHeading,
  MotionParagraph,
  fadeIn,
  stagger,
} from "../ui/motion";
import { TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16 bg-[#3C3D37]"
    >
      <MotionDiv
        className="max-w-6xl mx-auto"
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
              I'm a passionate software engineer specializing in building
              scalable, data-driven applications. With expertise in cloud
              infrastructure and real-time systems, I create robust solutions
              that handle complex data processing needs while maintaining high
              performance.
            </MotionParagraph>

            <MotionDiv variants={fadeIn} className="flex gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#ECDFCC]/10 hover:bg-[#ECDFCC]/20 rounded-lg transition-colors"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#ECDFCC]/10 hover:bg-[#ECDFCC]/20 rounded-lg transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#ECDFCC]/10 hover:bg-[#ECDFCC]/20 rounded-lg transition-colors"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
            </MotionDiv>
          </div>

          <div className="space-y-6">
            <MotionDiv
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={fadeIn}
            >
              <div>
                <h3 className="font-['Playfair_Display'] font-bold mb-2">
                  Technical Skills
                </h3>
                <ul className="font-['Raleway'] space-y-2 text-[#697565]">
                  <li>AWS</li>
                  <li>.NET</li>
                  <li>Node.js</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>OpenSearch</li>
                </ul>
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] font-bold mb-2">
                  Languages
                </h3>
                <ul className="font-['Raleway'] space-y-2 text-[#697565]">
                  <li>C#</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
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