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
import arrowIcon from "../images/arrowdown.png";
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
          <Project
            name="cvbreeze"
            title="CV / Resume Builder"
            description="CVBREEZE is a CV / Resume builder web application. Users can sign-in and save changes to their personalized CV. Users can see changes in real time and generate a printer compatible A4 document.  Built in React and styled with Sass."
          />
          <Project
            name="weathergetter"
            title="Current weather app"
            description="WEATHERGETTER is a web application that allows users to input a city and country to retrieve the current weather conditions in that area. It features video backgrounds for all weather types. Built in React with OpenWeatherMap API."
          />
          <Project
            name="leyra"
            title="customized sites"
            description="Highly customized websites for artists / creatives / independent brands. These sites utilize CMS systems to allow clients to control the content of their site. They feature custom image galleries, blogs, contact forms, and more. Built with Gatsby, Sass, GraphQL, and CMS."
          />
          <Project
            name="filmsupply"
            title="modern e-commerce solutions"
            description="High-speed and highly-optimized e-commerce sites built for small or scaling businesses. Clients can manage their products and inventory with simple admin tools. Built with next.js with the ability to connect to various payment solutions and CMS systems."
          />
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
          <img src={arrowIcon} alt="arrow" className="arrow-up-icon" />
        </button>
      </section>

      {/* <ScrollToTopButton/> */}
    </div>
  );
};

export default IndexPage;
