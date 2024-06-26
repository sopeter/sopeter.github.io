import React from "react";

type Props = {
  title: string,
  employer: string,
  description: string,
  skills: string[]
}

function ExperienceCard(props: Props) {
  return (
    <div className="card" style={{ width: "40rem" }}>
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <h4 className="card-subtitle">{props.employer}</h4>
        <p className="card-text">{props.description}</p>
        <div className="flex">
          {props.skills.map((skill : String, i) => (
            <div key={i} className="m-1">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
