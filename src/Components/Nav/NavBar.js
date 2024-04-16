import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
// import "./Home.css"
import GithubIcon from "../../Components/Photos/Skills/gtihub icon.png"
import LinkedInIcon from "../../Components/Photos/linked in icon.png"


export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  
  // Close the dropdown when clicking outside of it
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (navRef.current && !navRef.current.contains(event.target)) {
  //       setIsActive(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);


  return (
    <nav className={`responsive-nav ${isActive ? 'active' : ''}`}>
       <button className="toggle-button" onClick={toggleMenu}>
       <i class="fa-solid fa-bars"></i>
        {/* Menu */}
      </button>
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