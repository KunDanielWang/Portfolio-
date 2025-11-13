const Experience = () => {
    return (
        <div className="experience-container">
            <h1>Experience</h1>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="card-heading">
                            <h3>Junior Software Developer</h3>
                            <p className="timeline-date">July 2023 - August 2023</p>
                        </div>
                        <h4>Automobile Science Popularization Alliance, Beijing, China</h4>
                        <br />
                        <ul>
                            <li>Designed and developed a remote-control car prototype using Python socket programming for real-time data transmission. </li>
                            <br />
                            <li>Enhanced system responsiveness through optimized data protocols and concurrency techniques.</li>
                            <br />
                            <li>Managed a collaborative workspace supporting over 200 college students. </li>
                            <br />
                            <li>Provided mentorship and debugging assistance, promoting effective teamwork. </li>
                        </ul>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="card-heading">
                            <h3>Lifeguard</h3>
                            <p className="timeline-date">July 2023 - August 2023</p>
                        </div>
                        <h4>PPL Aquatic, Fitness & Spa Group Inc.</h4>
                        <br />
                        <ul>
                            <li>Kept patrons safe by monitoring the area closely and responding quickly to emergencies. </li>
                            <br />
                            <li>Administered CPR and first aid in high-pressure situations. </li>
                            <br />
                            <li>Collaborated effectively with team members during emergencies and daily operations.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience
