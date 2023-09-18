"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown-menu";
import { AlignJustify } from "lucide-react";
import { Button } from "./Button";
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
        <Button
          variant="outline"
          className="ml-2 inline-flex md:hidden"
          size="icon"
        >
          <AlignJustify className="h-[1.2rem] w-[1.2rem] " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-7">
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
