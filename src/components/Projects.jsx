import React from 'react'
import ecommerce from '../assets/ecommerce.png'
import glamour from '../assets/glamour.jpg'
import ProjectBrazaar from '../assets/ProjectBazaar.jpg'
import { motion } from 'framer-motion'

const Projects = () => {

    const Projects = 
  [
    {
      title: "E-Commerce Platform",
      description:
        "Developed a full-stack e-commerce web application with user authentication, product management, payment integration, and an admin dashboard for inventory tracking.",
      imageUrl: ecommerce, // Replace with your image
      link: "https://everydaylife.vercel.app/",
    },
    {
      title: "Glamour Grid",
      description:
        "Designed a responsive grid layout for showcasing fashion products, featuring hover effects and smooth transitions.",
      
      imageUrl:glamour,
      link: "http://glamourgrid.vercel.app",
    },


    {
      title: "projectbazaar",
      description:
        "Developed a platform for users to buy and sell projects, featuring user authentication, project listings, and a secure payment system.",
        imageUrl: ProjectBrazaar,
      
     
      link: "https://myprojectbazaar.vercel.app",
    },
  ]


  return (
    <section id="projects"
    className="md:w-[80%] md:mt-10 mt-5 md:m-auto px-1 py-16">
     <h2 className="md:text-6xl text-5xl drop-shadow-[0_0_1px_rgb(0,0,0)] font-bold mb-12 text-center md:text-left text-black">PROJECTS</h2>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       {Projects.map((project, index) => (
         <a
           href={project.link}
            target="_blank"
  rel="noopener noreferrer"
           key={index}
           className="group transition-transform hover:scale-105"
         >
           <div className="overflow-hidden rounded-lg shadow-lg">
             <img
               src={project.imageUrl}
               alt={project.title}
               
               className="w-full h-98 shadow-sm object-cover group-hover:opacity-90 transition"
             />
           </div>
           <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
           <p className="text-gray-600 mt-2">{project.description}</p>
         </a>
       ))}
     </div>
   </section>
  )
}

export default Projects