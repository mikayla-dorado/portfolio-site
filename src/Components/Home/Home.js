import "./Home.css"
import portfolioimg from "../../Components/Photos/IMG_5188.JPG"
import { Element } from "react-scroll";
import ReactIcon from "../../Components/Photos/Skills/skills react logo.png"
import SQLIcon from "../../Components/Photos/Skills/sql-database-icon-logo-design-ui-or-ux-app-vector-17507750.jpg"
import HTMLIcon from "../../Components/Photos/Skills/pngtree-html-file-document-icon-png-image_931728.jpg"
import CSSIcon from "../../Components/Photos/Skills/2496146.webp"
import CIcon from "../../Components/Photos/Skills/74906.png"
import JSIcon from "../../Components/Photos/Skills/logo-javascript-logo-black-and-white.png"
import TailwindIcon from "../../Components/Photos/Skills/tailwind-icon-512x308-ienw2ldx.png"
import TasteBudsVideo from "../../Components/Photos/s.mp4"
import Resume from "../../Components/Photos/Mikayla Dorado Resume 2.png"

export const Home = () => {


    return (<>
        <div className="home">
            <Element name="home">
                <div className="centered-content">
                    <img className="portfolio-image" src={portfolioimg} alt="portrait" />

                    <div className="name">
                        Mikayla Dorado
                    </div>
                    <div className="title">
                        Software Developer
                    </div>
                </div>
            </Element>
            <Element name="about">
                <div className="about">
                    <div>
                        <h2>About Me</h2>
                    </div>
                    <div className="about-me">
                    <p>
                        My journey into the world of Software Development began in the fall of 2022.
                        Growing up in a non-tech-oriented family, I initially perceived the tech/IT industry as something beyond my reach.
                        Before embarking on my coding bootcamp journey, I spent nearly three years working at CVS Pharmacy, where I progressed from an Inventory Specialist to a Lead Pharmacy Technician.

                        Despite my achievements, I knew deep down that this wasn't my long-term path.
                        It wasn't until my husband and our friend introduced me to the world of Development that I decided to explore it further.
                        Trying it out at home, I quickly discovered a passion for unlocking the ability to create almost anything.
                        The prospect of continuously learning new languages, libraries, and frameworks excites me and fuels my anticipation for a future career in this dynamic field.
                    </p>
                    <p>
                        When I'm not practicing code, I enjoy spending time at home with my husband.
                        One of our favorite things to do together is order a pizza and play Super Mario Bros on the Wii or our Switch.
                        Other hobbies of mine include cooking and baking for my loved ones, reading books, and attending church with our family!
                    </p>
                    </div>
                </div>
            </Element>
            <Element name="projects">
                <div className="projects">
                    <h2>My Projects</h2>
                    <h3>TasteBuds</h3>
                    <p>TasteBuds is a recipe sharing application where users can create an account, view recipes posted by other users, favorite recipes, and post their own recipes.
                        This application was made as my front-end capstone at NSS and was built using HTML, CSS, JavaScript, React, and Tailwind CSS.
                    </p>
                    <div>
                        <video src={TasteBudsVideo} className="tastebuds-video" alt="tastebuds-video" title="video" controls muted/>
                    </div>
                </div>
            </Element>
            <Element name="skills">
                <div>
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
            <Element name="resume">
                <h2 className="resume">Resume</h2>
                <div>
                <img src={Resume} className="resume-img" alt="resume-img" title="Resume" />
                </div>
            </Element>
        </div>
    </>)
}
//need to adjust the image so it isnt stretched weird
//need to add video to projects section (its there but isnt playing)
//want to add image carousel to about me section
//work on styling (font, bg color, etc)