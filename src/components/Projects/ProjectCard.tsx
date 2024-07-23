import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  name: string;
  description: string;
  image: string;
  skills: string[];
  website: string;
};

function ProjectCard(props: Props) {
  return (
    <div className="card border-0">
      <div className="row g-0">
        <div className="col-md-3">
          <div className="container row h-100 w-100 align-items-center justify-content-center">
            <img src={props.image} className="img-fluid w-auto" alt={props.name}></img>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <div className="d-flex">
              <h3 className="card-title text-white">{props.name}</h3>
              <div className="ms-auto">
                <a href={props.website}>
                  <FaExternalLinkAlt size="1.5em" className="text-teal" />
                </a>
              </div>
            </div>
            <p className="card-text py-3">{props.description}</p>
          </div>
          <div className="card-footer bg-transparent border-0 mt-3">
            <div className="d-flex">
              {props.skills.map((skill: String, i) => (
                <div key={i} className="me-1 badge text-bg-primary">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
