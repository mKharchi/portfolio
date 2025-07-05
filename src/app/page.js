'use client'
import { useEffect , useRef, useState } from 'react';


import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import MyApproach from '@/components/MyApproach';
import Contact from "@/components/Contact";
import Footer from '@/components/Footer';
import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

export default function Home() {

const [selectedLink, setSelectedLink] = useState("#about");
  
  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const containerRef = useRef()
 
//  put the link state here and pass it as props to the NavBar component
  return (
    <div className="w-full min-h-screen h-full relative overflow-x-hidden flex flex-col items-center snap-y snap-mandatory">
      <NavBar selectedLink={selectedLink} setSelectedLink={setSelectedLink}   />
      <section id="about" className="snap-start w-full">
        <Hero setSelectedLink={setSelectedLink} />
      </section>
      <section id="projects" className="snap-start w-full">
        <Projects />
      </section>
      <section id="my_approach" className="snap-start w-full">
        <MyApproach />
      </section>
      <section id="contact" className="snap-start w-full">
        <Contact />
      </section>

      <Footer />
      {/* Add other sections with the same pattern */}
    </div>
  )
}