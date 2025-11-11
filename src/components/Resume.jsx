const Resume = () => {
  return (
    <div className="resume-section">
      <header className="resume-header">
        <h2>Kun Wang</h2>
        <p>
          <a href="tel:+16478948870">(647) 894 8870</a>
          <span> &middot; </span>
          <a href="mailto:KunWang5@cmail.carleton.ca">KunWang5@cmail.carleton.ca</a>
          <span> &middot; </span>
          <a href="https://linkedin.com/in/kun-wang-325573308" target="_blank" rel="noreferrer">linkedin.com/in/kun-wang-325573308</a>
          <span> &middot; </span>
          <a href="https://github.com/KunDanielWang" target="_blank" rel="noreferrer">github.com/KunDanielWang</a>
        </p>
      </header>

      <section>
        <h3>Education</h3>
        <p>
          <strong>Bachelor of Computer Science</strong><br />
          Carleton University, Ottawa, ON<br />
          Current CGPA: 8.0
        </p>
        <p><em>Relevant Coursework (4th-year undergraduate):</em></p>
        <ul>
          <li>Object-Oriented Programming</li>
          <li>Web Application Development</li>
          <li>Data Structures &amp; Algorithms</li>
          <li>Operating Systems</li>
        </ul>
      </section>

      <section>
        <h3>Skills Profile</h3>
        <ul>
          <li><strong>Programming Languages:</strong> Java, JavaScript, Python, C/C++, HTML5, CSS3; experience with Node.js and RESTful APIs</li>
          <li><strong>Frameworks &amp; Tools:</strong> Docker, AWS, React, Linux; Git for version control and collaboration</li>
          <li><strong>Software Development:</strong> OOP, system design, web apps, data structures, algorithms, databases</li>
          <li><strong>Adaptability:</strong> Quick learner; picks up new tech and environments quickly</li>
          <li><strong>Collaboration &amp; Communication:</strong> Team player with strong interpersonal and communication skills</li>
        </ul>
      </section>

      <section>
        <h3>Availability</h3>
        <ul>
          <li>Open to opportunities anywhere in Canada</li>
          <li>Available: Jan 1, 2026 &ndash; Dec 31, 2026</li>
        </ul>
      </section>

      <section>
        <h3>Work Experience</h3>
        <article className="resume-item">
          <h4>Junior Software Developer</h4>
          <p className="meta">Automobile Science Popularization Alliance &middot; Beijing, China &middot; Jul 2023 &ndash; Aug 2023</p>
          <ul>
            <li>Designed and developed a remote-control car prototype using Python socket programming for real-time data transmission</li>
            <li>Enhanced system responsiveness through optimized data protocols and concurrency techniques</li>
            <li>Managed a collaborative workspace supporting over 200 college students</li>
            <li>Provided mentorship and debugging assistance, promoting effective teamwork</li>
          </ul>
        </article>

        <article className="resume-item">
          <h4>Lifeguard</h4>
          <p className="meta">PPL Aquatic, Fitness &amp; Spa Group Inc.</p>
          <ul>
            <li>Kept patrons safe by monitoring the area closely and responding quickly to emergencies</li>
            <li>Administered CPR and first aid in high-pressure situations</li>
            <li>Collaborated effectively with team members during emergencies and daily operations</li>
          </ul>
        </article>
      </section>

      <section>
        <h3>Applied Projects</h3>
        <article className="resume-item">
          <h4>Personal Portfolio Website</h4>
          <p className="meta">Jun 2024 &ndash; Aug 2025</p>
          <ul>
            <li>Built a responsive, interactive portfolio using React, TypeScript, HTML, and CSS</li>
            <li>Used component-based architecture for maintainability and scalability</li>
            <li>Integrated Git for streamlined, collaborative development</li>
          </ul>
        </article>

        <article className="resume-item">
          <h4>Volleyball Addict (Full-Stack Web Application)</h4>
          <ul>
            <li>Developed a platform for volleyball players to find, host, and join games</li>
            <li>Frontend in React.js, backend in Python, MongoDB database</li>
            <li>Implemented user auth, real-time game search, and player posting</li>
            <li>Deployed on AWS</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default Resume

