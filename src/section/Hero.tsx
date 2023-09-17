import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="min-h-screen text-center ">
      <div className="my-auto mx-auto py-[15%] px-[25%]">
        <h1 className="text-6xl font-bold">CYBERTRON' 23</h1>
        <p className="mt-12">
          An Initiative by the Department of Computer Science and Engineering
          (Internet of Things and Cyber Security including Blockchain
          Technology)
        </p>
      </div>
    </div>
  );
};

export default Hero;
