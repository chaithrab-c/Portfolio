# Chaithra B — Portfolio

Professional portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Folder Structure

```
chaithra-tailwind/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navbar with mobile menu
│   │   └── Footer.jsx          # Footer with links
│   ├── sections/
│   │   ├── Hero.jsx            # Landing section with stats
│   │   ├── Skills.jsx          # Technical skills grid
│   │   ├── Experience.jsx      # Timeline experience
│   │   ├── Projects.jsx        # Project cards
│   │   ├── Education.jsx       # Education cards
│   │   └── Contact.jsx         # Contact with Gmail + copy phone
│   ├── data/
│   │   └── portfolioData.js    # ← Edit ALL your content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind directives
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## ✏️ How to Update Content

All your personal info, skills, experience, projects and education
are in **one single file**:

```
src/data/portfolioData.js
```

Just edit that file — all sections update automatically.

## 🎨 Theming

Colors and fonts are configured in `tailwind.config.js`.
Change the `colors` object to restyle the entire site.

## 🚀 Deploy to Vercel (Free)

1. Push to GitHub
2. Go to vercel.com → Import repo
3. Click Deploy — done!

Your live URL: `https://chaithra-portfolio.vercel.app`
"# Portfolio" 
