import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useScroll, motion } from 'framer-motion'
import Navbar from './components/Navbar'

const App = () => {

  const { scrollYProgress } = useScroll()
  return (
    <>
     <Navbar />
    <div className="m-auto bg-white/30 pt-[10vh]">
   
  
    <motion.div
      className="fixed top-[10vh] left-0 right-0 h-[2px] bg-gradient-to-r rounded-4xl from-fuchsia-500 via-pink-600 to-pink-300 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </div>
  </>
  )
}

export default App