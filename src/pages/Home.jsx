import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import About from '../components/About'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import BackToTopButton from '../components/BackToTopButton'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Info/>
        <About/>
        <Projects/>
        <Services/>
         <FAQ/>
        <Contact/>
        <BackToTopButton/>
        <Footer/>
    </div>
  )
}

export default Home