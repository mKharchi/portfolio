import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pattern from "@/components/Pattern";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <main className="site-shell w-full min-h-screen relative overflow-x-hidden flex flex-col items-center">
      <Pattern />
      <NavBar />
        <Hero />
      
      <FadeInSection id="experience" className="w-full" delay={0.05}>
        <Experience />
      </FadeInSection>

      <FadeInSection id="projects" className="w-full" delay={0.05}>
        <Projects />
      </FadeInSection>

      <FadeInSection id="contact" className="w-full" delay={0.05}>
        <Contact />
      </FadeInSection>

      <Footer />
    </main>
  );
}
