import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {

    const services= [
      {
        title: "UI/UX Design",
        items: [
          "Landing Pages",
          "Prototypes",
          "Websites",
          "Design Systems",
          "Dev Handover",
          "Upgrading Websites"
        ],
        img: "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png", 

      },
      {
        title: "Branding",
        items: [
          "Logo and Branding",
          "Brand Guides",
          "Promotional Videos",
          "Poster and Post for Social Media"
        ],
   img: "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",       },
      {
        title: "Print",
        items: [
          "Business Cards",
          "Stationery",
          "Packaging",
          "Brochures"
        ],
   img: "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",       },
      {
        title: "SaaS Services",
        items: [
          "Cross-Platform Apps with Flutter",
          "Custom SaaS Platforms beyond Flutter",
          "API Integration",
          "Backend Development",
          "Fast, Scalable & Secure App Solutions"
        ],
   img: "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",       }
    ];
    

    const colors = [
      "from-purple-500/10 to-pink-500/20",
        // // "from-white to-white",
        // "from-pink-100/40 to-pink-50/40",
        // "from-blue-100/40 to-blue-50/40",
        // "from-green-100/40 to-green-50/40",
        // "from-yellow-100/40 to-yellow-50/40",
        // // "from-purple-100/40 to-purple-50/40",
    ]




  return (
    <section
    id="services"
     className="bg-transparent w-full md:w-[80%] mx-auto px-1  md:px-8 py-16">
    <div className="max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-4xl md:text-7xl p-6  font-bold mb-16 leading-tight text-right text-gray-900">
        What we can <br className="hidden md:block" /> help you with
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {services.map((service, index) => (
          <motion.div
                 key={index}
                 className="gap-6 p-6 bg-white/5 hover:border-2 hover:border-pink-300 duration-100 transition-all ease-linear backdrop-blur-lg  rounded-xl shadow-md flex flex-col"
                 initial={{ opacity: 0, y: 50 }} // Start with a slight vertical offset and hidden state
                 animate={{ opacity: 1, y: 0 }} // Fade in and slide to normal position
                 transition={{
                   delay: index * 0.3, // Stagger the animation
                   duration: 0.6,
                   ease: "easeOut",
                 }}
                 whileHover={{
                   scale: 1.05, // Slightly scale up on hover
                   transition: { duration: 0.3 },
                 }}
               >  <div className="flex flex-col justify-start  h-full">
               
            <h3 className="text-gray-900 text-3xl font-semibold mb-4">{service.title}</h3>
            <ul className=" pl-5 space-y-2 text-gray-800">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  <span className="text-gray-900">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>


    </div>
  </section>
  )
}

export default Services