const Experience = () => {
    return (
        <div className="experience-container">
            <h2>Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <p className="timeline-date">July 2023 - August 2023</p>
                        <h3>Junior Software Developer</h3>
                        <h4>Automobile Science Popularization Alliance, Beijing, China</h4>
                        <br />
                        <ul>
                            <li>Designed and developed a remote‑control car prototype using Python socket programming for real‑time data transmission</li>
                            <li>Improved responsiveness via optimized data protocols and concurrency techniques</li>
                            <li>Managed a collaborative workspace supporting 200+ college students</li>
                            <li>Provided mentorship and debugging assistance to promote effective teamwork</li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Lifeguard</h3>
                        <h4>PPL Aquatic, Fitness & Spa Group Inc.</h4>
                        <p className="timeline-date">June 2024 — August 2025</p>
                        <ul>
                            <li>Ensured patron safety; responded quickly to emergencies</li>
                            <li>Administered CPR and first aid in high‑pressure situations</li>
                            <li>Collaborated effectively with team members during emergencies and daily operations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience
