import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/Button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="fixed w-full top-0 inset-x-0 h-fit z-50 p-4">
      <div className="px-10 py-6 bg-white/10 backdrop-blur-lg  h-full  max-w-7xl rounded-3xl mx-auto flex items-center justify-between">
        <div className="w-full flex items-center justify-between gap-4">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">CyberTron</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-4 items-center text-base justify-center">
            <Link className={"mx-2 hover:text-cyan-500"} href={""}>About</Link>
            <Link className={"mx-2 hover:text-cyan-500"} href={""}>Events</Link>
            <Link className={"mx-2 hover:text-cyan-500"} href={""}>Team</Link>
            <Link className={"mx-2 hover:text-cyan-500"} href={""}>Contact</Link>
          </nav>
          <Link
            href={"/sign-in"}
            className={cn(
              buttonVariants(),
              "text-lg tracking-tighter hidden md:flex bg-transparent hover:border-2 hover:border-cyan-400 hover:text-cyan-400"
            )}
          >
            Sign In
          </Link>
          <Link
            href={"/sign-up"}
            className={cn(
              buttonVariants(),
              "text-lg tracking-tighter hidden md:flex hover:shadow-lg hover:shadow-cyan-300"
            )}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
