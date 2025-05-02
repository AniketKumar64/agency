import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div
    id="contact"
    className="bg-transparent md:my-10 md:py-16 md:px-8 min-h-[50vh]   flex items-center"
    > <motion.div
    
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}

    
    className="relative bg-white w-[80vw] m-auto overflow-hidden rounded-3xl p-10 sm:p-16 text-center shadow-md">
    {/* Background gradient */}
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 bg-gradient-to-br from-pink-200 via-white to-pink-300 opacity-40 rounded-3xl"></div>
    <motion.div
        initial={{ opacity: 0, y: 0.8 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}

        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(240, 168, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(240, 168, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px',
        }}
      ></motion.div>
    {/* Content */}
    <motion.div
    
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}


    className="relative z-10 flex flex-col items-center justify-center space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        Ready to start working <br /> together with our team?
      </h2>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      
       className="flex flex-wrap items-center justify-center gap-4">
        <button className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition">
          Contact us
        </button>
        <button className="bg-white border border-gray-300 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Our services
        </button>
      </motion.div>
    </motion.div>
  </motion.div></div>
  )
}

export default Contact