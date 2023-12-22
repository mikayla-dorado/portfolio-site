import "./Footer.css"
import EmailIcon from "../../Components/Photos/email icon.png"
import PhoneIcon from "../../Components/Photos/telephone-icon-2048x2048-whonq8z4.png"
import InIcon from "../../Components/Photos/linked in icon.png"

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div>
                    <img src={EmailIcon} className="email" title="email" />
                    mikayla.dorado17@gmail.com |
                </div>
                <div>
                    <img src={PhoneIcon} className="phone" title="phone" />
                    (217)-691-5478 |
                </div>
                <div>
                    <img src={InIcon} className="In" title="In" />
                    https://www.linkedin.com/in/mikayla-dorado/
                </div>
                
                
            </div>
        </footer>
    )
}