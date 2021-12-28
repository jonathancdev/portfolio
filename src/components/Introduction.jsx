import React from "react";
import { scrollTo } from "../utils/scrollTo";
import arrowIcon from "../images/arrowdown.png";
export default function Introduction({ updateActiveLink }) {
  const handleClick = (section) => {
    scrollTo(section);
    updateActiveLink(section);
  };
  return (
    <section id="home" className="introduction">
      <div className="introduction__content">
        <div className="introduction__heading">
          <h1 className="introduction__heading--primary">Hello!</h1>
          <h1 className="introduction__heading--primary">
            My name is <span>Jonathan</span>.
          </h1>
          <h1 className="introduction__heading--primary">
            I'm a web developer.
          </h1>
        </div>
        <button
          onClick={() => handleClick("about")}
          className="introduction__button"
        >
          <img src={arrowIcon} alt="arrow" className="arrow-down-icon" />
        </button>
      </div>
    </section>
  );
}
