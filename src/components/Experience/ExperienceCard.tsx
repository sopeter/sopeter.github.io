import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  employer: string;
  date: string;
  title: string;
  image: string;
  description: string;
  website: string;
  skills: string[];
};

function ExperienceCard(props: Props) {
  return (
    <div className="card border-0">
      <div className="row g-0 card-bg rounded">
        <div className="col-md-3">
          <div className="container row h-100 w-auto align-items-center">
            <img
              src={props.image}
              className="img-fluid"
              alt={props.title}
            ></img>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <div className="d-flex">
              <h4 className="card-title text-white">{props.title}</h4>
              <div className="ms-auto">
                <a href={props.website}>
                  <FaExternalLinkAlt size="1.5em" className="text-teal" />
                </a>
              </div>
            </div>
            <h5 className="card-subtitle py-2 text-white">{props.employer}</h5>
            <h5 className="card-subtitle py-2 text-white">{props.date}</h5>
            <p className="card-text py-3">{props.description}</p>
          </div>
          <div className="card-footer bg-transparent border-0">
            <div className="">
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

export default ExperienceCard;
