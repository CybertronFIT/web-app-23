"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const Images = ["Coding (Winter Version)", "Project Display (Winter Version)", "Gaming", "Hacking (Winter Version)"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % Images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImage, Images.length]);

  return (
    <section className="text-center min-h-screen w-full -mt-[22rem] bg-gradient-to-b from-transparent via-orange-400 to-transparent md:via-transparent">
      <div
        className="mt-16 md:mt-4 md:bg-gradient-to-b md:from-orange-400 md:to-black w-full grid place-content-center"
        style={{
          clipPath:
            "polygon(26% 29%, 77% 29%, 100% 0, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0 0)",
        }}
      >
        <div id="about" className="md:px-72 mt-72">
          <h2
            
            className="text-4xl md:text-6xl 2xl:text-7xl mt-16 md:mt-32"
          >
            About
          </h2>
          <p className="mt-16 text-white px-12 md:px-24 2xl:px-80 text-sm md:text-lg">
            An Initiative by the Department of Computer Science and Engineering
            (Internet of Things and Cyber Security including Blockchain
            Technology)
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center mt-32 h-96 pb-8">
          <div className="h-full flex flex-col gap-6">
            <Image
              className="animate-[bounce_3s_infinite] w-56 md:w-full"
              src={`/backgrounds/about/about-${currentImage + 1}.png`}
              width="350"
              height="220"
              alt={"Event Image"}
            />
            <h3 className="text-xl md:text-2xl bottom-0 h-8">
              {Images[currentImage]}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
