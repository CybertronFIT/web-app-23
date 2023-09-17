import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <>
      <section
        id="about-div"
        className="px-36 bg-gradient-to-b text-center from-cyan-600 via-cyan-950 to-black min-h-screen z-10 grid place-content-center w-full -mt-56"
        style={{
          clipPath:
            "polygon(26% 29%, 77% 29%, 100% 0, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0 0)",
        }}
      >
        <div className="px-72 mt-72">
          <h2 className="text-4xl">About</h2>
          <p className="mt-12 text-white">
            An Initiative by the Department of Computer Science and Engineering
            (Internet of Things and Cyber Security including Blockchain
            Technology)
          </p>
        </div>
        <div className="flex justify-center mt-24">
                <Image src={"/backgrounds/about/about-4.png"} width={"300"} height={"300"} alt={""}  />
        </div>
      </section>
    </>
  );
};

export default About;
