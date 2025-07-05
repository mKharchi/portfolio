"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from './ApproachCard'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const MyApproach = () => {
  const titleRef = useRef(null)
  const containerRef = useRef(null)

  const steps = [
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
        description: "Here's where the magic happens. I bring the designs to life through clean, functional code—sharing progress regularly and iterating based on your feedback."
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split the title text into words for animation
      const titleElement = titleRef.current
      if (titleElement) {
        // Split text into spans for each word
        const words = titleElement.textContent.split(' ')
        titleElement.innerHTML = words.map(word => `<span class="inline-block">${word}</span>`).join(' ')
        
        const wordSpans = titleElement.querySelectorAll('span')
        
        // Animate each word
        gsap.fromTo(wordSpans, 
          {
            y: 100,
            opacity: 0,
            rotationX: 90,
            transformOrigin: "50% 50%"
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )

        // Add a subtle glow effect to the colored word
        const coloredSpan = Array.from(wordSpans).find(span => span.textContent === 'approach')
        if (coloredSpan) {
          gsap.to(coloredSpan, {
            textShadow: "0 0 20px #CBACF9, 0 0 40px #CBACF9, 0 0 60px #CBACF9",
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          })
        }
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="w-full my-40 sm:my-0 sm:w-[80%] min-h-screen p-4 sm:px-20 sm:py-42 mx-auto flex flex-col gap-10 sm:gap-14 items-center justify-center">
      <h2 ref={titleRef} className="text-2xl sm:text-4xl font-bold">
        My <span className="text-[#CBACF9]">approach</span>
      </h2>
      <div className="w-full p-1 sm:w-[80%] relative h-full flex flex-col sm:flex-row gap-8 justify-center items-center sm:gap-8">
        {steps.map(el => (
          <Card frontText={`Phase ${el.no}`} backText={el.backText} key={el.no} />
        ))}
      </div>
    </div>
  )
}

export default MyApproach
