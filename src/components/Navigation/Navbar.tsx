import { FaBars } from "react-icons/fa6";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar container navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="https://sopeter.github.io">
          <strong>PETER SO</strong>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
        >
          <FaBars className="text-white" />
        </button>
        <div className="navbar-collapse collapse" id="navbarText">
          <div className="navbar-nav">
            <a className="nav-link text-white" href="#experience">
              EXPERIENCE
            </a>
            <a className="nav-link text-white" href="#projects">
              PROJECTS
            </a>
            <a className="nav-link text-white" href="Resume_7.11.24.pdf">
              RESUME
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
