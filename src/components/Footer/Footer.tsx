import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container footer text-center mt-5">
      <div className="py-4">
        <h2 className="text-white">GET IN TOUCH!</h2>
        <a href="" className="pe-none btn text-white">
          peterjso23@gmail.com
        </a>
        <a href="https://github.com/sopeter" className="btn btn-link">
          <FaGithub size={30} className="text-white" />
        </a>
        <a href="https://www.linkedin.com/in/sopeter/" className="btn btn-link">
          <FaLinkedin size={30} className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
