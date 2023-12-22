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

export const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li>
        <Link className="nav-link" to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="about" smooth={true} duration={500}>
          About Me
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="projects" smooth={true} duration={500}>
          My Projects
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
    </ul>
  );
};