import Countdown from "@/components/ui/Countdown";

const Hero = () => {
  return (
    <section
    id="hero"
     className="min-h-screen text-center pb-24">
      <div className="backdrop-blur-[4px]">
      <div className="mb-24 pt-[15%] px-[20%]">
        <h1 id="Hero-h1" className="text-8xl font-bold text-shadow-cyan">CYBERTRON&apos; 23</h1>
        <p className="mt-12 text-cyan-200/30 text-2xl tracking-widest">
        <span className="text-white">Summer Version</span> Coming In...
        </p>
      </div>
      <Countdown />
      {/* <h2 className="text-cyan-400 text-3xl tracking-widest font-bold my-6">Coming Soon</h2> */}
      </div>
    </section>
  );
};

export default Hero;
