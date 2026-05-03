"use client";
import { motion } from "framer-motion";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const fullstackProjects = [
    {
      id: 1,
      title: "El-Awj",
      description:
        "Front-end website for school management with responsive interface and student, teacher and class overview pages.",
      link: "https://github.com/El-Awj/El-Awj",
      image: null,
      technologies: ["ReactJs", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Refactoring Swarm GogitatusCodex",
      description:
        "A LangChain-driven repository refactoring tool that analyzes messy Python code and suggests improvements for readability and structure.",
      link: "https://github.com/mKharchi/Refactoring-Swarm-GogitatusCodex",
      image: null,
      technologies: ["Python", "LangChain", "Git"],
    },
    {
      id: 3,
      title: "Traveleo",
      description:
        "Front-end travel agency website with destination browsing, service highlights, and a sleek booking-focused layout.",
      link: "https://github.com/Dali-MDB/Traveleo",
      image: null,
      technologies: ["React", "Tailwind CSS", "Responsive UI"],
    },
    {
      id: 4,
      title: "InHouse",
      description:
        "Fullstack estate agency platform featuring property listings, search filters, contact forms, and administrative property controls.",
      link: "https://github.com/mKharchi/inHouse",
      image: null,
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "uni-trade",
      description:
        "Campus trading and e-commerce platform for students to buy, sell, and manage listings in a university marketplace.",
      link: "https://github.com/mKharchi/uni-trade",
      image: null,
      technologies: ["Next.js", "Node.js", "PostgreSQL"],
    },
    {
      id: 6,
      title: "iPhone-clone",
      description:
        "A polished clone of the iPhone 15 product page showcasing responsive layout, product sections, and Apple-style visuals.",
      link: "https://github.com/mKharchi/iPhone-clone",
      image: null,
      technologies: ["Next.js", "Tailwind CSS", "Three.js", "GSAP"],
    },
    {
      id: 7,
      title: "model-ecommerce",
      description:
        "Fullstack e-commerce store with product browsing, shopping cart functionality, and checkout flows.",
      link: "https://github.com/mKharchi/model-ecommerce",
      image: null,
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 8,
      title: "template_vitrine",
      description:
        "Front-end one-page website for estate agencies designed to showcase properties and services in a clean, modern layout.",
      link: "https://github.com/mKharchi/template_vitrine",
      image: null,
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 9,
      title: "project_salons",
      description:
        "Fullstack furniture e-commerce website with product catalog, shopping cart, and secure order handling.",
      link: "https://github.com/mKharchi/project_salons",
      image: null,
      technologies: ["Next.js", "PostgreSQL", "Node.js"],
    },
    {
      id: 10,
      title: "AlgoMedia",
      description:
        "One-page digital marketing agency website with service overviews, client testimonials, and a modern landing experience.",
      link: "https://github.com/mKharchi/AlgoMedia",
      image: null,
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 11,
      title: "khoulali_immobilier",
      description:
        "One-page real estate agency website showcasing property services, company values, and contact information.",
      link: "https://github.com/mKharchi/khoulali_immobilier",
      image: null,
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 12,
      title: "Stylicle",
      description:
        "Three-page beauty shop website highlighting products, services, and a polished customer experience.",
      link: "https://github.com/mKharchi/Stylicle",
      image: null,
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 13,
      title: "ToDoAPP",
      description:
        "Simple fullstack todo application for task management with create, update, and delete operations.",
      link: "https://github.com/mKharchi/ToDoAPP",
      image: null,
      technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    },
    {
      id: 14,
      title: "EduKid",
      description:
        "Three-page front-end site for a childcare service featuring programs, staff, and enrollment details.",
      link: "https://github.com/mKharchi/EduKid",
      image: null,
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 15,
      title: "food-mart",
      description:
        "Three-page restaurant website with menu highlights, booking features, and an appetizing design.",
      link: "https://github.com/mKharchi/food-mart",
      image: null,
      technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    },
  ];

  const backendProjects = [
    {
      id: 16,
      title: "project-events",
      description:
        "Spring Boot backend service for managing events with REST APIs, scheduling, and event data storage.",
      link: "https://github.com/mKharchi/project-events",
      image: null,
      technologies: ["Spring Boot", "Java", "REST API"],
    },
    {
      id: 17,
      title: "Inventory-System",
      description:
        "Spring Boot inventory management backend with product tracking, stock updates, and business logic support.",
      link: "https://github.com/mKharchi/Inventory-System",
      image: null,
      technologies: ["Spring Boot", "Java", "REST API"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleElement = titleRef.current;
      if (titleElement) {
        // Animate the entire title as one unit
        gsap.fromTo(
          titleElement,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
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
              toggleActions: "play none none reverse",
            },
          },
        );

        // Add special glow effect to the colored word "recent projects"
        const coloredSpan = titleElement.querySelector(".text-\\[\\#CBACF9\\]");
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
              toggleActions: "play none none reverse",
            },
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="w-full md:w-[80%] min-h-screen p-0 sm:px-20 sm:py-42 mx-auto flex flex-col gap-10 sm:gap-14 items-center justify-center my-24 sm:my-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h2 ref={titleRef} className="text-2xl sm:text-4xl text-center font-bold">
        A small selection of my{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </h2>

      {/* Fullstack Projects Section */}
      <div className="w-full">
        <h3 className="text-xl sm:text-2xl text-center font-semibold mb-6 text-gray-300">
          Fullstack Projects
        </h3>
        <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 place-items-center gap-8 sm:gap-8 xl:gap-12 2xl:gap-10">
          {fullstackProjects.slice(0, visibleCount).map((project, index) => (
            <Card key={project.id} delay={index * 0.08} {...project} />
          ))}
          {visibleCount < fullstackProjects.length && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.08 * visibleCount,
              }}
              className="card h-[260px] w-[360px] rounded-lg border  border-white/10  shadow-[0px_4px_16px_rgba(54,126,8,0.1)] flex items-center justify-center"
            >
              <button
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + 5, fullstackProjects.length),
                  )
                }
                className="rounded-full border border-white/40 bg-white/10 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/20 hover:text-gray-900"
              >
                Show more projects
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Backend Projects Section */}
      <div className="w-full">
        <h3 className="text-xl sm:text-2xl text-center font-semibold mb-6 text-gray-300">
          Backend Projects
        </h3>
        <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 place-items-center gap-8 sm:gap-8 xl:gap-12 2xl:gap-10">
          {backendProjects.map((project, index) => (
            <Card key={project.id} delay={index * 0.08} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
