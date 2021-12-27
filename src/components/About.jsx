import React from "react";
import SkillGrid from "./SkillGrid";

export default function About() {
  return (
    <section id="about" className="about main__section">
      <h1 className="section__heading--primary">About</h1>
      <div className="about__img"></div>
      <p className="about__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        voluptatibus sint. Numquam sint eum dignissimos deserunt repudiandae
        odio possimus, soluta quos at quod quam eius dolorem cupiditate
        reprehenderit dicta quaerat!
      </p>
      <SkillGrid />
    </section>
  );
}
