import PhoneSvg from "./svgComponents/PhoneSvg"
import EmailSvg from "./svgComponents/EmailSvg"
import LinkedInSvg from "./svgComponents/LinkedInSvg.jsx"
import GithubSvg from "./svgComponents/GithubSVG.jsx"
const Contact = () => {
    return (
        <div className="contact-section">
                <h1>Get In Touch</h1>
                <div className="phone-content">
                    <PhoneSvg />
                    <p>+1 (647) 894 8870</p>
                </div>
                <div className="email-content">
                    <EmailSvg />
                    <p>KunWang5@cmail.carleton.ca</p>
                </div>
                <div className="social-links">
                <a
                  href="https://linkedin.com/in/kun-wang-325573308"
                  target="_blank"
                >
                  <LinkedInSvg />
                </a>

                <a
                  href="https://github.com/KunDanielWang"
                  target="_blank"
                >
                  <GithubSvg />
                </a>
                </div>
                
        </div>
    )
}

export default Contact
