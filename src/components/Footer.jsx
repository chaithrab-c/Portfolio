// src/components/Footer.jsx
import { personal } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}. Built with React + Vite + Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="text-xs text-accent hover:opacity-75 transition-opacity">
            GitHub ↗
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-xs text-accent hover:opacity-75 transition-opacity">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
