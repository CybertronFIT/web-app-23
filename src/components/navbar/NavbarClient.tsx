"use client";

import Link from "next/link";
import { useState } from "react";
import LogOut from "@/actions/logout";
import CustomLink from "./custom-link";
import { Codesandbox } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sections = ["Home", "About", "Events", "Team"];

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
        {sections.map((section, index) => (
          <CustomLink
            key={index}
            activeSection={activeSection}
            handleSetActive={handleSetActive}
            title={section}
            to={section == "Home" ? "hero" : section.toLowerCase()}
            isSheet={false}
          />
        ))}
      </nav>

      <Sheet defaultOpen>
        <SheetTrigger className="focus:outline-none">
          {!props.isRegistered ? (
            <Codesandbox
              size={32}
              strokeWidth={1.25}
              className="inline-flex text-cyan-400 animate-pulse"
            />
          ) : (
            <div
              className={`grid place-content-center text-white h-10 w-10 rounded-full ${
                props.isAdmin ? "bg-indigo-600" : "bg-cyan-600"
              }`}
            >
              {logo}
            </div>
          )}
        </SheetTrigger>
        <SheetContent className="bg-[#0c0c0c9d] border-none z-50 backdrop-blur-md w-[70%]">
          <SheetHeader>
            <SheetTitle className="text-center text-white text-xl md:text-2xl mt-20">
              {" "}
              {props.isRegistered ? props.avatar : "Cybertron"}
            </SheetTitle>
            <SheetDescription className="h-full px-6 md:px-12">
              <div className="flex flex-col gap-4 justify-center mt-12">
                {sections.map((section, index) => (
                  <CustomLink
                    key={index}
                    activeSection={activeSection}
                    handleSetActive={handleSetActive}
                    title={section}
                    to={section == "Home" ? "hero" : section.toLowerCase()}
                    isSheet={true}
                  />
                ))}
              </div>
              <Separator className="my-10 bg-gray-500" />
              {props.isRegistered ? (
                <form className="flex flex-col gap-6 text-center">
                  <div className="border border-cyan-500 rounded-md p-2 text-cyan-500 hover:bg-cyan-300/10">
                    <a href={"/profile"}>Profile</a>
                  </div>
                  <div className="bg-cyan-500 flex justify-center text-black hover:text-white hover:bg-cyan-500 rounded-md p-2">
                    <button className="w-fit outline-none" formAction={LogOut}>
                      Log Out
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col gap-4 text-center">
                  <div className="border border-cyan-500 rounded-md p-2 text-cyan-500 hover:bg-cyan-300/10">
                    <a href={"/auth/login"}>Log In</a>
                  </div>
                  <div className="bg-cyan-500 text-white md:text-black hover:text-white hover:bg-cyan-500 rounded-md p-2">
                    <a href={"/auth/signup"}>Register</a>
                  </div>
                </div>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarClient;
