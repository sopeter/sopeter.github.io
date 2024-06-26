import React from "react";
import { projects } from "@/app/jsons/data";

const Project = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div>
          {projects.map((project) => (
            <div>
              {project.date}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
