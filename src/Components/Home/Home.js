import "./Home.css"
import portfolioimg from "../../Components/Photos/me.JPG"
import { Element } from "react-scroll";
import ReactIcon from "../../Components/Photos/Skills/skills react logo.png"
import SQLIcon from "../../Components/Photos/Skills/sql-database-icon-logo-design-ui-or-ux-app-vector-17507750.jpg"
import HTMLIcon from "../../Components/Photos/Skills/pngtree-html-file-document-icon-png-image_931728.jpg"
import CSSIcon from "../../Components/Photos/Skills/2496146.webp"
import CIcon from "../../Components/Photos/Skills/74906.png"
import JSIcon from "../../Components/Photos/Skills/logo-javascript-logo-black-and-white.png"
import TailwindIcon from "../../Components/Photos/Skills/tailwind-icon-512x308-ienw2ldx.png"
import TasteBudsVideo from "../../Components/Photos/s.mp4"
import Resume from "../../Components/Photos/Mikayla Dorado Official Resume.png"
import GithubIcon from "../../Components/Photos/Skills/gtihub icon.png"
import LinkedInIcon from "../../Components/Photos/linked in icon.png"
import PhotoCarousel from "../../Components/PhotoCarousel/PhotoCarousel";
import image1 from "../../Components/Photos/concert img.jpg";
import image2 from "../../Components/Photos/mario img.jpg";
import image3 from "../../Components/Photos/me 2 img.jpg";
import image4 from "../../Components/Photos/me 3 img.jpg";
import image5 from "../../Components/Photos/me 4img.jpg";
import image6 from "../../Components/Photos/me img.jpg";
import hawaii from "../../Components/Photos/hawaii.jpg"


export const Home = () => {
    const images = [
        image1, image2, image3, image4, image5, image6
    ];

    return (<>
        <div className="home">
            <Element name="home">
                <div className="centered-content">
                    <img className="portfolio-image" src={portfolioimg} alt="portrait" />
                    <div className="background-box">
                        <h1>Hello</h1>
                    </div>
                    <div className="background-box2">
                        Hello
                    </div>
                </div>
            </Element>
            <Element name="projects" className="project-element">
                <div className="projects">
                    <h2>Projects</h2>
                    <h3>TasteBuds</h3>
                    <div>
                        <a href="https://github.com/mikayla-dorado/tastebuds" target="_blank" rel="noreferrer" title="View my Github!">
                            <img src={GithubIcon} className="github" alt="Github Icon" />
                        </a>
                    </div>
                    <p>TasteBuds is a recipe sharing application where users can create an account, view recipes posted by other users, favorite recipes, and post their own.
                        This application was made as my front-end capstone at NSS and was built using HTML, CSS, JavaScript, React, and Tailwind CSS.
                    </p>
                    <div>
                        <video src={TasteBudsVideo} className="tastebuds-video" alt="tastebuds-video" title="video" controls muted />
                    </div>
                </div>
            </Element>
            <Element name="skills">
                <div className="skill-box">
                    <h2 className="skill">Skills</h2>
                    <div className="skills-container">
                        <div>
                            <img src={ReactIcon} className="icon" alt="react icon" title="React" />
                        </div>
                        <div className="">
                            <img src={SQLIcon} alt="react icon" className="icon" title="SQL" />
                        </div>
                        <div className="">
                            <img src={HTMLIcon} alt="react icon" className="icon" title="HTML" />
                        </div>
                        <div className="icon">
                            <img src={CSSIcon} alt="react icon" className="icon" title="CSS" />
                        </div>
                        <div className="icon">
                            <img src={CIcon} alt="react icon" className="icon" title="C#" />
                        </div>
                        <div className="icon">
                            <img src={JSIcon} alt="react icon" className="icon" title="JavaScript" />
                        </div>
                        <div className="q">
                            <img src={TailwindIcon} alt="react icon" className="icon" title="Tailwind CSS" />
                        </div>
                    </div>
                </div>
            </Element>
            <Element name="resume" className="resume-element">
                {/* <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br> */}
                <h2 className="resume">Resume</h2>
                <div>
                    <img src={Resume} className="resume-img" alt="resume-img" title="Resume" />
                </div>
                {/* this download is not working */}
                <a href={Resume} download="Mikayla Dorado - Resume" className="btn"> <button> Download My Resume </button> </a>
            </Element>
        </div>
    </>)
}