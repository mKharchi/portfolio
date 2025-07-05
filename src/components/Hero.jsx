import Button from "./Button"
import Image from "next/image"
import Copy from "./CopyEmail"

const Hero = ({ setSelectedLink }) => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16" style={{ backgroundImage: "url('/spotlight.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full max-w-7xl mx-auto text-center flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10">
                
                {/* Main heading */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl   text-white font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
                    Transforming Concepts into Seamless <span className="text-[#CBACF9]">User Experiences</span>
                </h1>
                
                {/* Description paragraph */}
                <div className="w-full max-w-4xl mx-auto">
                    <p className="text-sm sm:text-lg md:text-xl  font-semibold text-white/90 leading-relaxed sm:leading-relaxed md:leading-relaxed">
                        Hi! I'm <span className="font-bold text-[#CBACF9]">Kharchi Merouane</span>, a full-stack web developer and computer science student.
                        I create modern, high-performing websites for businesses.
                        My expertise lies in React and the MERN stack, supported by a strong foundation in computer science principles like object-oriented programming and algorithms.
                    </p>
                </div>
                
                {/* Button */}
                <div className="mt-4 sm:mt-6 md:mt-8">
                    <Button setSelectedLink={setSelectedLink} />
                </div>
            </div>
        </section>
    )
}

export default Hero