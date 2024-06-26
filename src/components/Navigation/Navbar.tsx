import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="https://sopeter.github.io">
        Peter So
      </a>

      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#about">
          About Me
        </a>
        <a className="nav-item nav-link" href="#experience">
          Experience
        </a>
        <a className="nav-item nav-link" href="#projects">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
