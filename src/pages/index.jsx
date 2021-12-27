import * as React from "react";
import { useState, useEffect } from "react";
import "../css/App.css";
import Introduction from "../components/Introduction";
import Header from "../components/Header";
import useScrollPosition from "../hooks/useScrollPosition";
const IndexPage = () => {
  const { headerShouldBeFixed, handleScroll } = useScrollPosition();

  return (
    <div className="background-container">
      <Header fixed={headerShouldBeFixed} />
      <section className="main" onClick={handleScroll}>
        <Introduction />
        {/* <About/> */}
        {/* <ProjectSection> */}
        {/* <Project/> */}
        {/* <Project/> */}
        {/* <Project/> */}
        {/* <Project/> */}
        {/* </ProjectSection> */}
        {/* <Contact/> */}
      </section>
      {/* <Footer/> */}
    </div>
  );
};

export default IndexPage;
