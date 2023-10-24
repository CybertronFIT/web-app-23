"use client";

import { FC, useState, useEffect } from "react";
import { Link } from "react-scroll";
import MobileNav from "./ui/MobileNav";
import CustomLink from "./ui/CustomLink";
import { UserCircle } from "lucide-react";
import axios, { AxiosError } from "axios";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "./ui/Dropdown-menu";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [activeSection, setActiveSection] = useState("");
  const [isRegistered, setRegistered] = useState(false);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const result = await axios("/api/auth/verify");
        if (result.status === 200) {
          setRegistered(true);
        }
      } catch (error) {
        const e = error as AxiosError;
        console.error(e.response?.status);
      }
    };

    checkRegistration();
  }, []);

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

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              {!isRegistered ? (
                <>
                  <div className="h-3 w-3 absolute rounded-full bg-cyan-500 animate-ping hidden md:flex"></div>
                  <div className="h-3 w-3 relative rounded-full bg-cyan-500 hidden md:flex"></div>
                </>
              ) : (
                <></>
              )}
              <UserCircle
                size={32}
                strokeWidth={1.25}
                className={`md:inline-flex hidden ${
                  !isRegistered ? "-mt-2" : "text-cyan-400"
                }`}
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {isRegistered ? (
                <>
                  <DropdownMenuItem className="my-3">
                    <a href={"/profile"}>Profile</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="bg-cyan-500 text-black focus:bg-cyan-500 rounded-sm">
                    <button>Log Out</button>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem className="my-3">
                    <a href={"/auth/login"}>Log In</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="bg-cyan-500 text-black focus:bg-cyan-500 rounded-sm">
                    <a href={"/auth/signup"}>Register</a>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

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
