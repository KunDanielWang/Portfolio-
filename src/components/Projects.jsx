import React from 'react'
import '../index.css'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A short description of Project One — what it does and why it matters.',
    tech: ['React', 'Vite', 'CSS'],
    image: '/src/assets/dwizzle.png',
    live: '#',
    repo: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A short description of Project Two — a different scope or stack.',
    tech: ['Node', 'Express', 'MongoDB'],
    image: '/src/assets/dwizzle.png',
    live: '#',
    repo: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A short description of Project Three — focus, outcome or link.',
    tech: ['TypeScript', 'React'],
    image: '/src/assets/dwizzle.png',
    live: '#',
    repo: '#'
  }
]

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.id} className="project-card">
            <div className="project-image">
              <img src={p.image} alt={p.title} onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tech-list">
                {p.tech.map(t => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.live} target="_blank" rel="noreferrer">Live</a>
                <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects