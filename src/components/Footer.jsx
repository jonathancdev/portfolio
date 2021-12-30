import React from "react";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="icons">
        <a className="icon__link" href="#">
          <Icon name="github" size="2.5rem" color="#ffffff"></Icon>
          <span>github</span>
        </a>
        <a className="icon__link" href="#">
          <Icon name="protonmail" size="2.5rem" color="#ffffff"></Icon>
          <span>email</span>
        </a>
      </div>
      <p className="footer__text">&copy; 2022 Jonathan C.</p>
    </footer>
  );
}
