"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { events } from "@/components/info/Objects";
import { useRef } from "react";
import Link from "next/link";

type CardProps = {
  card: {
    title: string;
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
            backgroundImage: `url(backgrounds/events/${card.page}.webp)`,
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
            <p className="text-sm md:text-lg 2xl:text-xl text-orange-400">
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
    <section className="md:px-28 text-center mt-24 md:mt-56" id="events">
      <h2 className="text-4xl md:text-6xl 2xl:text-7xl -mb-24 md:mb-14 2xl:-mb-16 text-orange-100">
        Events
      </h2>
      {/* <h3 className="text-orange-500/30">For this Summer version</h3> */}
      <HorizontalScrollCarousel />
      <Link
        className="mx-auto p-4 text-black bg-orange-400 border-2 border-orange-500 shadow-lg hover:text-white shadow-orange-500 rounded-xl"
        href="/events"
      >
        Read Rules
      </Link>
    </section>
  );
};

export default Events;
