import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="container footer text-center">
    <h2>Peter So</h2>
    <a href="/" className="btn btn-link">Resume</a>
    <a href="https://github.com/sopeter" className="btn btn-link">
      <FaGithub size={30}/>
    </a>
    <a href="https://www.linkedin.com/in/sopeter/" className="btn btn-link">
      <FaLinkedin size={30}/>
    </a>
  </div>
  )
}

export default Footer