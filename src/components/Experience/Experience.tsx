/* eslint-disable react/jsx-key */
import React from "react";
import { experience } from "@/app/jsons/data";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="flex flex-wrap">
          {experience.map((data) => (
            // <div style={{ height: "500px" }} className="p-4 md:w-1/2 w-full">
            //   <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded overflow-auto">
            //     <div className="inline-flex items-center">
            //       <img
            //         alt="experience"
            //         src={data.image}
            //         className="w-12 rounded-full flex-shrink-0 object-cover object-center"
            //       />
            //       <span className="flex-grow flex flex-col pl-4">
            //         <span className="title-font font-medium text-white cursor-default">
            //           {data.title}
            //         </span>
            //         <span className="text-red-500 text-sm uppercase cursor-default">
            //           {data.employer}
            //         </span>
            //       </span>
            //     </div>
            //     <p className="leading-relaxed mb-6 pt-4 cursor-default">
            //       {data.description}
            //     </p>
            //     <p className="leading-relaxed mb-2 pt-2 text-white cursor-default">
            //       {data.date}
            //     </p>
            //   </div>
            // </div>
            <div className="mx-auto">
              <ExperienceCard {...data}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
