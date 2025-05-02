import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {

    const services = [
        {
            title: "Web Development",
            items: [
                "Responsive Web Design",
                "E-commerce Solutions",
                "Content Management Systems",
                "Custom Web Applications",
            ],
            },
            {
            title: "UI/UX Design",
            items: [
                "User Research and Analysis",
                "Wireframing and Prototyping",
                "Visual Design",
                "Usability Testing",
            ],
            },
            {
            title: "Digital Marketing",
            items: [
                "Search Engine Optimization (SEO)",
                "Social Media Marketing",
                "Email Marketing",
                "Pay-Per-Click Advertising (PPC)",
            ],
            },
            {
            title: "Branding & Identity",
            items: [
                "Logo Design",
                "Brand Strategy Development",
                "Visual Identity Creation",
                "Brand Guidelines",
            ],
            },  
    ]

    const colors = [
        "from-white to-white",
        // "from-pink-100/40 to-pink-50/40",
        // "from-blue-100/40 to-blue-50/40",
        // "from-green-100/40 to-green-50/40",
        // "from-yellow-100/40 to-yellow-50/40",
        // "from-purple-100/40 to-purple-50/40",
    ]




  return (
    <section
    id="services"
     className="bg-transparent w-full md:w-[80%] mx-auto px-4  md:px-8 py-16">
    <div className="max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl md:text-7xl p-6  font-bold mb-16 leading-tight text-right text-gray-900">
        What we can <br className="hidden md:block" /> help you with
      </h2>

      {/* Services Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br   border-white/30 backdrop-blur-md  p-6 rounded-2xl flex flex-col gap-4 hover:shadow-sm hover:scale-105 transition-transform duration-300 ${
              service.special ? "col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
                type: "spring",
            }}
          
          

          >
               <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-40 rounded-3xl"></div>

            <h3 className="font-bold text-3xl text-indigo-700 mb-4">
              {service.title}
            </h3>
            <ul className="space-y-2 bg-gray-50 p-4 rounded-xl  text-gray-950 text-[15px] leading-relaxed">
  {service.items.map((item, idx) => (
    <li
      key={idx}
      className="flex items-start gap-2 hover:bg-white transition-all duration-200 p-2 rounded-md"
    >
      <span className="text-primary font-semibold text-lg leading-none">•</span>
      <span>{item}</span>
    </li>
  ))}
</ul>

          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Services