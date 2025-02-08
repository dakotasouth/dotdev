import { MotionDiv, MotionHeading, scaleIn, stagger } from "../ui/motion";

const projects = [
  {
    title: "BackJox",
    description: "A collection of multiplayer games",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tags: ["React", "Node.js"],
    url: "https://backjox.com"
  },
  {
    title: "Weaver Solver",
    description: "A solution to the popular weaver game",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["TypeScript", "Next.js"],
    url: "https://weaver-solver.tech"
  },
  {
    title: "Social Media App",
    description: "Connected communities platform",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    tags: ["React Native", "Firebase"]
  },
  {
    title: "Portfolio Generator",
    description: "Custom website builder",
    image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
    tags: ["Next.js", "Tailwind"]
  },
  {
    title: "AI Assistant",
    description: "Smart productivity tool",
    image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
    tags: ["Python", "TensorFlow"]
  },
  {
    title: "Crypto Tracker",
    description: "Real-time market data",
    image: "https://images.unsplash.com/photo-1679409759768-bea306439ab8",
    tags: ["React", "WebSocket"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-4 md:px-8 lg:px-16">
      <MotionDiv
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <MotionHeading
          className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-12"
          variants={scaleIn}
        >
          Featured Projects
        </MotionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MotionDiv
              key={index}
              className="group cursor-pointer"
              variants={scaleIn}
              whileHover={{ y: -5 }}
              onClick={() => project.url && window.open(project.url, '_blank')}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-full flex flex-col justify-end p-6">
                    <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="font-['Raleway'] text-sm text-[#ECDFCC]/80 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
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