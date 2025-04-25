import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const Event = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="event" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 py-16 lg:py-24" aria-label="About Event Section">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#384f4b] dark:text-white mb-4">
              Mind Over Markets
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 dark:bg-blue-400 sm:bg-blue-400"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <img
                src="/assets/background img/bgImg03.jpg"
                alt="Event Conference"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 font-bold leading-relaxed dark:text-gray-300">
                LEARN OPTIONS THRU GANN & TRADE LIVE
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full dark:bg-blue-400">
                    <FaCalendarAlt className="text-blue-600 text-xl dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#384f4b] dark:text-white">Date & Duration</h3>
                    <p className="text-gray-600 dark:text-gray-300">MAY 24-25, 2025 | 2 Full Days</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full dark:bg-blue-400">
                    <FaMapMarkerAlt className="text-blue-600 text-xl dark:text-white " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#384f4b] dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      THE SAVERA HOTEL <br />
                      146, Dr Radha Krishnan Salai, Mylapore,<br />
                      Chennai, Tamil Nadu, 600004 <br />
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full dark:bg-blue-400">
                    <FaUsers className="text-blue-600 text-xl dark:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#384f4b] dark:text-white">Participants</h3>
                    <p className="text-gray-600 dark:text-gray-300">2000+ Traders & Investors</p>
                  </div>
                </div> */}
              </div>

              <motion.a
                href="https://forms.gle/eN5sAKkf4kA3tR6eA"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white rounded-md font-semibold shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Learn more about the event dark:bg-blue-400"
              >
                Learn more
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-bold mb-3">Day 1</h3>
              {/* <h2 className="text-gray-600 font-bold mb-2 dark:text-gray-300">
                Topic 1: Mastering Market Moves with Advanced Techniques
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                In this session, you’ll learn:
              </p> */}
              
              <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                <li>
                  <strong>Purity of Breakout:</strong> This section discusses the purity of breakout for index, stocks, and options.
                </li>
                <li>
                  <strong>Range Calculation:</strong> Find the range and targets of stocks or indices before the start of the year, month, or week. This ultimate system empowers trend traders to capture big swing moves with precision.
                </li>
                <li>
                  <strong>How to trade Trend change date:</strong> This section covers to trade trend change date in intraday and positional.
                </li>
                <li>
                  <strong>Secret to trade Gap up and Gap down analysis:</strong> This section reveals the secret to trading gap up and gap down analysis.
                </li>
              </ul>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-bold mb-3">Day 1</h3>
              <h2 className="text-gray-600 font-bold mb-2 dark:text-gray-300">Topic 2: Purity of Breakout (POB)</h2>
              <p className="text-gray-700 dark:text-gray-300">Master the Purity of Breakout strategy for identifying powerful market moves:</p>
              <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                <li>Apply POB across different timeframes in indices, stocks, cryptos, and commodities.</li>
                <li>Predict key price targets and learn how to spot market tops and bottoms.</li>
                <li>Get exclusive insights into Bank Nifty timing and predict its movements accurately.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-bold mb-3">Day 2</h3>
              <h2 className="text-gray-600 font-bold mb-2 dark:text-gray-300">Live Trading Session</h2>
              <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300 space-y-2">
                <li>Watch real-time market analysis using TTS (Time-Price-Space) and Fortune Signals with the Gann Technique.</li>
                <li>Participate in live trades guided by experts.</li>
              </ul>
              <h2 className="font-bold mt-4 dark:text-gray-300">Exclusive Bonus Package:</h2>
              <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300 mt-2">
                <li>Receive a forecast with High and Low Dates for Nifty and Bank Nifty for 2025.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 dark:bg-gray-800 dark:text-white">
              <h3 className="text-xl font-bold mb-3">Day 2</h3>
              <h2 className="text-gray-600 font-bold mb-2 dark:text-gray-300">Live Trading Session</h2>
              <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300 space-y-2">
                <li>Watch real-time market analysis using TTS (Time-Price-Space) and Fortune Signals with the Gann Technique.</li>
                <li>Participate in live trades guided by experts.</li>
              </ul>
              <h2 className="font-bold mt-4 dark:text-gray-300">Exclusive Bonus Package:</h2>
              <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300 mt-2">
                <li>Receive a forecast with High and Low Dates for Nifty and Bank Nifty for 2025.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Event;
