import { MotionDiv, MotionHeading, scaleIn, stagger } from "../ui/motion";

const projects = [
  {
    title: "BackJox",
    description: "A collection of multiplayer games",
    background: "bg-gradient-to-b from-purple-500 to-indigo-700",
    tags: ["React", "Node.js"],
    url: "https://backjox.com",
  },
  {
    title: "Weaver Solver",
    description: "A solution to the popular weaver game",
    background: "bg-[#00800080]",
    tags: ["React", "Python"],
    url: "https://weaver-solver.tech",
  },
  {
    title: "Coming Soon",
    description: "Work in Progress - New project under development",
    background: "bg-gray-800/50",
    tags: ["Under", "Development"],
    url: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16"
    >
      <MotionDiv
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <MotionHeading
          className="text-4xl md:text-5xl font-bold mb-12"
          variants={scaleIn}
        >
          <span className="text-[#ECDFCC]">&gt; </span>Featured Projects
        </MotionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              className="group cursor-pointer"
              variants={scaleIn}
              whileHover={{ y: -5 }}
              onClick={() => project.url && window.open(project.url, "_blank")}
            >
              <div className="relative h-64 w-64 rounded-lg">
                <div
                  className={`absolute inset-0 ${project.background} rounded-lg`}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <div className="h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#ECDFCC]/80 mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded bg-[#697565]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
}
