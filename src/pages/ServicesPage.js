import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';

const services = [
  {
    title: 'Trade In All Time Frames',
    description: 'Identify highly profitable stocks & options in all time-frames with exact Entry, Exit, Target & Stop Loss',
    icon: '📊',
  },
  {
    title: 'Capture Big Moves',
    description: 'Get cyclic dates to know in advance where the market will move next & capture big moves in advance without risking your capital',
    icon: '🚀',
  },
  {
    title: 'Ride Trend Changes',
    description: 'Know how Planets impact stock markets & use Planetary cycles to identify the trend change dates to avoid giant losses',
    icon: '🔮',
  },
  {
    title: 'Boost Your Margin',
    description: 'Use One Number Magic to get larger profit every month',
    icon: '💰',
  },
  {
    title: 'Make Trade Predictable',
    description: 'Eliminate Market fluctuation anxiety with easy & predictable Gann Numbers',
    icon: '📈',
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-cblue to-blue-600 text-white py-20 px-6 sm:px-8 lg:px-10"
    >
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-black">About Us</h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl">
          Trade Like An Expert Right From The Start
        </p>
      </div>
    </motion.div>
  
    <div className="bg-gray-100 dark:bg-gray-900 about section mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
      {/* Heading and Content Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12">
  <div className="text-center mb-14">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
      Capturing Big Moves & Still Making Losses?  
      <span className="block text-red-600 dark:text-red-400 mt-2">
        STOP CHASING RETURNS!
      </span>
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mt-6 max-w-3xl mx-auto">
      Unlock the power of precision trading! Get **exact entry, target & stop loss**  
      to time **big market moves in advance** with the <span className="text-blue-600 dark:text-blue-400 font-semibold">#1 Time Trade Technique.</span>
    </p>
    <div className="mt-8">
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium max-w-4xl mx-auto">
        Still getting trapped between **entry, target & stop loss?**  
        It's time to **master the market with precision.**
      </p>
    </div>
  </div>
</div>

  
      {/* Services Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          We provide a range of services to help you succeed in the trading world.
        </p>
      </div>
  
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
  
      {/* New "What Exactly You’ll Get Inside" Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          What Exactly You’ll Get Inside?
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {[
          {
            title: "Trading Techniques",
            items: [
              "Different types of trends in the stock market.",
              "NO LOSS STRATEGY BASED ON TIMING TECHNIQUE in Intraday.",
              "How to trade Trend change dates in Intraday and Positional?",
              "How to capture the trend without using any indicator?",
              "Secret to trade Gap up and Gap down analysis.",
              "One number Magic to trade Indices and stocks based on Yearly, Quarterly, Monthly & Weekly.",
              "Whether your Birthdate is a miracle to create long-term wealth?",
              "WDC CONCEPT in Indices” Monthly One date to capture the Top and Bottom in Indices.",
              "How to trade ORB by using “Fortune Signals”",
              "Use “Fortune Signals” to trade the trend change date to capture mega moves in Indices and Stocks.",
              "Videos will be given to get trained in “Fortune Signals” System.",
            ],
          },
          {
            title: "Time Cycles",
            items: [
              "Time-based support and resistance in Indices and stock.",
              "Price time square.",
              "Important Static Trend change date for Indices and stocks.",
              "Important Dynamic Trend change date for Indices and stocks.",
              "Combination cyclic dates in Stocks and Indices.",
              "Major time cycles.",
              "Minor time cycles.",
              "Predominant stocks time cycle.",
              "Predominant Indices time cycle.",
              "Important circular motion time cycles.",
              "How “Trend change date” will decide the direction of the stocks or Index?",
              "How to find major Trend change dates for Index and stocks by using the advanced Gann method?",
              "When will the price reverse from the Top or Bottom based on time?",
              "Secret formula to identify “Trend change dates (TCD).",
              "Use “Fortune Signals” to trade the trend change date to capture mega moves in Indices and Stocks.",
            ],
          },
          {
            title: "Gann Trading",
            items: [
              "“Gann square of 9” and its importance?",
              "Constructing of Gann square of 9.",
              "How to use “Gann square of 9” to predict the Top and Bottom in Index and Stocks?",
              "How to find precise Targets using “Gann square of 9”",
              "Swing trading in Indices and stocks by using Gann Square of 9",
              "Secret System To capture mega Trends without emotions.",
              "Gann square of 144 and Price levels.",
              "5 Imp numbers which will dictate stocks and Indices.",
            ],
          },
          {
            title: "Gann Options Trading",
            items: [
              "Time-based support and resistance in Indices and stock.",
              "How numbers play a vital role in Options to trade monthly, weekly and daily.",
              "Purity of Breakout (for index, stocks and options)",
              "How to identify Zero to Hero Call or Put by using our secret system.",
              "Range calculation for Index, stocks and option (Ultimate system)", 
              "How to use secret system to buy or sell naked Options?",
              "How to use secret system for Options Selling. Advanced analysis.",
              "How to capture big moves in Options & Stocks.",
              "How to find precise Targets in Options?",
              "Secret cycle analysis in Options numbers.",
              "Find out how price moves from one cycle to another cycle?",
              "Predict the top and bottom in the Options chart.",
              "Use “Fortune Signals” to capture the entire momentum even in 15-second time frame to a daily time frame.",
            ],
          },
          {
            title: "Angles & Its Importance",
            items: [
              "Miracle of angels of the past to predict the future support and resistance.",
              "Secret angles to predict the top, bottom, resistance and support.",
              "Secret angle to predict the top and bottom in Indices and stocks.",
              "5 Different methods to create Gann angels",
              "Method 1: Combine Gann fan with Gann box.",
              "Method 2: Time cycle based on Gann fan.",
              "Method 3: How to find future support & Resistance levels using “Gann fan”.",
              "Method 4: How to draw magical trendlines to forecast the top and bottom.",
              "Method 5: Ichimoku trading system (Beginners Version)",
            ],
          },
          {
            title: "Financial Astrology",
            items: [
              "How do Planets impact stock markets?",
              "Planetary cycles to identify the trend change dates.",
              "Sector Rule by Planets and Stocks.",
              "Which is the important planet in determining the overall market trend?",
              "Planets influencing Commodity Markets (Gold & Silver).",
              "Planets influencing Crypto Markets. (BTC)",
              "Planets Influencing Forex markets.",
              "Complete Major astro aspects and the Important dates for a year (2024).",
              "Advanced Moon combo cycle dates for Nifty.",
              "Major Moon cycle dates for Index and Stocks.",
              "Rules to trade Panchak dates and Targets based on Panchak in Indices and stocks.",
              "[Note: No prior knowledge of Astrology required.]",
            ],
          },
          {
            title: "Intraday Timing Technique",
            items: [
              "Intraday Timing Technique to find Trend Reversal in 5 Min time frame for any indices, stocks, cryptos or currencies",
              "No Loss Strategy based on Timing Technique",
              "NOTE: No need to sit in front of the terminal to trade for the whole day!",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-cblue dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-white dark:text-white mb-6 text-center">
              {section.title}
            </h3>
            <ul className="text-white dark:text-white space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 text-2xl mr-3">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

{/* Dynamic Video Carousel Section */}
<div className="relative w-full mt-16">
  {/* Title for the Video Carousel */}
  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
    HOW TO TRADE FORTUNE SIGNALS
  </h2>

  {/* Video Carousel */}
  <div className="relative w-full pt-[40%]"> {/* Aspect ratio container */}
    <iframe
      src="https://rss.app/embed/v1/carousel/E3gmsZutVUDKTFPW"
      frameBorder="0"
      className="absolute top-0 left-0 w-full h-full border-0"
      title="Video Carousel"
    />
  </div>
</div>



{/* Ready to Work With Us Section */}
<div className="mt-4 text-center px-4 sm:px-6 lg:px-8"> {/* Reduced mt-16 to mt-4 */}
  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Ready to Work With Us?</h2>
  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
    Contact us today to discuss how we can help you achieve your goals.
  </p>
  <a href="/contact">
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      Get in Touch
    </button>
  </a>
</div>


      </div>
    </div>
  );
};

export default ServicesPage;



    



