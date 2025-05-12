import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'
import { FaPinterest, FaX } from 'react-icons/fa6'
import logo from '../assets/logo.png' // Adjust the path as necessary


const Footer = () => {

    const menu = [
        {
            title: "Company",
            links: [
                "About Us",
                "Careers",
                "Press",
                "Blog",
            ],
        },
        {
            title: "Support",
            links: [
                "Help Center",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service",
            ],
        },
        {
            title: "Resources",
            links: [
                "Documentation",
                "API Reference",
                "Community Forum",
                "Tutorials",
            ],
        },
        {
            title: "Follow Us",
            links: [
                "X",
                "Facebook",
                "Instagram",
                "LinkedIn",
            ],
        },
    ]


  return (
    <footer className="h-full  backdrop-blur-md text-gray-700  px-4">
    {/* Logo */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-1"
    >
      <div className="flex items-center justify-center">
  <a href="#home" className="block">
    <img
      src={logo}
      alt="logo"
      className="w-62 h-auto object-contain" // adjust size/style as needed
    />
  </a>
</div>
    </motion.div>

    {/* Menus */}
    {/* <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="md:grid grid-cols-2 hidden  md:grid-cols-4 max-w-4xl mx-auto gap-8 mb-12 text-center"
    >
      {menu.map((section, idx) => (
        <div key={idx}>
          <h2 className="font-semibold mb-4 text-lg">{section.title}</h2>
          <ul className="space-y-2 flex flex-col items-center">
            {section.links.map((link, i) => (
              <a href='home' key={i} className="text-gray-500 text-sm cursor-pointer hover:underline">
                {link}
              </a>
            ))}
          </ul>
        </div>
      ))}
    </motion.div> */}

    {/* Social icons */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex justify-center gap-6 text-2xl mb-10"
    >
   
      <FaFacebookF className="cursor-pointer hover:text-black" />
      <FaInstagram className="cursor-pointer hover:text-black" />
      <FaX className="cursor-pointer hover:text-black" />
      <FaPinterest className="cursor-pointer hover:text-black" />
    </motion.div>

    {/* Bottom Links */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="text-center space-y-4 text-sm text-gray-500"
    >
      <div className="flex justify-center gap-4">
        <span className="hover:underline cursor-pointer">Contact Us</span>
        <span>|</span>
        <span className="hover:underline cursor-pointer">Privacy Policy </span>
        <span>|</span>
        <span className="hover:underline cursor-pointer">Customize</span>
      </div>
      <p>
        Copyright © Design & Developed by <span className="text-black font-semibold"></span> 
        <span className="text-black font-semibold">Craftsphere</span>
      </p>
    </motion.div>
  </footer>
  )
}

export default Footer