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
        activeSection === to ? "text-cyan-500 scale-110" : "text-gray-300"
      } cursor-pointer mr-5 hover:text-cyan-500 hover:scale-110`}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
