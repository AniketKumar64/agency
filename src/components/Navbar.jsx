import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Adjust the path to your logo image

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[8vh] fixed shadow-2xs z-100 bg-white/50 backdrop-blur-3xl w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
       
      <div className="flex items-center justify-center">
  <a href="#home" className="block">
    <img
      src={logo}
      alt="logo"
      className="w-44 h-auto object-contain" // adjust size/style as needed
    />
  </a>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden flex flex-col bg-gray-50 px-4 pb-4 space-y-4"
        >
          {["home", "about", "services", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
