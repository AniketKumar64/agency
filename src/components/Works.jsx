import React from "react";
import { motion } from "framer-motion";
// import { workimage2 } from "../assets/workimage2.png ";
// import workimg3 from "../assets/workimage3.png";
import workimage4 from "../assets/workimage4.png";
import workimg3 from "../assets/workimg3.png";
import workimage2 from "../assets/workimage2.png";
import workimage1 from "../assets/workimage1.png";
import { img } from "motion/react-client";

export default function Works() {
  const steps = [
    {
      number: "01",
      title: "Interactive Virtual Sessions",
      desc: "Join up to 4 live virtual meetings per month covering strategic planning, UX brainstorming, and branding alignment—real-time collaboration made easy.",
      img: workimg3,},
    {
      number: "02",
      title: "Asynchronous Follow-ups",
      desc: "Stay updated with post-meeting summaries and design progress via a centralized board—no endless scheduling needed.",
      img: workimage1,
    },
    {
      number: "03",
      title: "Virtual and  Task Dashboard",
      desc: "Queue up design tasks in a virtual dashboard. After meetings, we prioritize and execute based on your current needs.",
      img: workimage1,
    },
  ];
  
    return (
     
<section
id="works"
className="bg-transparent  px-1 md:px-6 py-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-7xl font-bold text-right mb-16">Making it <br /> happen</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="gap-6 p-6 bg-black/5 backdrop-blur-lg  rounded-xl shadow-md flex flex-col"
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
        >
          <div className="text-2xl font-semibold text-gray-600 mb-2">{step.number}</div>
          <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
          <p className="text-sm text-gray-800 mb-6">{step.desc}</p>
          <img
            src={step.img}
            alt={step.title}
            className="w-full h-64 object-cover rounded-lg shadow-md"
            />
        </motion.div>
      ))}
    </div>
  </div>
</section>
    );
  }
  