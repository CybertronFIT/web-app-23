"use client";

import { useState } from "react";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import CustomLink from "./custom-link";
import { UserCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const NavbarClient = (props: {
  isRegistered: boolean;
  isAdmin: boolean;
  avatar: string;
}) => {
  const [activeSection, setActiveSection] = useState("");
  const logo = props.avatar
    .split(" ")
    .map((n) => n[0])
    .join("");
  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <div className="w-full flex items-center justify-between">
      <Link
        href={"/"}
        className={`cursor-pointer flex title-font md:font-bold items-center  mb-0`}
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
          {!props.isRegistered ? (
            <UserCircle
              size={38}
              strokeWidth={1.25}
              className={`md:inline-flex hidden animate-pulse ${"text-cyan-400"}`}
            />
          ) : (
            <div
              className={`md:grid hidden place-content-center text-white h-10 w-10 rounded-full ${
                props.isAdmin ? "bg-indigo-600" : "bg-cyan-600"
              }`}
            >
              {logo}
            </div>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>
            {props.isRegistered ? props.avatar : "My Account"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {props.isRegistered ? (
            <>
              <DropdownMenuItem className="my-3">
                <a href={"/profile"}>Profile</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-cyan-500 text-black focus:bg-cyan-500 rounded-sm">
                {/* <button onClick={logOut}>Log Out</button> */}
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
        isRegistered={props.isRegistered}
        isAdmin={props.isAdmin}
        avatar={props.avatar}
      />
    </div>
  );
};

export default NavbarClient;
