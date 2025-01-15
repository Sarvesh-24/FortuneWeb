import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ServicesProvide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div
  id="serviceprovide"
  className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8"
>
  <motion.div
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    variants={fadeIn}
    className="max-w-7xl mx-auto"
  >
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Service We Provide</h1>
    </div>

    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8">
      {/* Services List */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">OUR SERVICES</h2>
      <ul className="space-y-4 text-gray-600 dark:text-gray-300">
        <li className="text-lg">
          <strong>Get A-Z Education About Stock Market</strong>: Learn the basics to advanced concepts of the stock market and terminology.
        </li>
        <li className="text-lg">
          <strong>Learn Beginner to Advanced Stock Market Concepts & Terminology</strong>: Comprehensive learning from the foundational to expert-level stock market concepts.
        </li>
        <li className="text-lg">
          <strong>How To Take Informed Decisions In Stock Market</strong>: Develop skills to analyze and make data-driven investment decisions.
        </li>
        <li className="text-lg">
          <strong>Understand How To Read Charts & Psychology Of Why Market Moves</strong>: Learn the technical aspects of stock chart analysis and understand market psychology.
        </li>
        <li className="text-lg">
          <strong>How To Build A Successful Career In Stock Market With Our Mentorship Education Program</strong>: Receive mentorship and guidance to build a long-term career in the stock market.
        </li>
      </ul>

      {/* Address Section */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8">Our Address</h3>
      <p className="text-gray-600 dark:text-gray-300">
        3903, 39th floor, Kohinoor Square, Dadar West 400028
      </p>
    </div>
  </motion.div>
</div>

  );
};

export default ServicesProvide;
