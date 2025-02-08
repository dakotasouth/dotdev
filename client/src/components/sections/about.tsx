import { MotionDiv, MotionHeading, MotionParagraph, fadeIn, stagger } from "../ui/motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-[#3C3D37]">
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
          <MotionDiv variants={fadeIn}>
            <img 
              src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18"
              alt="Abstract texture"
              className="rounded-lg w-full"
            />
          </MotionDiv>

          <div className="space-y-6">
            <MotionParagraph 
              className="font-['Raleway'] text-lg leading-relaxed"
              variants={fadeIn}
            >
              I'm a passionate software engineer specializing in building scalable, data-driven applications. 
              With expertise in cloud infrastructure and real-time systems, I create robust solutions that 
              handle complex data processing needs while maintaining high performance.
            </MotionParagraph>

            <MotionDiv 
              className="grid grid-cols-2 gap-4"
              variants={fadeIn}
            >
              <div>
                <h3 className="font-['Playfair_Display'] font-bold mb-2">Technical Skills</h3>
                <ul className="font-['Raleway'] space-y-2 text-[#697565]">
                  <li>AWS Cloud Infrastructure</li>
                  <li>Data Engineering & Pipelines</li>
                  <li>Backend Development</li>
                  <li>Real-time WebSocket Systems</li>
                  <li>Database Architecture</li>
                  <li>Job Automation (Quartz)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] font-bold mb-2">Experience</h3>
                <ul className="font-['Raleway'] space-y-2 text-[#697565]">
                  <li>Complex Data Processing</li>
                  <li>Metric Calculations</li>
                  <li>Large-scale Systems</li>
                  <li>Web Applications</li>
                </ul>
              </div>
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}