import Button from "./Button"
import Image from "next/image"
import Copy from "./CopyEmail"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
const Hero = ({ setSelectedLink }) => {

    useGSAP(()=>{
        gsap.to('.hero-title' ,{
            y:0,
            opacity:1 , 
            stagger:0.2,
            duration:1,
            ease:"power3.in", 
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 20%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
        })

    } , [])

    const containerRef = useRef()

    return (
        <section ref={containerRef} className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" style={{ backgroundImage: "url('/spotlight.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full md:w-[80%] max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12">
                {/* Main heading */}
                <h1 className="hero-title opacity-0 translate-y-14 text-2xl sm:text-4xl  text-white font-extrabold leading-tight">
                    Transforming Concepts into Seamless <span className="text-[#CBACF9]">User Experiences</span>
                </h1>

                {/* Who am I section */}
                <div className="hero-title opacity-0 translate-y-24 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-6  text-left shadow-lg shadow-black/20 backdrop-blur-xl">
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">Who am I</h2>
                    <p className="text-sm sm:text-base leading-relaxed text-white/80">
                        Hi! I&apos;m <span className="font-bold text-[#CBACF9]">Kharchi Merouane</span>, a full-stack web developer and computer science student.
                        I build polished, high-performance websites with modern technologies like React, Next.js, and fullstack architectures.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Button setSelectedLink={setSelectedLink} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero