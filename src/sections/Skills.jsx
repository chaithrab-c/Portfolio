// src/sections/Skills.jsx
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          What I work with
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent/50 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{group.icon}</span>
                <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-slate-300 bg-white/5 border border-border px-2.5 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
