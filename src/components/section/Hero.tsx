// import dynamic from 'next/dynamic'
 
// const Countdown = dynamic(() => import('@/components/ui/Countdown'), { ssr: false })

import Countdown from "@/components/ui/Countdown";


const Hero = () => {
  return (
    <section id="hero" className="h-[125vh] text-center md:pb-16 2xl:pb-32">
      <div className="backdrop-blur-[4px] h-[125vh] w-full md:mb-12 2xl:mb-16 absolute">
        <div className="mb-16 md:mb-24 pt-[15%] md:px-[20%]">
          <h1
            id="Hero-h1"
            className="text-4xl md:text-[5rem] 2xl:text-8xl font-bold text-shadow-cyan mt-36 md:mt-0"
          >
            CYBERTRON&apos; 24
          </h1>
          <p className="mt-12 md:mt-16 text-cyan-200/30 text-xl md:text-2xl tracking-widest px-16">
            <span className="text-white">Winter Version</span> Coming In...
          </p>
        </div>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
