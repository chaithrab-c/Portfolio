// src/sections/Contact.jsx
import { useState } from 'react'
import { personal } from '../data/portfolioData'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phoneDisplay)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactItems = [
    {
      label: 'Email',
      value: personal.email,
      href: `https://mail.google.com/mail/?view=cm&to=${personal.email}`,
      isExternal: true,
      onClick: null,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
    {
      label: copied ? 'Copied! ✓' : 'Phone (click to copy)',
      value: personal.phoneDisplay,
      href: null,
      isExternal: false,
      onClick: copyPhone,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.38a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'chaithra-b-9a98a1250',
      href: personal.linkedin,
      isExternal: true,
      onClick: null,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'github.com/chaithrab-c',
      href: personal.github,
      isExternal: true,
      onClick: null,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
          Let's connect
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="text-base text-muted leading-relaxed">
              I'm currently open to frontend and full stack developer roles.
              If you have an opportunity, a project, or just want to say hi —
              my inbox is always open.
            </p>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${personal.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-sm font-semibold text-accent border border-accent/35 px-5 py-3 rounded-md w-fit hover:bg-accent/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              {personal.email}
            </a>
          </div>

          {/* Right — Contact cards */}
          <div className="flex flex-col gap-3">
            {contactItems.map((item) => {
              const baseClass =
                'flex items-center gap-4 bg-surface border border-border rounded-xl p-4 cursor-pointer hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200'

              const inner = (
                <>
                  <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-accent/8 border border-accent/18 rounded-lg text-accent">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted mb-0.5">{item.label}</p>
                    <p className="text-sm text-slate-200 truncate">{item.value}</p>
                  </div>
                </>
              )

              if (item.onClick) {
                return (
                  <div key={item.label} className={baseClass} onClick={item.onClick}>
                    {inner}
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className={baseClass}
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
