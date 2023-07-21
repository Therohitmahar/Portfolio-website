import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsData } from "../assets/Data";

function Work() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
