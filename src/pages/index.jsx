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

const IndexPage = () => {
  const { headerShouldBeFixed, handleScroll, currentSection } =
    useScrollPosition();
  const [activeLink, setActiveLink] = useState("home");

  const updateActiveLink = (section) => {
    setActiveLink(section);
  };

  useEffect(() => {
    setActiveLink(currentSection);
  }, [currentSection]);
  console.log(activeLink);
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
          <Project />
          <Project />
          <Project />
          <Project />
        </ProjectSection>
        <Contact />
        <Footer />
      </section>
      {/* <ScrollToTopButton/> */}
    </div>
  );
};

export default IndexPage;
