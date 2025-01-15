import React, { useEffect } from "react";

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
    <section
  id="about"
  className="w-full min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-[#444444] dark:text-gray-100 font-roboto transition-colors duration-300"
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
          src="/assets/indicator/Indicator.webp" // Use standard <img> for raw React
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

  );
};

export default Indicator;

