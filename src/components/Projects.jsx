"use client";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

const ProjectBox = ({ project }) => {
  // Create motion values for mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Calculate transforms based on mouse position
  const rotateX = useTransform(mouseY, [0, 1], [-10, 10]);
  const rotateY = useTransform(mouseX, [0, 1], [10, -10]);

  // Create a shadow effect that follows the mouse
  const shadow = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `${x * 40}px ${y * 40}px 30px rgba(0, 0, 0, 0.3)`
  );

  const handleMouseMove = (e) => {
    // Get bounding rect of the element
    const rect = e.currentTarget.getBoundingClientRect();

    // Calculate mouse position relative to the element (0 to 1)
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      className="w-3/4  bg-[#13162D] rounded-lg shadow-lg p-4 flex flex-col justify-center  min-h-[50vh] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      style={{
        rotateX,
        rotateY,
        boxShadow: shadow,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
        cursor: "pointer",
        backgroundColor: "#1E1E2F",
      }}
    >
      <Image
        width={512}
        height={512}
        src={project.image}
        alt={project.title}
        className="w-full h-80 min-h-[30vh] object-cover rounded-lg mb-4"
      />
      <div className="flex flex-col items-start justify-between gap-4 w-full h-full">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-400">{project.description}</p>

        <div className="w-full flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((TechIcon, index) => (
              <div key={index} className="flex items-center">
                <TechIcon className="w-5 h-5 text-[#CBACF9]" />
              </div>
            ))}
          </div>
          <Link href={project.link} rel="noopener noreferrer" className="text-[#cbacf9] hover:text-blue-500 transition duration-200">
            View Project
          </Link>
        </div>
      </div>

    </motion.div>
  );
};


import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Traveleo",
      description: "A collaborative project about a travel agency website with hotel and trip browsing and booking , direct messaging and much more...",
      link: "https://github.com/Dali-MDB/Escapeo",
      image: "/project1.png",
      technologies: [FaReact , SiNextdotjs , RiTailwindCssFill ]
    },
    {
      id: 2,
      title: "Project 2",
      description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
      link: "https://github.com/mKharchi/iPhone-clone",
      image: "/project2.png"
      , technologies: [    SiNextdotjs, TbBrandThreejs , RiTailwindCssFill ]
    },
    // Add more projects as needed
  ]
  return (
    <div className="w-[80%] h-screen p-4 sm:px-20 sm:py-42 mx-auto  flex flex-col gap-4 sm:gap-14 items-center justify-center">
      <h2 className="text-4xl font-bold">A small selection of my <span className="text-[#CBACF9]">recent projects</span></h2>
      <div className="w-[80%] h-full   flex gap-4 sm:gap-8">
        {projects.map((project) => (
          <ProjectBox key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
