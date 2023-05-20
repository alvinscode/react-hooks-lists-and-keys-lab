import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectLists = projects.map((projects) => {
    return <ProjectItem key={projects.id} name={projects.name} technologies={projects.technologies}  />
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectLists}
      </div>
    </div>
  );
}

export default ProjectList;
