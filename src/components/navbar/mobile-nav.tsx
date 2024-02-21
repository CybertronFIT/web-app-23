"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Codesandbox } from "lucide-react";
import CustomLink from "./custom-link";
import Link from "next/link";

interface MobileNavProps {
  activeSection: string;
  isRegistered: boolean;
  isAdmin: boolean;
  avatar: string;
  handleSetActive: (section: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  activeSection,
  handleSetActive,
  isAdmin,
  avatar,
  isRegistered,
}) => {
  const logo = avatar
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {!isRegistered ? (
          <Codesandbox
            size={32}
            strokeWidth={1.25}
            className="inline-flex md:hidden text-cyan-400 animate-pulse"
          />
        ) : (
          <div
            className={`grid md:hidden place-content-center text-white h-10 w-10 rounded-full ${
              isAdmin ? "bg-violet-700" : "bg-cyan-600"
            }`}
          >
            {logo}
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-7">
        <DropdownMenuItem>
          <CustomLink
            activeSection={activeSection}
            handleSetActive={handleSetActive}
            title="Home"
            to="hero"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CustomLink
            activeSection={activeSection}
            handleSetActive={handleSetActive}
            title="About"
            to="about"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CustomLink
            activeSection={activeSection}
            handleSetActive={handleSetActive}
            title="Events"
            to="events"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CustomLink
            activeSection={activeSection}
            handleSetActive={handleSetActive}
            title="Team"
            to="team"
          />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {isRegistered ? (
          <>
            <DropdownMenuItem className="my-3">
              <Link href={"/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="bg-cyan-500 text-black focus:bg-cyan-500 rounded-sm">
              {/* <button onClick={logOut}>Log Out</button> */}
              <button>Log Out</button>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem className="">
              <Link href={"/auth/login"}>Log In</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="bg-cyan-500 text-black focus:bg-cyan-500 rounded-sm">
              <Link href={"/auth/signup"}>Register</Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
