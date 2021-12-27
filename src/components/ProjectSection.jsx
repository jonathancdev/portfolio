import React from "react";

export default function ProjectSection({ children }) {
  return (
    <section className="project-section main__section">
      <h1 className="section__heading--primary">Projects</h1>
      {children}
    </section>
  );
}
