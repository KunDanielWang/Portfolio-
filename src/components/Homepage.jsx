import Projects from "./Projects"
import AboutMe from "./Aboutme"

const Homepage = () => {
    return (
        <div className="dashboard-container">
            <div className="heading-container">
                <div>Home</div>
                <div>Projects</div>
                <div>Experience</div>
                <div>Contact</div>
            </div>
            <AboutMe />
            <Projects />
        </div>
    )
}

export default Homepage
            