import Button from "./Button";
import FadeInSection from "./FadeInSection";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="w-full md:w-[80%] max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
        <FadeInSection><h1 className="text-2xl sm:text-4xl text-white font-extrabold leading-tight">
          Transforming Concepts<br /> into Seamless{" "}
          <span className="text-[#CBACF9]">User Experiences</span>
        </h1></FadeInSection>
        
<FadeInSection delay={0.5}>
        <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-black/20">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Who am I</h2>
          <p className="text-sm sm:text-base leading-relaxed text-white/80">
            Hi! I&apos;m <span className="font-bold text-[#CBACF9]">Kharchi Merouane</span>, a full-stack web developer and computer science student.
            I build polished, high-performance websites with modern technologies like React, Next.js, and fullstack architectures.
          </p>
          <div className="mt-8 flex justify-center">
            <Button />
          </div>
        </div>
</FadeInSection>
        
      </div>
    </section>
  );
};

export default Hero;
