import Projects from "./Projects"
import AboutMe from "./Aboutme"
import Experience from "./Experience"
import Skills from "./Skills"

const Homepage = () => {
    return (
        <div className="dashboard-container">
            <div className="heading-container">
                <div>Home</div>
                <div>Projects</div>
                <div>Experience</div>
                <div>Contact</div>
            </div>
            <div className="components-container">
                <AboutMe />
                <Projects />
                <Experience />
                <Skills />
            </div>
        </div>
    )
}

export default Homepage
            