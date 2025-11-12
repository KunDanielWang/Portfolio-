// ...existing code...
import React, { useRef } from 'react'
import '../index.css'
import defaultImg from '../assets/dwizzle.png'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A short description of Project One — what it does and why it matters.',
    tech: ['React', 'Vite', 'CSS'],
    image: defaultImg,
    live: '#',
    repo: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A short description of Project Two — a different scope or stack.',
    tech: ['Node', 'Express', 'MongoDB'],
    image: defaultImg,
    live: '#',
    repo: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A short description of Project Three — focus, outcome or link.',
    tech: ['TypeScript', 'React'],
    image: defaultImg,
    live: '#',
    repo: '#'
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Another project to demonstrate scrolling behavior.',
    tech: ['HTML', 'CSS'],
    image: defaultImg,
    live: '#',
    repo: '#'
  },
  {
    id: 5,
    title: 'Project Five',
    description: 'More projects can be added; slide to see them.',
    tech: ['Python'],
    image: defaultImg,
    live: '#',
    repo: '#'
  }
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
        <button
          className="carousel-btn prev"
          onClick={() => scroll('prev')}
          aria-label="Previous projects"
        >
          ‹
        </button>

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

        <button
          className="carousel-btn next"
          onClick={() => scroll('next')}
          aria-label="Next projects"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Projects
// ...existing code...