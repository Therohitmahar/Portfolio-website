import React from "react";
import ProjectCard from "./ProjectCard";

function Work() {
  return (
    <div className="">
      <ProjectCard
        title={"Budget App"}
        img={
          "https://drive.google.com/u/0/uc?id=1jX4Gy9kMAIxtz0Gn2LlrnT_NwKHc474s&export=download"
        }
        description={
          "This App helps user to specify a budget for multiple things and helps to view and delete those expenses with a easy User interface."
        }
        techStack={["React", "HTML", "CSS", "JavaScript", "Bootstrap"]}
        codeUrl={"https://github.com/Therohitmahar/Budget-app.git"}
        siteUrl={"https://vite-budget-app.netlify.app/"}
      />
    </div>
  );
}

export default Work;
