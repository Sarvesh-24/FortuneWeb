import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Program = () => {
  return (
  
<section
  id="about"
  className="w-full px-4 py-8 bg-white dark:bg-gray-900 text-[#444444] dark:text-gray-100 font-roboto transition-colors duration-300"
>
  {/* Section Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-gray-100 text-center mb-4 font-inter">
    Our Flagship Program
  </h2>
  <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>

  <div className="w-full max-w-screen-xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-6">
      {/* Image */}
      <div
        className="lg:w-1/2 order-1 lg:order-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <img
          src="/assets/program/Program1.webp" // Ensure the image path is correct
          alt="Flagship Program"
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
        <ul className="list-none px-0 space-y-4">
          <li className="flex items-center justify-start text-lg dark:text-gray-300">
            <MdCheckCircle className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
            <span>Trend Capturing Techniques.</span>
          </li>
          <li className="flex items-center justify-start text-lg dark:text-gray-300">
            <MdCheckCircle className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
            <span>Time Cycles Secret Formula.</span>
          </li>
          <li className="flex items-center justify-start text-lg dark:text-gray-300">
            <MdCheckCircle className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
            <span>Powerful Gann Trading Formula.</span>
          </li>
          <li className="flex items-center justify-start text-lg dark:text-gray-300">
            <MdCheckCircle className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
            <span>Financial Astrology.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  
  );
};

export default Program;


