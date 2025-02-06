import { MotionDiv, MotionHeading, fadeIn, slideIn } from "../ui/motion";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center px-4 md:px-8 lg:px-16">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513346940221-6f673d962e97')"
        }}
      />
      
      <MotionDiv
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="lg:col-span-3 space-y-6">
          <MotionHeading
            className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold"
            variants={slideIn}
          >
            Creative Developer & Designer
          </MotionHeading>
          
          <MotionDiv
            className="text-lg md:text-xl font-['Raleway'] text-[#697565]"
            variants={fadeIn}
          >
            Crafting beautiful digital experiences with code and creativity
          </MotionDiv>
          
          <MotionDiv variants={fadeIn}>
            <a 
              href="#projects"
              className="inline-block bg-[#3C3D37] hover:bg-[#697565] transition-colors px-8 py-3 rounded font-['Raleway'] text-[#ECDFCC]"
            >
              View My Work
            </a>
          </MotionDiv>
        </div>

        <div className="lg:col-span-2">
          <MotionDiv
            className="relative aspect-square rounded-lg overflow-hidden"
            variants={fadeIn}
          >
            <img
              src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  );
}
