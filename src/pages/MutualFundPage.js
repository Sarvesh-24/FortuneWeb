import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCash, HiOutlineSwitchHorizontal, HiOutlineClock, HiOutlineArrowRight, HiOutlineCurrencyDollar, HiOutlineChartBar } from 'react-icons/hi';
import SIPCalculator from '../components/InvestmentCalculator';


const MutualFundPage = () => {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
  id="mutualfunds"
>
  {/* Hero Section */}
  <section className="bg-blue-600 text-white text-center py-16 mt-24">
    <h1 className="text-4xl md:text-5xl font-bold">
      Crafting Your Investment Future
    </h1>
    <p className="text-lg mt-4 max-w-3xl mx-auto">
      A mutual fund is a professionally managed portfolio of stocks, bonds, and/or other income
      vehicles devoted to a specific investment strategy or asset class. When investors buy shares
      in the fund, the mutual fund company pools that money to make investments on their behalf. A share
      represents a portion of the fund's holdings.
    </p>
    <motion.a
      href="/contact"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        className="mt-8 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
      >
        ENQUIRE NOW
      </motion.button>
    </motion.a>
  </section>

  {/* Benefits Section */}
  <section className="py-12 px-6 md:px-20">
    <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">
      What are the potential benefits of investing in mutual funds?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <HiOutlineCash className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-xl font-semibold text-blue-500">Diversification</h3>
        </div>
        <p>
          Because mutual funds can invest in many different stocks or bonds, they give investors an easy
          way to diversify their portfolio.
        </p>
      </motion.div>
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <HiOutlineCurrencyDollar className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-xl font-semibold text-blue-500">Tax Benefits</h3>
        </div>
        <p>
          You can save on income tax by investing in mutual funds, such as ELSS funds.
        </p>
      </motion.div>
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <HiOutlineChartBar className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-xl font-semibold text-blue-500">Sector-Specific Investing</h3>
        </div>
        <p>
          Experienced investment teams set the fund's strategies, research investments, make trades, and
          monitor the fund's performance.
        </p>
      </motion.div>
    </div>
  </section>

  {/* Investment Options Section */}
  <section className="bg-blue-50 py-12 px-6 md:px-20">
    <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Mutual Funds to Invest In</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Lumpsum Investment */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <HiOutlineCash className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-xl font-semibold text-blue-500">Lumpsum</h3>
        </div>
        <p>
          Invest a lump sum amount in mutual funds to benefit from professional management and diversification.
          This option is ideal for investors with a significant amount of capital to invest at once.
        </p>
      </motion.div>

      {/* Switch Investment */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <HiOutlineSwitchHorizontal className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-xl font-semibold text-blue-500">Switch</h3>
        </div>
        <p>
          Easily switch between mutual fund schemes to align with your changing financial goals and market
          conditions. Our platform simplifies the process, ensuring seamless transitions.
        </p>
      </motion.div>

      {/* SIP Investment */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <HiOutlineClock className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-xl font-semibold text-blue-500">SIP (Systematic Investment Plan)</h3>
        </div>
        <p>
          Start a Systematic Investment Plan (SIP) to invest small, regular amounts in mutual funds. SIPs help
          you build wealth over time and reduce the impact of market volatility.
        </p>
      </motion.div>

      {/* STP Investment */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <HiOutlineArrowRight className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-xl font-semibold text-blue-500">STP (Systematic Transfer Plan)</h3>
        </div>
        <p>
          Use a Systematic Transfer Plan (STP) to transfer funds from one mutual fund to another systematically.
          STPs allow you to balance your investments between different schemes based on your risk appetite.
        </p>
      </motion.div>

      {/* SWP Investment */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <HiOutlineCurrencyDollar className="w-8 h-8 text-blue-500 mr-4" />
          <h3 className="text-xl font-semibold text-blue-500">SWP (Systematic Withdrawal Plan)</h3>
        </div>
        <p>
          Opt for a Systematic Withdrawal Plan (SWP) to withdraw funds from your mutual fund investments
          regularly. SWPs provide a steady income stream, making them ideal for retirees.
        </p>
      </motion.div>
    </div>
  </section>

  <section>
    <SIPCalculator />
  </section>

  {/* Enquire Now Button Section */}
  <section className="text-center py-16 bg-blue-600 text-white">
    <motion.a
      href="/contact"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        className="mt-8 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
      >
        ENQUIRE NOW
      </motion.button>
    </motion.a>
  </section>
</motion.div>

  
  );
};

export default MutualFundPage;
