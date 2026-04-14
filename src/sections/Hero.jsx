// src/sections/Hero.jsx
import { personal } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden pt-24">

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(79,142,247,0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Radial fade overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #0b0e14 100%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* Available badge */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-accent bg-accent/10 border border-accent/25 px-3 py-1.5 rounded-full mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight mb-4 animate-fade-up animation-delay-100">
          {personal.name.split(' ')[0]}
          <span className="text-accent"> {personal.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        {/* Title */}
        <p className="font-display text-lg sm:text-xl font-medium text-muted tracking-wide mb-5 animate-fade-up animation-delay-200">
          {personal.title}
        </p>

        {/* Subtitle tags */}
        <div className="flex flex-wrap gap-2 mb-6 animate-fade-up animation-delay-200">
          {personal.subtitle.split(' · ').map((tag) => (
            <span key={tag} className="text-xs font-medium text-accent/80 bg-accent/8 border border-accent/15 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Summary */}
        <p className="text-base text-muted leading-relaxed max-w-2xl mb-10 animate-fade-up animation-delay-300">
          {personal.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mb-14 animate-fade-up animation-delay-400">
          <a
            href="#contact"
            className="inline-block bg-accent text-white text-sm font-medium px-6 py-3 rounded-md hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-block text-white text-sm font-medium px-6 py-3 rounded-md border border-border hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-muted text-sm font-medium px-6 py-3 rounded-md border border-border hover:border-accent/50 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            GitHub ↗
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 animate-fade-up animation-delay-500">
          {[
            { value: '6+',    label: 'Months Experience' },
            { value: '8.25',  label: 'MCA CGPA' },
            { value: '2',     label: 'Full Stack Projects' },
            { value: 'React', label: 'Primary Stack' },
          ].map((stat, i, arr) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-muted uppercase tracking-widest">{stat.label}</span>
              </div>
              {i < arr.length - 1 && <div className="hidden sm:block w-px h-9 bg-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
