import React from "react";
import { HiCode } from "react-icons/hi";
import { LuLink2 } from "react-icons/lu";
import { useNavigate } from "react-router";
function ProjectCard({ img, title, description, codeUrl, siteUrl, techStack }) {
  return (
    <div className="projectcard" onClick={siteUrl}>
      <div className="left">
        <img src={img} alt="img" />
      </div>
      <div className="right">
        <section className="section">
          <h3 className="Project-title">{title}</h3>
          <a href={codeUrl} target="_blank">
            <HiCode onClick={codeUrl} />
          </a>
          <a href={siteUrl}>
            <LuLink2 />
          </a>
        </section>
        <p>{description}</p>
        <ul>
          {techStack.map((stack) => (
            <li>{stack}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
