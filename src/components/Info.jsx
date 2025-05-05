import React from 'react'
import { motion } from 'framer-motion'
import myinfo from '../assets/info.avif'
  
const Info = () => {
    const stats = [
        { number: "15+", label: "Project Successfully Completed" },
        { number: "10+", label: "Happy Clients" },
        { number: "8+", label: "Projects completed " },
        { number: "15+", label: "Listed Projects" },
      ];
    
      const worksdata = [
        { title: "Conversion Rate Increase", percentage: "95%", description: "Driving conversions with targeted marketing campaigns." },
        { title: "Customer Satisfaction", percentage: "90%", description: "Enhancing customer experience through personalized solutions." },
        { title: "Revenue Growth", percentage: "80%", description: "Boosting sales with effective marketing strategies." },
        { title: "Brand Awareness", percentage: "75%", description: "Increasing brand visibility through targeted campaigns." },
     
      ]
  return (
    <div className='py-16  md:py-9 md:my-10  '>
         <section id="info" className="py-16 md:px-8 px-4 md:min-h-screen flex items-center bg-transparent"
     >
      <div className="max-w-7xl mx-auto px-4">
         <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-6 h-6 grid place-items-center bg-[#E74C3C] rounded">
            <div className="w-3 h-3 border-2 border-white"></div>
          </div>
          <motion.h2 
          whileInView={{ x: [-10, 0], opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-3xl font-bold text-[#0A0A0A] tracking-wide">
            WORK INFO
          </motion.h2>
        </div>

        <div className="border-t border-gray-500 mb-10"></div>

        <motion.div
        
          whileInView={{ x: [-40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
           className="grid grid-cols-2 md:grid-cols-4 w-full text-center">
  {stats.map((item, index) => (
    <motion.div
      whileInView={{ x: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 0.9,delay: index * 0.4 }}
      viewport={{ once: true }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}

      key={index}
      className="flex flex-col md:flex-col items-center justify-center p-6 relative"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-[#0A0A0A]">
        {item.number}
      </h3>
      <p className="mt-2 text-base md:text-lg text-[#0A0A0A]">
        {item.label}
      </p>

     
      {index !== stats.length - 1 && (
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 border-r border-gray-500"></div>
      )}
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
    <motion.div
      whileInView={{ x: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 0.9,delay: 0.4 }}
      viewport={{ once: true }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      id="features"
    
     className="works h-full w-full flex p-5  flex-col md:flex-row gap-4 justify-center items-center">  
      
      <motion.div
        whileInView={{ x: [-40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9,delay: 0.4 }}
        viewport={{ once: true }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      
      className="left md:w-[33%] w-full   rounded-2xl  h-[60vh] md:h-full   flex justify-center items-center">
        < img
          alt="work"
          src={myinfo}
          className="rounded-2xl object-cover w-full h-full"
         ></img>
       
        

      </motion.div>
      <div className="right py-10 md:py-0 w-full md:w-[67%] h-full flex justify-center items-center">
        <motion.div
          whileInView={{ x: [-40, 0], opacity: [0, 1] }}
          transition={{ duration: 0.9,delay: 0.8 }}
          viewport={{ once: true }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        
        className="text-center w-full h-full text-[#0A0A0A] grid grid-cols-1  md:grid-cols-2 gap-4 ">
          {worksdata.map((item, index) => (
            <motion.div
            
              whileInView={{ x: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 0.9,delay: index * 0.4 }}
              viewport={{ once: true }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}


            key={index} className="box rounded-2xl flex flex-col justify-between   bg-gray-50 hover:bg-[#e5e5e58a] hover:backdrop-blur-3xl hover:drop-shadow-blue-50  p-4 ">
              <h1 className="m-2 p-4 text-left  text-2xl font-semibold">{item.title}</h1>
              <div className="text-right  ">
            <h2 className=" font-semibold text-8xl   ">{item.percentage}</h2>
            <p className="  font-medium font-mono text-right text-xl md:w-[60%] ml-auto p-2 leading-6 tracking-tight  ">{item.description}</p>
          </div>
            </motion.div>
          ))}

        </motion.div>

        </div>
     
    </motion.div>
    </div>
  )
}

export default Info