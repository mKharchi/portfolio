import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-full relative overflow-x-hidden flex flex-col items-center snap-y snap-mandatory">
      <NavBar />
      <section id="about" className="snap-start w-full">
        <Hero />
      </section>
      <section id="projects" className="snap-start w-full">
        <Projects />
      </section>
      <section id="testimonials" className="snap-start w-full">
        <Testimonials />
      </section>
      <section id="contact" className="snap-start w-full">
        <Contact />
    
      </section>
      {/* Add other sections with the same pattern */}
    </div>
  )
}