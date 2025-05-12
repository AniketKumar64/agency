import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import heroimg from '../assets/hero.avif'

const Hero = () => {

    const brands = [
      "UI/UX Design",
      "Branding",
      "SAAS Services",
      "Printing",
      "Web Design",
     
      "E-commerce Design",
      "Logo Design",
      "Mobile App Design",
      
      "Interaction Design",
      "Landing Page Design"]



  return (
    <div>
  {/* Hero Section */}
  <section id="home" className="py-16 md:px-8 px-4 min-h-screen flex items-center">
    <div className="md:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="flex-1"
      >
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-7xl md:text-7xl   pt-10 md:pt-0 text-center md:text-left font-bold leading-tight"
        >
          BUILDING WEBSITES
        </motion.h1>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="inline-block px-4 mt-4 rounded-lg"
        >
          <h2 className="text-indigo-600 font-bold text-6xl md:text-7xl text-center md:text-left">
            THAT INSPIRE<span className="text-black"></span>
          </h2>
        </motion.div>

        <p className="text-gray-700 mt-8 max-w-lg">
          Crafting stunning, high-performance websites that drive your business forward. 
          Let us bring your vision to life with modern, responsive design.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8 z-10">
          <button className="bg-gray-200 text-black rounded-full px-6 py-3 text-lg hover:bg-gray-100">
           <a href="https://forms.gle/jqjCnEuJpFdGpZcA8" target="_blank" rel="noopener noreferrer">
            Get Started
           </a>
          </button>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex flex-col items-center"
      >
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          alt="Hero"
          src={heroimg}
          className="rounded-2xl object-cover"
        />

        {/* Tags */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 capitalize mt-6"
        >
          {["ui/ux", "Branding", "SAAS Services",  "Printing"].map((tag, index) => (
            <span
              key={index}
              className="border border-gray-400 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>

  {/* Brands Marquee Section */}
  <motion.section className="bg-black py-10 overflow-hidden">
    <div className="w-[80%] mx-auto px-5 mb-8">
      <motion.h2
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-xl py-4 font-semibold"
      >
        Complete Creative Suite...
      </motion.h2>

      <Marquee pauseOnHover speed={50} gradient={false}>
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center mx-10">
            <h1 className="text-white text-2xl capitalize tracking-tight flex items-center gap-1">
              {brand}
            </h1>
          </div>
        ))}
      </Marquee>
    </div>
  </motion.section>
</div>

  )
}

export default Hero