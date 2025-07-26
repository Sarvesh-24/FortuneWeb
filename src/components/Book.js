import React from "react";
import { motion } from "framer-motion";

const Book = () => {
  return (
    <section
    id="book"
    className="w-full px-6 py-8 bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-white text-center font-['Inter', sans-serif] mb-4">
      Book
    </h2>
    <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 transition-colors duration-300"></div>
  
    <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0 px-4">
        <img
          src="/assets/book/Book.jpg" // Replace with the actual path to your book cover image
          alt="Book Cover"
          width={300}
          height={450}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
  
      {/* Content Section */}
      <div className="w-full md:w-1/2 md:pl-8 px-4">
        <h3 className="text-2xl font-semibold text-[#384f4b] dark:text-white font-['Inter', sans-serif] mb-2">
          SAMPADASTRA EDITION-2
        </h3>
        <p className="text-[#444444] dark:text-gray-300 mb-4 font-['Roboto', sans-serif]">
          Weapon of Wealth
        </p>
        <p className="text-[#444444] dark:text-gray-300 mb-6 font-['Roboto', sans-serif]">
          In 2025, we are coming with the{" "}
          <strong>SECOND EDITION ON Advanced Gann Analysis</strong>, which will
          cover the following:
        </p>
  
        <ul className="list-disc list-inside text-[#444444] dark:text-gray-300 space-y-2 mb-6 font-['Roboto', sans-serif]">
          <li>
            <strong>Major top & bottom dates for key Indian indices</strong>:
            NIFTY, BANKNIFTY, FINNIFTY, MIDCAP, SMALL CAP, SENSEX, NIFTY IT,
            NIFTY PSE INDEX, NIFTY AUTO, NIFTY PHARMA, NIFTY METALS & NIFTY FMCG.
          </li>
          <li>
            <strong>Major top & bottom dates for international indices</strong>:
            DOWJONES, S&P, NASDAQ, HANGSANG, US OIL (CRUDE), XAUUSD (GOLD),
            XAGUSD (SILVER).
          </li>
          <li>
            <strong>10 major US stocks high and low dates for 2025</strong>:
            TESLA, NVDA, AAPL, SMCI, MSTR, MSFT, AMZN, META, AMD, INTC & AVGO.
          </li>
          <li>
            <strong>High and low dates for major forex pairs</strong>.
          </li>
          <li>
            <strong>Major top & bottom dates for cryptocurrencies</strong>:
            Covers BTC, which is the driver for the entire crypto market.
          </li>
          <li>
            <strong>Major top & bottom dates for all Indian 225 F&O stocks</strong>.
          </li>
          <li>
            <strong>Bullish and Bearish F&O stocks</strong>: From January 2025
            to December 2025 (month-wise).
          </li>
          <li>
            <strong>All major astro dates for 2025</strong>: Astro events that
            influence market movements, useful for sector selection and timing
            the entry/exit of positions.
          </li>
        </ul>
  
        <div className="flex space-x-4">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdy4XiiexsUG16tRGeSQbh3nQHAzLeGnQG1SLOTXa_Dg3zwaQ/viewform?usp=sharing&ouid=104965521659633288081"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-8 py-3 bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 md:rounded-md font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Buy the book"
          >
            Click Here
          </motion.a>
        </div>
      </div>
    </div>
  </section>
  

  );
};

export default Book;
