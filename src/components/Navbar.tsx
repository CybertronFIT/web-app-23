"use client";

import { FC, useState } from "react";
import { Link } from "react-scroll";
import MobileNav from "./ui/MobileNav";
import CustomLink from "./ui/CustomLink";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [activeSection, setActiveSection] = useState("");

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <header className="fixed w-full top-0 inset-x-0 h-fit z-50 p-4">
      <div className="px-5 py-4 md:px-10 md:py-8 bg-white/10 backdrop-blur-lg h-full max-w-7xl rounded-2xl mx-auto flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "home"
            } cursor-pointer flex title-font  font-bold items-center  mb-0`}
          >
            <span className="ml-3 text-lg md:text-2xl" aria-label="Home">
              Cybertron
            </span>
          </Link>
          <nav className="hidden md:flex gap-4">
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
