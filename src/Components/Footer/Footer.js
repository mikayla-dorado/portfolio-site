import "./Footer.css"
import EmailIcon from "../../Components/Photos/email icon.png"
import PhoneIcon from "../../Components/Photos/telephone-icon-2048x2048-whonq8z4.png"
import InIcon from "../../Components/Photos/linked in icon.png"

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div>
                <a href="https://mail.google.com" className="link" target="_blank" rel="noreferrer" title="Email me!">
                    <img src={EmailIcon} className="email" title="email" />
                    mikayla.dorado17@gmail.com 
                    </a>
                </div>
                <div>
                    <img src={PhoneIcon} className="phone" title="phone" />
                    (217)-691-5478 
                </div>
                <div>
                <a href="https://www.linkedin.com/in/mikayla-dorado/" className="link" target="_blank" rel="noreferrer" title="Connect with me on Linked-In!">
                    <img src={InIcon} className="In" title="In" />
                    https://www.linkedin.com/in/mikayla-dorado/
                    </a>
                </div>
                
                
            </div>
        </footer>
    )
}