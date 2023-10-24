"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { Codesandbox } from "lucide-react";
import CustomMobLink from "./CustomMobLink";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

interface MobileNavProps {
  activeSection: string;
  handleSetActive: (section: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  activeSection,
  handleSetActive,
}) => {
  const [isRegistered, setRegistered] = useState(false);

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Codesandbox
          size={32}
          strokeWidth={1.25}
          className="inline-flex md:hidden text-cyan-400 animate-pulse"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-7">
        <DropdownMenuItem>
          <CustomMobLink
            activeSection={activeSection}
            handleSetActive={handleSetActive}
            title="Home"
            to="hero"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CustomMobLink
            activeSection={activeSection}
            handleSetActive={handleSetActive}
            title="About"
            to="about"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CustomMobLink
            activeSection={activeSection}
            handleSetActive={handleSetActive}
            title="Events"
            to="events"
          />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CustomMobLink
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
