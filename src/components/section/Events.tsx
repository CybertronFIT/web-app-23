"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { Key, useRef, useState } from "react";
import Link from "next/link";

type CardProps = {
  card: {
    title: string;
    page: string;
    image: string;
  };
};

const events = [
  {
    title: "Tech Talks",
    page: "tech-talks",
    image:
      "https://user-images.githubusercontent.com/145213000/277575784-a6b0006e-40ba-4289-a092-052d2470d429.png",
  },
  {
    title: "Capture The Flag",
    page: "ctf",
    image:
      "https://user-images.githubusercontent.com/145213000/277575784-a6b0006e-40ba-4289-a092-052d2470d429.png",
  },
  {
    title: "Hack the Algo",
    page: "coding",
    image:
      "https://user-images.githubusercontent.com/145213000/277575804-3192b07a-a8c5-4cc9-9f6b-bc8d70b99989.jpg",
  },
  {
    title: "Project Display",
    page: "project",
    image:
      "https://user-images.githubusercontent.com/145213000/277575820-63608a30-3935-4b76-8bce-9cdf8a6a3584.png",
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 2xl:gap-8">
          {events.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: CardProps) => {
  return (
    <Link href={`/events/${card.page}`}>
      <div className="group relative h-80 w-60 md:h-[350px] md:w-[260px] 2xl:h-[450px] 2xl:w-[350px] overflow-hidden bg-neutral-200 rounded-2xl">
        <div
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center pt-24">
          <div className="bg-gradient-to-br from-white/20 to-white/0 p-6 md:p-8 px-2 w-60 md:w-[260px] 2xl:w-[350px] uppercase text-white bg-black/50 backdrop-blur-lg">
            <h4 className="text-xl md:text-2xl 2xl:text-4xl font-bold">
              {card.title}
            </h4>
            <p className="text-sm md:text-lg 2xl:text-xl text-cyan-400">
              Click to View
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Events = () => {
  return (
    <section className="md:px-28 text-center mt-24" id="events">
      <div className="flex items-center justify-center flex-col gap-y-10">
        <h2 className="text-4xl md:text-6xl 2xl:text-7xl  text-cyan-100">
          Events
        </h2>
        <span
          id="scroll-to-down"
          className="font-bold uppercase tracking-[0.25em] md:tracking-[1em]"
        >
          Scroll to down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <Link
        className="mx-auto p-4 text-black bg-cyan-400 border-2 border-cyan-500 shadow-lg hover:text-white shadow-cyan-500 rounded-xl"
        href="/events"
      >
        Read Rules
      </Link>
    </section>
  );
};

export default Events;
