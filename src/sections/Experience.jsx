// src/sections/Experience.jsx
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          Where I've worked
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
          Experience
        </h2>

        <div className="flex flex-col gap-6">
          {experience.map((job, idx) => (
            <div key={idx} className="flex gap-5">

              {/* Timeline track */}
              <div className="flex flex-col items-center pt-1.5 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-bg ring-2 ring-accent flex-shrink-0" />
                <div className="w-px flex-1 bg-border mt-2" />
              </div>

              {/* Card */}
              <div className="flex-1 bg-surface border border-border rounded-xl p-6 mb-6 hover:border-accent/40 transition-colors duration-200">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{job.role}</h3>
                    <p className="text-sm font-medium text-accent mt-0.5">{job.company}</p>
                  </div>
                  <span className="text-xs text-muted bg-white/4 border border-border px-3 py-1 rounded-full whitespace-nowrap">
                    {job.duration}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-accent text-xs mt-1 flex-shrink-0">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
