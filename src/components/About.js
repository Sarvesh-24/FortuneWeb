import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations

const About = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <section
      id="about"
      className=" section mx-auto max-w-screen-xl px-6 py-16 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div
        className="container mx-auto mb-12 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-white font-['Inter', sans-serif] mb-4">
          About
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6">
        {/* Image Section */}
        <div
          className="order-1 md:order-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="/assets/about/About.webp" // Ensure the image path is correct
            alt="About Fortune Advisorz"
            className="rounded-tl-[40px] rounded-br-[40px] shadow-lg"
            width={600}
            height={400}
          />
        </div>

        {/* Content Section */}
        <div
          className="order-2 md:order-1 space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold text-[#384f4b] dark:text-white font-['Inter', sans-serif]">
            About Fortune Advisorz's Legacy And Existence
          </h3>
          <p className="italic text-[#444444] dark:text-gray-300 font-['Roboto', sans-serif]">
            We are on a mission to empower you financially with easy & powerful
            time-based trading mentorship that works insanely in all time frames
            & market fluctuations so you can trade without any complexity.
          </p>

          {/* Use a regular anchor tag instead of React Router's Link */}
          <motion.a
            href="/company" // Regular anchor tag for navigation
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-8 py-3 bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 md:rounded-md font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Learn more about Fortune Advisorz"
          >
            Know More
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
