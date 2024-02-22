import { FC } from "react";
import { Link } from "react-scroll";

interface CustomLinkProps {
  to: string;
  title: string;
  activeSection: string; // The currently active section
  handleSetActive: (section: string) => void;
}

const CustomLink: FC<CustomLinkProps> = ({
  to,
  title,
  activeSection,
  handleSetActive,
}) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      onSetActive={handleSetActive}
      className={`${
        activeSection === to ? "text-cyan-500 md:scale-110" : "md:text-gray-200 text-gray-600"
      } md:cursor-pointer mr-5 md:hover:text-cyan-500 md:hover:scale-110 md:text-lg`}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
