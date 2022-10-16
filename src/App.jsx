import { useState, useEffect } from 'react'
import Header from './components/Header'
import Principal from './components/Principal'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import './app.css'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Header  />
      <Principal />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
