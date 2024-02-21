import { Codesandbox } from "lucide-react";
import Link from "next/link";
import React from "react";

const EventNav = () => {
  return (
    <header className="fixed w-full top-0 inset-x-0 h-fit z-50 p-4 md:px-32">
      <div className="px-5 py-4 md:px-10 md:py-6 2xl:py-8 bg-white/10 backdrop-blur-lg h-full max-w-7xl rounded-2xl mx-auto flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <Link
            className="cursor-pointer flex title-font md:font-bold items-center mb-0"
            href="/"
          >
            <span className="ml-3 text-lg md:text-2xl" aria-label="Home">
              Cybertron
            </span>
          </Link>

          <Codesandbox size={32} strokeWidth={1.25} />
        </div>
      </div>
    </header>
  );
};

export default EventNav;
