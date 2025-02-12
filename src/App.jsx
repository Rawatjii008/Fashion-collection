import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Testomonials from './Components/Testomonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Feature from './Components/Feature'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <Feature />
      <About />
      <Testomonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App