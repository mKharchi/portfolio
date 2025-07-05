"use client";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaStripe } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import Card from "./Card";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Traveleo",
      description: "A collaborative project about a travel agency website with hotel and trip browsing and booking, direct messaging and much more...",
      link: "https://github.com/Dali-MDB/Escapeo",
      image: "/project1.png",
      technologies: [<FaReact size={24} />, <SiNextdotjs size={24} />, <RiTailwindCssFill size={24} />]
    },
    {
      id: 2,
      title: "Forever",
      description: "A fully functional MERN e-commerce website offering multiple functionalities such as ordering searching and a lot more + An admin panel for all the products and orders amanging",
      link: "https://ecommerce-forever-frontend.vercel.app/",
      image: "/project2.png",
      technologies: [<FaReact size={24} />, <SiMongodb size={24} />, <RiTailwindCssFill size={24} />, <SiExpress size={24} />, <FaStripe size={24} />]
    }, 
    {
      id: 3,
      title: "In-house",
      description: "A comprehensive real estate platform featuring property browsing with detailed listings, interactive search filters, and property management tools. Includes a full admin panel for adding and managing properties, plus informative sections about the real estate company's services and expertise.",
      link: "https://in-house-alpha.vercel.app/",
      image: "/project3.png",
      technologies: [<FaReact size={24} />, <SiMongodb size={24} />, <RiTailwindCssFill size={24} />, <SiExpress size={24} />]
    }, 
    {
      id: 4,
      title: "FoodMart",
      description: "A modern restaurant website combining informative content about the establishment with seamless reservation functionality. Features table management system, reservation booking interface, and a comprehensive admin panel for managing tables, reservations, and restaurant operations.",
      link: "https://food-mart-eta-flax.vercel.app/",
      image: "/project4.png",
      technologies: [<FaReact size={24} />, <SiMongodb size={24} />, <RiTailwindCssFill size={24} />, <SiExpress size={24} />]
    }, 
    {
      id: 5,
      title: "Stylicle",
      description: "An elegant beauty salon website showcasing services, treatments, and salon expertise. Features detailed information about beauty treatments, salon atmosphere, staff profiles, and service offerings to help clients discover and learn about the salon's premium beauty services.",
      link: "https://github.com/Dali-MDB/Escapeo",
      image: "/project5.png",
      technologies: [<FaReact size={24} />, <SiMongodb size={24} />, <RiTailwindCssFill size={24} />, <SiExpress size={24} />]
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleElement = titleRef.current;
      if (titleElement) {
        // Animate the entire title as one unit
        gsap.fromTo(titleElement,
          {
            opacity: 0,
            y: 80,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Add special glow effect to the colored word "recent projects"
        const coloredSpan = titleElement.querySelector('.text-\\[\\#CBACF9\\]');
        if (coloredSpan) {
          gsap.to(coloredSpan, {
            textShadow: "0 0 20px #CBACF9, 0 0 40px #CBACF9",
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="w-[80%] min-h-screen p-0 sm:px-20 sm:py-42 mx-auto flex flex-col gap-10 sm:gap-14 items-center justify-center my-24 sm:my-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2
        ref={titleRef}
        className="text-2xl sm:text-4xl text-center font-bold"
      >
        A small selection of my <span className="text-[#CBACF9]">recent projects</span>
      </h2>
      <div
        className="w-full h-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 place-items-center gap-8 sm:gap-8 xl:gap-12 2xl:gap-10"
      >
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects ;