import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="fixed w-full top-0 inset-x-0 h-fit  z-50 p-4">
      <div className="px-10 py-6 bg-white/10 backdrop-blur-md  h-full  max-w-7xl rounded-lg mx-auto flex items-center justify-between">
        <div className="w-full flex items-center justify-between gap-4">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">CyberTron</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">About</a>
            <a className="mr-5 hover:text-white">Events</a>
            <a className="mr-5 hover:text-white">Team</a>
          </nav>
          <Link
            href={"/sign-in"}
            className={cn(
              buttonVariants({ size: "lg" }),
              "text-lg font-semibold tracking-tighter hidden md:flex"
            )}
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
