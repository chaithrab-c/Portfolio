// src/App.jsx
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import Hero       from './sections/Hero'
import Skills     from './sections/Skills'
import Experience from './sections/Experience'
import Projects   from './sections/Projects'
import Education  from './sections/Education'
import Contact    from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
