"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const Cards = [
  {
    title: "CyberTron",
    img: "1",
    page: "ambuja"
  },
  {
    title: "CyberTron",
    img: "2",
    page: ""
  },
  {
    title: "CyberTron",
    img: "3",
    page: ""
  },
  {
    title: "CyberTron",
    img: "4",
    page: ""
  },
  {
    title: "CyberTron",
    img: "5",
    page: ""
  },
  {
    title: "CyberTron",
    img: "6",
    page: ""
  },
];

type CardProps = {
  card: {
    title: string;
    img: string;
    page: string;
  };
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
          {Cards.map((card, index) => {
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
    <div className="group relative h-80 w-60 md:h-[350px] md:w-[260px] 2xl:h-[450px] 2xl:w-[350px] overflow-hidden bg-neutral-200 rounded-2xl"
    >
      <div
        style={{
          backgroundImage: `url(backgrounds/events/event_${card.img}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center pt-24">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 px-16 text-2xl md:text-4xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
    </Link>
  );
};

const Events = () => {
  return (
    <section className="md:px-28 text-center mt-24 md:mt-56" id="events">
      <h2 className="text-4xl md:text-6xl 2xl:text-7xl -mb-24 md:mb-14 2xl:-mb-16 text-cyan-200">Events</h2>
      <HorizontalScrollCarousel />
    </section>
  );
};

export default Events;
