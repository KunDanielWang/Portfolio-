import Projects from "./Projects"
import AboutMe from "./Aboutme"
import Experience from "./Experience"
import Skills from "./Skills"
import Contact from "./Contact"
import Resume from "./Resume"

const Homepage = () => {
    return (
        <div className="dashboard-container">
            <nav className="heading-container" aria-label="Primary">
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="components-container">
                <section id="home" className="scroll-section" aria-label="Home">
                    <AboutMe />
                </section>
                <section id="projects" className="scroll-section" aria-label="Projects">
                    <Projects />
                </section>
                <section id="experience" className="scroll-section" aria-label="Experience">
                    <Experience />
                </section>
                <section id="skills" className="scroll-section" aria-label="Skills">
                    <Skills />
                </section>
                <section id="resume" className="scroll-section" aria-label="Resume">
                    <Resume />
                </section>
                <section id="contact" className="scroll-section" aria-label="Contact">
                    <Contact />
                </section>
            </div>
        </div>
    )
}

export default Homepage
            
