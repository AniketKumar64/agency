import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {

    setOpenIndex(openIndex === index ? null : index);
  };

    data = [
        {
            question: "What is your refund policy?",
            answer: "We offer a 30-day money-back guarantee on all our services. If you're not satisfied, let us know within 30 days of purchase for a full refund.",
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach our customer support team via email and phone. Our support hours are Monday to Friday, 9 AM to 5 PM.",
        },{
            "question": "Can you upgrade our existing website or app?",
            "answer": "Absolutely! We specialize in modernizing and upgrading outdated websites and apps with better design, faster performance, and updated technology."
          },
          {
            "question": "How many revisions are included?",
            "answer": "Unlimited revisions! We work until you are fully satisfied with the result."
          },
          {
            "question": "Do you provide ongoing support and maintenance?",
            "answer": "Yes, we offer ongoing support packages for updates, maintenance, and scaling after launch."
          },
          {
            "question": "Do you only work with startups?",
            "answer": "Not at all! We work with startups, agencies, growing businesses, and even solo entrepreneurs."
          },
          {
            "question": "What if I only need design services, not development?",
            "answer": "No problem! You can choose only the design services — like branding, posters, web design, or packaging — without development."
          },
          {
            "question": "How do we get started?",
            "answer": "It’s easy — just book a free consultation, and submit your first request!"
          }
        ]

  return (
    <div className="h-[100%] md:w-[80%] flex flex-col rounded-2xl text-black text-left   md:m-auto m-2.5 px-3 md:px-6 py-10 ">
      <h2 className="text-5xl font-bold mb-6 text-gray-800 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4 w-full md:w-[80%] mx-auto md:px-3.5  ">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md  transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 text-xl  rounded-md font-medium text-gray-950 flex justify-between items-center"
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-5 text-gray-800 text-lg bg-white border-t">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
