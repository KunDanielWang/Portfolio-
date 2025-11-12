import React, { useRef } from 'react'
import '../index.css'
import defaultImg from '../assets/dwizzle.png'
import VIM_World from '../assets/VIM_World.png'
import Insulin from '../assets/Insulin_Pump.png'

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio built with React and TypeScript, showcasing my projects, skills, and experience in a clean, component-driven design.',
    tech: ['React', 'Vite', 'CSS'],
    image: defaultImg,
    live: '#',
    repo: '#'
  },
  {
    id: 2,
    title: 'Insulin Project',
    description: 'A Qt-based insulin pump simulator with a desktop UI to manage profiles, calculate bolus doses, simulate blood glucose with real-time plotting, and log history to a local SQLite database.',
    tech: ['C++', 'Qt', 'SQLite', 'QCustomPlot'],
    image: Insulin,
    live: '#',
    repo: '#'
  },
  {
    id: 3,
    title: 'VIM World',
    description: 'A browser-based game that teaches core Vim navigation through text-maze levels.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: VIM_World,
    live: 'https://drafttin.github.io/VimWorld/',
    repo: '#'
  },
]

const Projects = () => {
  const trackRef = useRef(null)

  const scroll = (dir = 'next') => {
    const el = trackRef.current
    if (!el) return
    const amount = Math.round(el.clientWidth * 0.8)
    el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-carousel">

        <div className="projects-track" ref={trackRef} tabIndex={0} role="list">
          {projects.map(p => (
            <article key={p.id} className="project-card carousel-item" role="listitem">
              <div className="project-image">
                <img
                  src={p.image}
                  alt={p.title}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
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
                  <a href={p.live} target="_blank" rel="noopener noreferrer">Live</a>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects