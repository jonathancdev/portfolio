import * as React from "react";
import { useState, useEffect } from "react";
import "../css/App.css";
import Introduction from "../components/Introduction";
import Header from "../components/Header";

const IndexPage = () => {
  const viewportHeight = window.innerHeight;
  const [headerShouldBeFixed, setHeaderShouldBeFixed] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= viewportHeight) {
      setHeaderShouldBeFixed(true);
    } else if (position <= viewportHeight) {
      setHeaderShouldBeFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(viewportHeight);

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
