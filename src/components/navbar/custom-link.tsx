import { FC } from "react";
import { Link } from "react-scroll";

interface CustomLinkProps {
  to: string;
  title: string;
  activeSection: string; // The currently active section
  isSheet: boolean;
  handleSetActive: (section: string) => void;
}

const CustomLink: FC<CustomLinkProps> = ({
  to,
  title,
  activeSection,
  isSheet,
  handleSetActive,
}) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      onSetActive={handleSetActive}
      className={`${activeSection === to ? "text-cyan-500" : "text-gray-200"} ${
        isSheet
          ? "p-2 bg-gray-400/20 rounded-md text-center"
          : "mr-5 md:hover:scale-110 md:text-lg"
      } ${
        activeSection === to && !isSheet ? "scale-110" : ""
      } md:cursor-pointer md:hover:text-cyan-500`}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
