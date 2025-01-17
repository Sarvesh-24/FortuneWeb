import React, { useEffect } from "react";
import { FaChalkboardTeacher, FaHandsHelping, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Indicator = () => {
  useEffect(() => {
    // Progress bar logic
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const progressValue = bar.getAttribute("data-progress");
      bar.style.width = `${progressValue}%`;
    });
  }, []);

  return (
   
<div className="space-y-0">
  {/* Indicator Component */}
  <section
    id="about"
    className="w-full min-h-screen px-4 py-8 m-0 bg-white dark:bg-gray-900 text-[#444444] dark:text-gray-100 font-roboto transition-colors duration-300"
  >
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-gray-100 text-center mb-4 font-inter">
      Trade With Power Of Time Trading
    </h2>
    <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>

    <div className="w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Image */}
        <div
          className="lg:w-1/2 order-1 lg:order-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="/assets/indicator/Indicator.webp"
            alt="Indicator"
            className="rounded-tl-[40px] rounded-br-[40px]"
            width="600"
            height="400"
          />
        </div>

        {/* Content */}
        <div
          className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-semibold mb-4 dark:text-gray-200">
            Start Making Consistent Returns Every Month With Fortune Signals
          </h3>
          <ul className="space-y-6">
            {/* Progress Bars */}
            <div>
              {/* Trade Techniques */}
              <div className="mb-4">
                <div className="font-semibold text-[#384f4b] dark:text-gray-200">
                  Trade Techniques
                </div>
                <div className="relative h-4 bg-gray-300 dark:bg-gray-700 rounded-md">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 dark:bg-blue-400 rounded-md"
                    style={{ width: "70%" }}
                  ></div>
                  <span className="absolute right-0 top-[-20px] text-gray-800 dark:text-gray-300 font-semibold text-sm">
                    70%
                  </span>
                </div>
              </div>

              {/* Financial Astrology */}
              <div className="mb-4">
                <div className="font-semibold text-[#384f4b] dark:text-gray-200">
                  Financial Astrology
                </div>
                <div className="relative h-4 bg-gray-300 dark:bg-gray-700 rounded-md">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 dark:bg-blue-400 rounded-md"
                    style={{ width: "90%" }}
                  ></div>
                  <span className="absolute right-0 top-[-20px] text-gray-800 dark:text-gray-300 font-semibold text-sm">
                    90%
                  </span>
                </div>
              </div>

              {/* Proprietary Indicator */}
              <div>
                <div className="font-semibold text-[#384f4b] dark:text-gray-200">
                  Proprietary Indicator
                </div>
                <div className="relative h-4 bg-gray-300 dark:bg-gray-700 rounded-md">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 dark:bg-blue-400 rounded-md"
                    style={{ width: "80%" }}
                  ></div>
                  <span className="absolute right-0 top-[-20px] text-gray-800 dark:text-gray-300 font-semibold text-sm">
                    80%
                  </span>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* Services Component */}
  <section
    id="services"
    className="w-full min-h-screen px-4 py-8 m-0 bg-white dark:bg-gray-900 text-[#444444] dark:text-gray-300 font-roboto transition-colors duration-300"
  >
    <div className="w-full max-w-screen-xl mx-auto px-6 py-12">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] text-center font-inter dark:text-white mb-4">
        Our Services
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 dark:bg-blue-400"></div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="rounded-lg border p-6 shadow-lg hover:shadow-xl transition dark:bg-gray-800 dark:text-white dark:border-gray-700">
          <div className="text-4xl text-teal-500 mb-4 dark:text-teal-400">
            <FaChalkboardTeacher />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Live Trading Mentorship Programs
          </h3>
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            Learn directly from experts in real-time trading sessions and take
            your trading skills to the next level.
          </p>
          <a
            href="/services"
            className="text-teal-500 hover:underline font-medium dark:text-teal-400 dark:hover:text-teal-300"
          >
            Explore Programs →
          </a>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg border p-6 shadow-lg hover:shadow-xl transition dark:bg-gray-800 dark:text-white dark:border-gray-700">
          <div className="text-4xl text-blue-500 mb-4 dark:text-blue-400">
            <FaHandsHelping />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Time Trading Technique
          </h3>
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            Join our free workshops to gain valuable insights and strategies
            for successful trading.
          </p>
          <a
            href="#contact"
            className="text-blue-500 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-300"
          >
            Contact Us →
          </a>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg border p-6 shadow-lg hover:shadow-xl transition dark:bg-gray-800 dark:text-white dark:border-gray-700">
          <div className="text-4xl text-purple-500 mb-4 dark:text-purple-400">
            <FaChartLine />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Financial Planning
          </h3>
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            Strategically set goals, manage budgets, invest wisely, and plan
            for retirement to secure your financial future.
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

        {/* Card 4 */}
        <div className="rounded-lg border p-6 shadow-lg hover:shadow-xl transition dark:bg-gray-800 dark:text-white dark:border-gray-700">
          <div className="text-4xl text-red-500 mb-4 dark:text-red-400">
            <FaCalendarAlt />
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Fortune Advisorz Live Events
          </h3>
          <p className="text-gray-600 mb-4 dark:text-gray-400">
            Attend our live events and seminars for advanced trading techniques
            and market insights.
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
</div>

  );
};

export default Indicator;

