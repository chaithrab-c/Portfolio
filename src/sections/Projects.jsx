// src/sections/Projects.jsx
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          What I've built
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent/50 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-lg text-accent flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 3v18M3 9h6M3 15h6"/>
                  </svg>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-xs text-muted bg-white/4 border border-border px-2.5 py-0.5 rounded-full">
                    {project.type}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent border border-accent/30 px-2.5 py-0.5 rounded-full hover:bg-accent/10 transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              {/* Name & Description */}
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">{project.name}</h3>
                <p className="text-sm text-muted leading-relaxed">{project.description}</p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-accent bg-accent/8 border border-accent/18 px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="flex flex-col gap-2 border-t border-border pt-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-xs text-muted leading-relaxed">
                    <span className="text-accent flex-shrink-0 mt-0.5">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
