import React from 'react'
import { motion } from 'framer-motion'
import heroabout from '../assets/about.jpg'


const About = () => {
   
    
      const worksdata = [
        { title: "Conversion Rate Increase", percentage: "95%", description: "Driving conversions with targeted marketing campaigns." },
        { title: "Customer Satisfaction", percentage: "90%", description: "Enhancing customer experience through personalized solutions." },
        { title: "Revenue Growth", percentage: "80%", description: "Boosting sales with effective marketing strategies." },
        { title: "Brand Awareness", percentage: "75%", description: "Increasing brand visibility through targeted campaigns." },
     
      ]


  return (
    <div 
  id='about'
  className="  md:my-10  backdrop-blur-sm ">
  <motion.div
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1,y: 0 }}
  
     transition={{ duration: 0.6, delay: 0.6 }}
     viewport={{ once: true }}
  
  className="h-full w-full py-10 bg-[#ffffff]  rounded-lg  backdrop-blur-xs  flex flex-col md:flex-row items-center justify-center ">
 
    <div className="w-full h-full md:w-1/2 text-center md:text-left text-4xl md:text-5xl font-semibold text-gray-800 p-6 md:p-8">
      <span className="text-indigo-600 font-bold">Helping</span> Companies Grow Beyond Their Limits
    </div>

   
    <div className="w-full md:w-[60%] text-justify md:text-left text-lg font-medium text-gray-600 p-6 md:p-8">
      <p className="leading-relaxed">
           Our agency helps businesses build websites that not only capture attention but also drive results. With a
        focus on user experience, performance, and design, we create websites that enhance your brand presence and
        deliver measurable growth.
      </p>
    </div>


  </motion.div>


  <motion.div

    
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}

  className=" md:w-[80%] w-full  m-auto rounded-2xl  bg-[url('https://cdn.prod.website-files.com/64e61e9bfaf90bd7fd8ac398/64ee3749a8cf95d59c21fd77_about-our-agency-devtech-x-webflow-template.png')] bg-cover bg-center h-[70vh]  ">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    
    className="flex flex-col items-center justify-center h-full  bg-opacity-50 p-6 md:p-8">
      <h1 className=" text-4xl md:text-6xl text-center  font-bold mb-4 tracking-widest ">About Our <span className='text-7xl text-[#EB885B] '>Agency</span></h1>
      <p className="text-lg font-medium text-center tracking-wide  max-w-2xl">
        We are dedicated to empowering businesses with cutting-edge web solutions that drive growth and success.
  
      </p>
      <div className="flex">
      <button
      
       className="bg-[#EB885B] text-white rounded-2xl px-6 py-3 text-lg hover:bg-[#EB885B]/80 mt-4 ml-4">
      
      <a href="about">
        Get Started
      </a>
      </button>


</div>

    </motion.div>
    


  </motion.div>
<div className="">
{
  <div className=" achivements px-8 h-full py-12 flex flex-col items-center justify-center">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Achievements</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl">
        {worksdata.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-gray-800">{item.percentage}</h2>
                <p className="text-lg font-medium text-gray-600 mt-2">{item.title}</p>
                <p className="text-gray-500 mt-2 text-center">{item.description}</p>
            </div>
        ))}
     
    </div>
  </div>
}
</div>


<section className=" my-10 rounded-3xl py-16 md:px-8 backdrop-blur-3xl  gap-4 h-full md:w-[80vw] m-auto flex flex-col-reverse md:flex-row items-center justify-center">
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}

className="left md:w-1/2 flex  gap-4 flex-col items-center justify-center">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 flex tracking-wide flex-col ">We started in 2025 as a small team of <span>passionate developers</span></h1>
  <p className="text-md font-medium text-gray-400 text-left max-w-2xl">
    Our journey began with a shared vision of creating exceptional web experiences. Over the years, we have evolved into a full-fledged agency, driven by innovation and a commitment to excellence. <br /> Today, we are proud to partner with businesses of all sizes, delivering tailored solutions that meet their unique needs.

  </p>
</motion.div>

<motion.div 
 initial={{ opacity: 0, y: -20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.4 }}
 viewport={{ once: true }}
className="right md:w-1/2">
  <img src={heroabout} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />

</motion.div>
</section>

</div>
  )
}

export default About