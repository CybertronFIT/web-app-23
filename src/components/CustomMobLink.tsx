import { FC } from "react";
import { Link } from "react-scroll";

interface CustomMobLinkProps {
  to: string;
  title: string;
  activeSection: string;
  handleSetActive: (section: string) => void;
}

const CustomMobLink: FC<CustomMobLinkProps> = ({
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
        activeSection === to ? "text-cyan-500" : "text-gray-300"
      }  mr-5 `}
    >
      {title}
    </Link>
  );
};

export default CustomMobLink;
