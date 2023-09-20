import Countdown from "@/components/ui/Countdown";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen text-center md:pb-16 2xl:pb-32">
      <div className="backdrop-blur-[4px] h-full md:mb-12 2xl:mb-16">
        <div className="mb-16 md:mb-24 pt-[15%] md:px-[20%]">
          <h1
            id="Hero-h1"
            className="text-4xl md:text-[5rem] 2xl:text-8xl font-bold text-shadow-cyan mt-36 md:mt-0"
          >
            CYBERTRON&apos; 23
          </h1>
          <p className="mt-12 md:mt-16 text-orange-200/30 text-xl md:text-2xl tracking-widest px-12">
            <span className="text-white">Summer Version</span> Coming In...
          </p>
        </div>
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
