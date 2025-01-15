
import React from 'react';
import { FaChalkboardTeacher, FaHandsHelping, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section
  id="services"
  className="w-full min-h-screen px-4 py-16 bg-white dark:bg-gray-900 text-[#444444] dark:text-gray-300 font-roboto transition-colors duration-300"
>
  <div className="w-full max-w-screen-xl mx-auto px-6 py-12">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] text-center mb-4 font-inter dark:text-white">
      Our Services
    </h2>
    <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 dark:bg-blue-400"></div>

    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {/* Card 1: Live Trading Mentorship Programs */}
      <div className="rounded-lg border p-6 shadow-lg hover:shadow-xl transition dark:bg-gray-800 dark:text-white dark:border-gray-700">
        <div className="text-4xl text-teal-500 mb-4 dark:text-teal-400">
          <FaChalkboardTeacher />
        </div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Live Trading Mentorship Programs
        </h3>
        <p className="text-gray-600 mb-4 dark:text-gray-400">
          Learn directly from experts in real-time trading sessions and take your trading skills to the next level.
        </p>
        <a
          href="/services"
          className="text-teal-500 hover:underline font-medium dark:text-teal-400 dark:hover:text-teal-300"
        >
          Explore Programs →
        </a>
      </div>

      {/* Card 2: Free Trading Workshop */}
      <div className="rounded-lg border p-6 shadow-lg hover:shadow-xl transition dark:bg-gray-800 dark:text-white dark:border-gray-700">
        <div className="text-4xl text-blue-500 mb-4 dark:text-blue-400">
          <FaHandsHelping />
        </div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Time Trading Technique
        </h3>
        <p className="text-gray-600 mb-4 dark:text-gray-400">
          Join our free workshops to gain valuable insights and strategies for successful trading.
        </p>
        <a
          href="#contact"
          className="text-blue-500 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-300"
        >
          Contact Us →
        </a>
      </div>

      {/* Card 3: Active Telegram Community */}
      <div className="rounded-lg border p-6 shadow-lg hover:shadow-xl transition dark:bg-gray-800 dark:text-white dark:border-gray-700">
        <div className="text-4xl text-purple-500 mb-4 dark:text-purple-400">
          <FaChartLine />
        </div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Financial Planning
        </h3>
        <p className="text-gray-600 mb-4 dark:text-gray-400">
          Strategically set goals, manage budgets, invest wisely, and plan for retirement to secure your financial future.
        </p>
        <a
          href="/mutualfunds"
          className="text-purple-500 hover:underline font-medium dark:text-purple-400 dark:hover:text-purple-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know More →
        </a>
      </div>

      {/* Card 4: Fortune Advisorz Live Events */}
      <div className="rounded-lg border p-6 shadow-lg hover:shadow-xl transition dark:bg-gray-800 dark:text-white dark:border-gray-700">
        <div className="text-4xl text-red-500 mb-4 dark:text-red-400">
          <FaCalendarAlt />
        </div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          Fortune Advisorz Live Events
        </h3>
        <p className="text-gray-600 mb-4 dark:text-gray-400">
          Attend our live events and seminars for advanced trading techniques and market insights.
        </p>
        <a
          href="#event"
          className="text-red-500 hover:underline font-medium dark:text-red-400 dark:hover:text-red-300"
        >
          View Events →
        </a>
      </div>
    </div>

    {/* Know More Button */}
    <div className="text-center mt-8">
      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white md:rounded-md font-semibold shadow-lg hover:bg-blue-700 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400"
        aria-label="Learn more about our services"
      >
        Know More
      </motion.a>
    </div>
  </div>
</section>

  );
};

export default Services;

