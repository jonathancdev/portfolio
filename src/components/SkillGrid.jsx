import React from "react";
import Icon from "./Icon";

export default function SkillGrid() {
  const skills = [
    { skill: "reacticon", name: "react", color: "#61DAFB" },
    { skill: "javascript", name: "javascript", color: "#F7DF1E" },
    { skill: "css", name: "css", color: "#1572B6" },
    { skill: "html", name: "html", color: "#E34F26" },
    { skill: "graphql", name: "graphql", color: "#E10098" },
    { skill: "gatsby", name: "gatsby", color: "#663399" },
    { skill: "nextjs", name: "next.js", color: "#000000" },
    { skill: "git", name: "git", color: "#F05032" },
    { skill: "figma", name: "figma", color: "#F24E1E" },
  ];
  return (
    <section className="skill-grid">
      {skills.map((skill) => {
        return (
          <div key={skill.skill} className="skill-grid__item">
            <Icon name={skill.skill} color={skill.color} size="5rem" />
            <span className="skill-grid__name">{skill.name}</span>
          </div>
        );
      })}
    </section>
  );
}
