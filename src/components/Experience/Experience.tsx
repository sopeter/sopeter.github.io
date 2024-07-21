import React from "react";
import { experience } from "@/app/jsons/data";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container mt-3 py-3">
        <h2 className="text-white">EXPERIENCE</h2>
        <div className="mt-4">
          {experience.map((data, i) => (
            <div key={i} className="mx-auto py-3">
              <ExperienceCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
