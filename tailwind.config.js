/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg:       '#0b0e14',
        surface:  '#111620',
        border:   '#1e2535',
        accent:   '#4f8ef7',
        accent2:  '#a78bfa',
        muted:    '#7c8ba1',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'pulse-dot': 'pulseDot 2s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
