// import { Link } from "react-router-dom"
// import "./NavBar.css"


// export const NavBar = () => {


//     return (
//         <ul className="nav-bar">
//             <li>
//                 <Link className="nav-link" to="/">Home</Link>
//             </li>
//             <li>
//                 <Link className="nav-link" to="/aboutme">About Me</Link>
//             </li>
//             <li>
//                 <Link className="nav-link" to="/projects">My Projects</Link>
//             </li>
//             <li>
//                 <Link className="nav-link" to="/skills">Skills</Link>
//             </li>
//             {/* <li>
//                 <Link className="nav-link" to="/contact">Contact Me</Link>
//             </li> */}
//             <li>
//                 <Link className="nav-link" to="/resume">Resume</Link>
//             </li>
//         </ul>
//     )
// }

import React from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import GithubIcon from "../../Components/Photos/Skills/gtihub icon.png"
import LinkedInIcon from "../../Components/Photos/linked in icon.png"

export const NavBar = () => {
  return (
    <nav>
    <ul className="nav-bar">
      <li>
        <Link className="nav-link" to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="resume" smooth={true} duration={500}>
          Resume
        </Link>
      </li>
      <div className="icon-container">
        <a href="https://github.com/mikayla-dorado" target="_blank" rel="noreferrer" title="View my Github!">
          <img src={GithubIcon} className="github" alt="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/mikayla-dorado/" target="_blank" rel="noreferrer" title="Connect with me on LinkedIn!">
          <img src={LinkedInIcon} className="linkedin" alt="LinkedIn Icon" />
        </a>
      </div>
    </ul>
    </nav>
  );
};