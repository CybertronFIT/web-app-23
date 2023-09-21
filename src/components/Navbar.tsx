"use client";

import { FC, useState } from "react";
import { Link } from "react-scroll";
import MobileNav from "./ui/MobileNav";
import CustomLink from "./ui/CustomLink";
import { Codesandbox } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [activeSection, setActiveSection] = useState("");

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <header className="fixed w-full top-0 inset-x-0 h-fit z-50 p-4 md:px-32">
      <div className="px-5 py-4 md:px-10 md:py-6 2xl:py-8 bg-white/10 backdrop-blur-lg h-full max-w-7xl rounded-2xl mx-auto flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <Link 
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "hero"
            } cursor-pointer flex title-font md:font-bold items-center  mb-0`}
          >
            <span className="ml-3 text-lg md:text-2xl" aria-label="Home">
              Cybertron
            </span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <CustomLink
              activeSection={activeSection}
              handleSetActive={handleSetActive}
              title="Home"
              to="hero"
            />
            <CustomLink
              activeSection={activeSection}
              handleSetActive={handleSetActive}
              title="About"
              to="about"
            />
            <CustomLink
              activeSection={activeSection}
              handleSetActive={handleSetActive}
              title="Events"
              to="events"
            />
            <CustomLink
              activeSection={activeSection}
              handleSetActive={handleSetActive}
              title="Team"
              to="team"
            />
          </nav>
          <Codesandbox
            size={32}
            strokeWidth={1.25}
            className="md:inline-flex hidden"
          />
          <MobileNav
            activeSection={activeSection}
            handleSetActive={handleSetActive}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
