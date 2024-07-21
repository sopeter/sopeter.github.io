import React from "react";
import { skills } from "@/app/jsons/data";

const Skills = () => {
  return (
    <div className="container mt-5 pt-3 card-bg rounded">
      <div className="row">
        <div className="col-md-4 align-content-center">
          <h2 className="text-white">SKILLS</h2>
          <p>LANGUAGES / FRAMEWORKS / TOOLS</p>
        </div>

        <div className="col-md-8">
          <ul className="list-unstyled">
            <li className="my-2">
              <strong className="text-white">Programming Languages:</strong>{" "}
              {skills.languages}
            </li>
            <li className="my-2">
              <strong className="text-white">Frameworks:</strong>{" "}
              {skills.frameworks}
            </li>
            <li className="my-2">
              <strong className="text-white">Databases:</strong>{" "}
              {skills.databases}
            </li>
            <li className="my-2">
              <strong className="text-white">Tools: </strong> {skills.tools}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
