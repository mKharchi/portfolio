import Button from "./Button"



const Hero = () => {
  return (
    <section className="w-full  h-screen p-4 sm:p-0  flex justify-center items-center" style={{ backgroundImage: "url('/spotlight.png')"   , backgroundRepeat:' no-repeat' }}>
        <div className="w-full gap-4 sm:gap-8 text-center sm:w-1/2 h-full sm:h-1/2 flex flex-col items-center justify-center ">
            <p className="text-md font-inter font-medium">Dynamic Web Magic with Next.js</p>
            <h1 className="text-6xl text-white font-extrabold">
                Transforming Concepts into Seamless <span className="text-[#CBACF9]">User Experiences</span>
            </h1>
            <p className="text-lg font-semibold">Hi! I’m Kharchi Merouane, a Next.js Developer based in Algeria</p>
            <Button />
        </div>
    </section>
)
}

export default Hero
