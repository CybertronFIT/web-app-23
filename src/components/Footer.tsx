import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-transparent body-font">
      <div className="container px-16 md:px-36 2xl:px-16 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          id="footer-head"
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <span className="ml-3 text-xl text-cyan-200">Cybertron</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2024 Cybertron —{" "}
          <Link
            href={"https://github.com/CybertronFIT"}
            className="text-cyan-500"
          >
            FIT
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            className="text-gray-400 hover:text-cyan-500 mx-auto"
            href={"https://www.facebook.com/profile.php?id=61551479240260"}
          >
            <Facebook size={28} strokeWidth={1.5} />
          </Link>

          <Link
            className="ml-3 text-gray-400 hover:text-cyan-500 mx-auto"
            href={"https://instagram.com/cybertron_fit?igshid=YWYwM2I1ZDdmOQ=="}
          >
            <Instagram size={28} strokeWidth={1.5} />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
