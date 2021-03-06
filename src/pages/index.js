import * as React from "react";
import { useState, useEffect } from "react";

import "../css/App.css";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import About from "../components/About";
import ProjectSection from "../components/ProjectSection";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useScrollPosition from "../hooks/useScrollPosition";
import Icon from "../components/Icon";
const IndexPage = () => {
  const {
    headerShouldBeFixed,
    arrowButtonShouldBeVisible,
    handleScroll,
    currentSection,
  } = useScrollPosition();

  const [activeLink, setActiveLink] = useState("home");

  const updateActiveLink = (section) => {
    setActiveLink(section);
  };

  useEffect(() => {
    setActiveLink(currentSection);
  }, [currentSection]);

  return (
    <div className="background-container">
      <Header
        fixed={headerShouldBeFixed}
        activeLink={activeLink}
        updateActiveLink={updateActiveLink}
      />
      <section className="main">
        <Introduction updateActiveLink={updateActiveLink} />
        <About />
        <ProjectSection>
          <Project name="leyra" />
          <Project name="filmsupply" />
          <Project name="cvbreeze" />
          <Project name="weathergetter" />
        </ProjectSection>
        <Contact />
        <Footer />
        <button
          className={
            arrowButtonShouldBeVisible
              ? "scroll-to-top__button visible"
              : "scroll-to-top__button"
          }
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Icon name="arrow" />
        </button>
      </section>

      {/* <ScrollToTopButton/> */}
    </div>
  );
};

export default IndexPage;
