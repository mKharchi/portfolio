import Card from "./Card";

const Projects = () => {

  const featuredProjects = [
    {
      id: 100,
      title: "Donation Management Platform",
      description:
        "A platform that helps mosque imams manage donations for registered families in need and fairly distribute the budget through a weighted calculation based on each family's medical, social, and financial status. I built the landing page and the authentication pages (login & register), and handled debugging and integrating the frontend with the backend.",
      link: "https://github.com/BOUDJEMA-Djalel/Donation-management-system-WEB-App",
      image: null,
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      role: "Frontend / Integration Developer",
      featured: true,
    },
    {
      id: 101,
      title: "NetWatch",
      description:
        "A network monitoring platform built on a client-server architecture supporting network discovery and device monitoring. It features security-oriented data collection for identifying and tracking devices across the network.",
      link: "https://github.com/mKharchi/network-scanner",
      image: null,
      technologies: ["Python", "MySQL", "Tauri", "React", "TypeScript"],
      role: "Fullstack Developer",
      featured: true,
    },
  ];

  const frontendProjects = [
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
      id: 3,
      title: "Traveleo",
      description:
        "Front-end travel agency website with destination browsing, service highlights, and a sleek booking-focused layout.",
      link: "https://github.com/Dali-MDB/Traveleo",
      image: null,
      technologies: ["React", "Tailwind CSS", "Responsive UI"],
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
      id: 8,
      title: "Estate Vitrine",
      description:
        "Front-end one-page website for estate agencies designed to showcase properties and services in a clean, modern layout.",
      link: "https://github.com/mKharchi/template_vitrine",
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
      id: 14,
      title: "EduKid",
      description:
        "Three-page front-end site for a childcare service featuring programs, staff, and enrollment details.",
      link: "https://github.com/mKharchi/EduKid",
      image: null,
      technologies: ["Next.js", "Tailwind CSS"],
    },{
      id: 10,
      title: "AlgoMedia",
      description:
        "One-page digital marketing agency website with service overviews, client testimonials, and a modern landing experience.",
      link: "https://github.com/mKharchi/AlgoMedia",
      image: null,
      technologies: ["Next.js", "Tailwind CSS"],
    },
  ];

  const fullstackProjects = [
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
      id: 7,
      title: "model-ecommerce",
      description:
        "Fullstack e-commerce store with product browsing, shopping cart functionality, and checkout flows.",
      link: "https://github.com/mKharchi/model-ecommerce",
      image: null,
      technologies: ["React", "Node.js", "MongoDB"],
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
      id: 13,
      title: "ToDoAPP",
      description:
        "Simple fullstack todo application for task management with create, update, and delete operations.",
      link: "https://github.com/mKharchi/ToDoAPP",
      image: null,
      technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
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

  const backendAiProjects = [
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

  return (
    <div className="w-full min-h-screen p-0 sm:px-20 sm:py-42 mx-auto flex flex-col gap-10 sm:gap-16 items-center justify-center my-24 sm:my-12">
      <h2 className="text-2xl sm:text-4xl text-center font-bold">
        A small selection of my{" "}
        <span className="text-[#CBACF9]">recent projects</span>
      </h2>

      {/* Latest Work Section */}
      <div className="w-full">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#CBACF9]/60" />
          <h3 className="text-xl sm:text-2xl text-center font-semibold text-[#CBACF9] tracking-wide">
            Latest Work
          </h3>
          <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#CBACF9]/60" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4 px-4 sm:px-0 justify-items-center">
          {featuredProjects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>

      {/* Frontend Projects Section */}
      <div className="w-full">
        <h3 className="text-xl sm:text-2xl text-center font-semibold mb-6 text-gray-300">
          Frontend Projects
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-4 px-4 sm:px-0 justify-items-center">
          {frontendProjects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>

      {/* Fullstack Projects Section */}
      <div className="w-full">
        <h3 className="text-xl sm:text-2xl text-center font-semibold mb-6 text-gray-300">
          Fullstack Projects
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-4 px-4 sm:px-0 justify-items-center">
          {fullstackProjects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>

      {/* Backend & AI Projects Section */}
      <div className="w-full">
        <h3 className="text-xl sm:text-2xl text-center font-semibold mb-6 text-gray-300">
          Backend &amp; AI Projects
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 px-4 sm:px-0 justify-items-center">
          {backendAiProjects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
