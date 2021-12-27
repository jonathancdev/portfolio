import React, { useState } from "react";
import { scrollTo } from "../utils/scrollTo";

const Header = ({ fixed }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = (e) => {
    console.log(e);
  };
  const handleClick = (section) => {
    scrollTo(section);
    setActiveLink(section);
  };
  return (
    <header
      onScroll={handleScroll}
      className={fixed ? "header fixed" : "header"}
    >
      <nav>
        <ul className="navlinks">
          <span
            className={activeLink === "home" ? "navlink active" : "navlink"}
            onClick={() => handleClick("home")}
          >
            Home
          </span>
          <span
            className={activeLink === "about" ? "navlink active" : "navlink"}
            onClick={() => handleClick("about")}
          >
            About
          </span>

          <span
            className={
              activeLink === "projectsection" ? "navlink active" : "navlink"
            }
            onClick={() => handleClick("projectsection")}
          >
            Projects
          </span>
          <span
            className={activeLink === "contact" ? "navlink active" : "navlink"}
            onClick={() => handleClick("contact")}
          >
            Contact
          </span>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
