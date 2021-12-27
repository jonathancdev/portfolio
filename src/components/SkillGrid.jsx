import React from "react";

export default function SkillGrid() {
  const skills = [
    { skill: "react", image: "" },
    { skill: "javascript", image: "" },
    { skill: "css", image: "" },
    { skill: "html", image: "" },
    { skill: "graphql", image: "" },
    { skill: "gatsbu", image: "" },
    { skill: "nextjs", image: "" },
  ];
  return (
    <section className="skill-grid">
      {skills.map((skill) => {
        return (
          <div key={skill.skill} className="skill-grid__item">
            {skill.skill}
          </div>
        );
      })}
    </section>
  );
}
