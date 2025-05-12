import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useScroll, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Loader from './components/Loader'

const App = () => {

  const { scrollYProgress } = useScroll()

   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
   
 
        <div className="">
      {isLoading ? (
        <Loader />
      ) : (
         <div>
     <Navbar />
    <div className="m-auto p-4 md:p-2 backdrop-blur-3xl  pt-[10vh]">
   
  
    <motion.div
      className="fixed top-[10vh] left-0 right-0 h-[2px] bg-gradient-to-r rounded-4xl from-fuchsia-500 via-pink-600 to-pink-300 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </div>
  
    </div>
      )}
   
   </div>
  )
}

export default App