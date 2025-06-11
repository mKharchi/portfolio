import Button from "./Button"
import Image from "next/image"
import Copy from "./CopyEmail"

const Hero = ({ setSelectedLink }) => {
    return (
        <section className="w-full gap-8 h-[110vh] sm:min-h-screen p-8 sm:p-0 flex flex-col justify-center items-center" style={{ backgroundImage: "url('/spotlight.png')", backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-screen gap-6 sm:gap-8 text-center sm:w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-6xl text-white font-extrabold">
                    Transforming Concepts into Seamless <span className="text-[#CBACF9]">User Experiences</span>
                </h1>
                <p className="text-sm sm:text-lg font-semibold">
                    Hi! I’m Kharchi Merouane, a full-stack web developer. I specialize in React and have solid experience with MongoDB, Express, and Node.js, backed by a strong foundation in CS fundamentals like OOP and algorithms.
                </p>
                <Button setSelectedLink={setSelectedLink} />
            </div>
        </section>
    )
}

export default Hero
