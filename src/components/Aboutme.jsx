const AboutMe = () => {
    return (
        <div className="about-me-section">
            <div className="text-area">
                <h2>About Me</h2>
                <p>Hi, I'm Kun Wang — a fourth‑year Computer Science student with a strong foundation in software engineering and web development.</p>
                <h3>Education</h3>
                <p>
                    <strong>Bachelor of Computer Science</strong><br />
                    Carleton University, Ottawa, ON<br />
                    Current CGPA: 8.0
                </p>
                <p><em>Relevant Coursework:</em> Object‑Oriented Programming, Web Application Development, Data Structures & Algorithms, Operating Systems</p>
                <h3>Availability</h3>
                <ul>
                    <li>Open to opportunities anywhere in Canada</li>
                    <li>Available Jan 1, 2026 – Dec 31, 2026</li>
                </ul>
            </div>
            <div className="image-area">
                <img src="/src/assets/dwizzle.png" alt="Profile" />
            </div>
        </div>
    )
}

export default AboutMe
