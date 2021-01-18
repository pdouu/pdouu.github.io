import React from "react";
import "./Projects.style.scss";
import projectsList from "../../utils/projects-list";
import ProjectItem from "./project-item/ProjectItem";

const Projects = () => {
  const randomKey = (indexSent) => {
    return Math.round(Math.random() * 10000) + indexSent;
  };

  return (
    <div className="projects-page-container">
      <h1>Projects</h1>
      <p>Some projects that i've worked on.</p>
      <div className="projects-container">
        {projectsList.map((project, index) => (
          <ProjectItem
            key={randomKey(index)}
            title={project.title}
            image={project.image}
            text={project.text}
            links={project.links}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
