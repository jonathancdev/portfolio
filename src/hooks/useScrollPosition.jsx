import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [headerShouldBeFixed, setHeaderShouldBeFixed] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  // const sections = ["home", "about", "projectsection", "contact"];
  const getActiveSection = () => {
    // sections.forEach((section) => {
    //   const sectionTop = document.getElementById(section).offsetTop;
    //   if (window.scrollY >= sectionTop) {
    //     setCurrentSection(section);
    //   }
    // });
    const y = window.scrollY;
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projectsection = document.getElementById("projectsection");
    const contact = document.getElementById("contact");
    if (y >= contact.offsetTop) {
      setCurrentSection("contact");
    } else if (y >= projectsection.offsetTop) {
      setCurrentSection("projectsection");
    } else if (y >= about.offsetTop) {
      setCurrentSection("about");
    } else if (y >= home.offsetTop) {
      setCurrentSection("home");
    }
  };
  const setHeaderPosition = () => {
    if (window.scrollY >= window.innerHeight) {
      setHeaderShouldBeFixed(true);
    } else if (window.scrollY <= window.innerHeight) {
      setHeaderShouldBeFixed(false);
    }
  };
  const handleScroll = () => {
    getActiveSection();
    setHeaderPosition();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { handleScroll, headerShouldBeFixed, currentSection };
}
