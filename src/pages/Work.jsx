import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectsData } from "../assets/Data";

function Work() {
  return (
    <div
      className="project-container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 className="headline">Some Things I've Built</h2>
      {ProjectsData.map((data) => (
        <ProjectCard
          key={data.id}
          img={data.image}
          title={data.title}
          techStack={data.techStack}
          siteUrl={data.siteUrl}
          codeUrl={data.codeUrl}
          description={data.description}
        />
      ))}
    </div>
  );
}

export default Work;
