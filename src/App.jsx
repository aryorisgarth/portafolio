import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
