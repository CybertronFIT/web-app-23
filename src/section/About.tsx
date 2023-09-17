"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const Images = ["Coding", "Projection", "Gaming", "Hacking"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % Images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImage]);

  return (
    <section
      id="about-div"
      className="px-56 bg-gradient-to-b text-center from-cyan-300 via-cyan-700 to-black min-h-screen z-2 grid place-content-center w-full -mt-72"
      style={{
        clipPath:
          "polygon(26% 29%, 77% 29%, 100% 0, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0 0)",
      }}
    >
      <div className="px-72 mt-72">
        <h2 className="text-6xl mt-16">About</h2>
        <p className="mt-16 text-white">
          An Initiative by the Department of Computer Science and Engineering
          (Internet of Things and Cyber Security including Blockchain
          Technology)
        </p>
      </div>
      <div className="flex justify-center mt-32">
        <div>
          <Image
            className="animate-[bounce_3s_infinite]"
            src={`/backgrounds/about/about-${currentImage + 1}.png`}
            width="350"
            height="350"
            alt={"Image"}
          />
          <h3 className="text-2xl mt-8">{Images[currentImage]}</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
