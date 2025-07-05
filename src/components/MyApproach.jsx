import React from 'react'
import Card from './ApproachCard'

const MyApproach = () => {

   const steps =  [
  {
    no: "1",
    backText: {
      phase: "Phase 01",
      title: "Planning & Blueprinting",
      description: "We begin by understanding your vision, setting clear goals, and creating a detailed roadmap. This ensures we're aligned and ready to build with purpose."
    }
  },
  {
    no: "2",
    backText: {
      phase: "Phase 02",
      title: "Design & Architecture",
      description: "With a solid plan, I craft wireframes, define user flows, and architect the system. This phase builds the foundation for a smooth and scalable development process."
    }
  },
  {
    no: "3",
    backText: {
      phase: "Phase 03",
      title: "Development & Iteration",
      description: "Here’s where the magic happens. I bring the designs to life through clean, functional code—sharing progress regularly and iterating based on your feedback."
    }
  },
  {
    no: "4",
    backText: {
      phase: "Phase 04",
      title: "Testing & Refinement",
      description: "Before launch, we run thorough tests—squashing bugs, refining the experience, and ensuring everything works perfectly across devices and scenarios."
    }
  }
]

    return (
        <div className="w-full my-40 sm:my-0 sm:w-[80%] min-h-screen p-4 sm:px-20 sm:py-42 mx-auto  flex flex-col gap-10 sm:gap-14 items-center justify-center">
            <h2 className="text-2xl sm:text-4xl font-bold">My <span className="text-[#CBACF9]">approach</span></h2>
            <div className="w-full p-1 sm:w-[80%] relative h-full flex flex-col sm:flex-row gap-8 justify-center items-center sm:gap-8">
                {steps.map(el => (
                    <Card frontText={`Phase ${el.no}`} backText={el.backText} key={el.no} />
                ))}
            </div>
        </div>)
}

export default MyApproach
