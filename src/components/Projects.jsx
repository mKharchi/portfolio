"use client";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

const ProjectBox = ({ project }) => {
  // Motion values for 3D tilt effect
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);
  
  // For shadow and highlight effects
  const diagonalMovement = useTransform(
    [x, y],
    ([newX, newY]) => newX - newY
  );
  const sheenPosition = useTransform(diagonalMovement, [-1, 1], [-100, 200]);
  const sheenOpacity = useTransform(sheenPosition, [-100, 50, 200], [0, 0.05, 0]);
  const shadow = useTransform(
    [x, y],
    ([newX, newY]) => `${(newX - 0.5) * 30}px ${(newY - 0.5) * 30}px 50px rgba(0, 0, 0, 0.3)`
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      className="w-full sm:w-3/4 bg-[#13162D] rounded-lg shadow-lg px-3 py-4 sm:p-4 flex flex-col justify-center h-[450px] sm:min-h-[50vh] sm:h-[540px] relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        boxShadow: shadow,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
    >
      {/* Sheen effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          transform: `translateX(${sheenPosition}px)`,
          opacity: sheenOpacity,
        }}
      />
      
      <motion.div
        className="w-full"
        style={{
          transform: "translateZ(20px)",
        }}
      >
        <Image
          width={512}
          height={512}
          src={project.image}
          alt={project.title}
          className="sm:w-full w-[90%] mx-auto object-center h-[200px] sm:h-[320px]  sm:min-h-[30vh] object-cover  rounded-lg mb-4"
        />
      </motion.div>
      
      <motion.div 
        className="flex flex-col items-start justify-between gap-2  w-[90%] my-auto sm:w-full h-2/3 sm:h-full"
        style={{
          transform: "translateZ(10px)",
        }}
      >
        <h3 className="sm:text-xl text-md font-bold">{project.title}</h3>
        <p className="text-gray-400 text-sm sm:text-md">{project.description}</p>

        <div className="w-full flex justify-between px-0 items-center">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((TechIcon, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                whileHover={{ scale: 1.2, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TechIcon className="w-5 h-5 text-[#CBACF9]" />
              </motion.div>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              target="_blank"
              href={project.link} 
              rel="noopener noreferrer" 
              className="text-[#cbacf9] text-right text-sm sm:text-lg hover:text-blue-500 transition duration-200"
            >
              View Project
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaStripe } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Traveleo",
      description: "A collaborative project about a travel agency website with hotel and trip browsing and booking, direct messaging and much more...",
      link: "https://github.com/Dali-MDB/Escapeo",
      image: "/project1.png",
      technologies: [FaReact, SiNextdotjs, RiTailwindCssFill]
    },
    {
      id: 2,
      title: "Forever",
      description: "A fully functional MERN e-commerce website offering multiple functionalities such as ordering searching and a lot more + An admin panel for all the products and orders amanging",
      link: "https://ecommerce-forever-frontend.vercel.app/",
      image: "/project2.png",
      technologies: [ FaReact,SiMongodb, RiTailwindCssFill , SiExpress  , FaStripe ]
    },
  ];

  return (
    <motion.div 
      className="w-[80%] min-h-screen p-0 sm:px-20 sm:py-42 mx-auto flex flex-col gap-10 sm:gap-14 items-center justify-center my-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.h2 
        className="text-2xl sm:text-4xl text-center font-bold"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        A small selection of my <span className="text-[#CBACF9]">recent projects</span>
      </motion.h2>
      
      <motion.div 
        className="w-full  sm:w-[80%] h-full  flex flex-col sm:flex-row gap-12 sm:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {projects.map((project) => (
          <ProjectBox key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;