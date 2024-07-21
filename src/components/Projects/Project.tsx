import React from "react";
import { projects } from "@/app/jsons/data";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section id="projects">
      <div className="container pt-3">
        <h2 className="text-white">PROJECTS</h2>
        <div className="flex flex-wrap">
          {projects.map((data, i) => (
            <div key={i} className="mx-auto py-3">
              <ProjectCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
