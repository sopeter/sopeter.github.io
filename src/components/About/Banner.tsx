import React from "react";

const Banner = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h2 className="text-white">HI, I&apos;M PETER!</h2>
          <p className="mt-4">
            I graduated from{" "}
            <span className="text-white">Northeastern University</span> with a
            degree in <span className="text-white">Computer Science</span>,
            concentrating in{" "}
            <span className="text-white">Artificial Intelligence</span>, and a
            minor in <span className="text-white">Business Analytics</span>.
            With over a year of professional experience in backend software
            development, I am skilled in multiple backend languages and
            frameworks. I am passionate about software development and machine
            learning and am eager to explore opportunities in these fields.
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <img className="img-fluid rounded" alt="hero" src="profile-pic.png" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
