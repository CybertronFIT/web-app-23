import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div
    id="hero"
     className="min-h-screen text-center">
      <div className="my-auto mx-auto py-[15%] px-[20%] backdrop-blur-[3px] min-h-screen">
        <h1 id="Hero-h1" className="text-8xl font-bold text-shadow-cyan">CYBERTRON' 23</h1>
        <p className="mt-12 text-cyan-200/80 text-2xl tracking-widest">
        <span className="text-white">Summer Version</span> | Winter Version
        </p>
      </div>
    </div>
  );
};

export default Hero;
