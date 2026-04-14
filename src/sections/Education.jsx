// src/sections/Education.jsx
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          Academic background
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
          Education
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border rounded-xl p-6 flex flex-col gap-3 hover:border-accent2/40 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 flex items-center justify-center bg-accent2/10 border border-accent2/20 rounded-lg text-accent2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3.33 2 8.67 2 12 0v-5"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-accent2 bg-accent2/8 border border-accent2/20 px-3 py-1 rounded-full">
                  CGPA {edu.cgpa}
                </span>
              </div>
              <h3 className="font-display text-base font-bold text-white leading-snug">{edu.degree}</h3>
              <p className="text-sm text-slate-300">{edu.institution}</p>
              <p className="text-xs text-muted">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
