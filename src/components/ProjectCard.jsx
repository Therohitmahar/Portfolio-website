import React from "react";
import { HiCode } from "react-icons/hi";
import { LuLink2 } from "react-icons/lu";
function ProjectCard({ img, title, description, codeUrl, siteUrl, techStack }) {
  return (
    <div className="projectcard">
      <img className="left" src={img} alt="img" />
      <div className="right">
        <section className="section">
          <h3 className="Project-title">{title}</h3>
          <a href={codeUrl} target="_blank">
            <HiCode />
          </a>
          <a target="_blank" href={siteUrl}>
            <LuLink2 />
          </a>
        </section>
        <p>{description}</p>
        <ul>
          {techStack.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
