import React from "react";
import Icon from "./Icon";

export default function SkillGrid() {
  const skills = [
    { skill: "html", name: "html", color: "#E34F26" },
    { skill: "css", name: "css", color: "#1572B6" },
    { skill: "javascript", name: "javascript", color: "#F7DF1E" },
    { skill: "git", name: "git", color: "#F05032" },
    { skill: "reacticon", name: "react", color: "#61DAFB" },
    { skill: "sass", name: "sass", color: "#CC6699" },
    { skill: "figma", name: "figma", color: "#F24E1E" },
    { skill: "gatsby", name: "gatsby", color: "#663399" },
    { skill: "graphql", name: "graphql", color: "#E10098" },
    { skill: "nextjs", name: "next.js", color: "#cedaea" },
  ];
  return (
    <section className="skill-grid">
      {skills.map((skill) => {
        return (
          <div key={skill.skill} className="skill-grid__item">
            <div className="skill-grid__content">
              <Icon name={skill.skill} color={skill.color} size="40px" />
              <span className="skill-grid__name">{skill.name}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
