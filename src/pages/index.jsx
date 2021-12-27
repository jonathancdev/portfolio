import * as React from "react";
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
  const { headerShouldBeFixed, handleScroll } = useScrollPosition();

  return (
    <div className="background-container">
      <Header fixed={headerShouldBeFixed} />
      <section className="main" onClick={handleScroll}>
        <Introduction />
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
