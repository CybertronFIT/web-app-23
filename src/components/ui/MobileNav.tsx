"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { Codesandbox } from "lucide-react";
import CustomMobLink from "./CustomMobLink";

interface MobileNavProps {
  activeSection: string;
  handleSetActive: (section: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  activeSection,
  handleSetActive,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Codesandbox
          size={32}
          strokeWidth={1.25}
          className="inline-flex md:hidden"
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
