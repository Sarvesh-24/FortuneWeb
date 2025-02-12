import React, { useState, useEffect } from "react";
import { FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const categories = ["all", "analysis", "astrology", "beginners", "technical", "crypto"];

  const faqData = [
    { id: 1, question: "What is Gann Analysis?", answer: "Gann Analysis is a trading strategy developed by W.D. Gann that uses geometric angles, time cycles, and mathematical principles to predict price movements in the stock market. It focuses on finding support and resistance levels, trend change dates, and precise price targets.", category: "analysis" },

    { id: 2, question: "How can financial astrology help in trading?", answer: "Financial astrology examines planetary cycles and their influence on market trends. It helps traders identify key dates for trend reversals, sector-specific impacts, and long-term market cycles, offering a unique perspective for decision-making.", category: "astrology" },
    
    { id: 3, question: "Are your courses suitable for beginners?", answer: "Absolutely! Our courses are designed to cater to all levels, from beginners who want to learn stock market basics to advanced traders looking to refine their strategies with Gann techniques, time cycles, and financial astrology.", category: "beginners" },

    { id: 4, question: "What is the Fortunesignals system?", answer: "Fortunesignals is a proprietary trading tool that helps identify market trends, reversals, and momentum across multiple timeframes. It's user-friendly and perfect for both intraday and positional traders.", category: "technical" },

    { id: 5, question: "Can I apply these techniques to cryptocurrencies or commodities?", answer: "Yes, the techniques we teach, such as Gann Analysis, time cycles, and financial astrology, can be applied to various markets, including cryptocurrencies, commodities like gold and silver, forex, and traditional stock markets.", category: "crypto" },

    { id: 6, question: "Do I need prior knowledge in astrology to learn financial astrology?", answer: "No prior knowledge of astrology is required. Our financial astrology courses are simplified to help you understand and apply planetary influences on the financial markets without complex astrological concepts.", category: "astrology" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
    id="faq"
    className="w-full bg-white dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 font-roboto text-[#444444] dark:text-gray-300 transition-colors duration-300"
  >
    <div className="max-w-3xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#384f4b] dark:text-white text-center mb-4 font-inter">
        Frequently Asked Questions
      </h2>
      <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 transition-colors duration-300"></div>
  
      {/* Search Bar */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
          aria-label="Search FAQs"
        />
      </div>
  
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-900"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            aria-pressed={selectedCategory === category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
  
      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg"
              onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
              aria-expanded={expandedId === faq.id}
            >
              <span className="font-medium text-[#384f4b] dark:text-white font-inter">
                {faq.question}
              </span>
              {expandedId === faq.id ? (
                <FiChevronUp className="text-gray-500 dark:text-gray-400" />
              ) : (
                <FiChevronDown className="text-gray-500 dark:text-gray-400" />
              )}
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-200 ${
                expandedId === faq.id ? "py-4" : "max-h-0"
              }`}
            >
              <p className="text-[#444444] dark:text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
  
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-24 right-8 p-3 bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-900 rounded-full shadow-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 z-60"
          aria-label="Back to top"
        >
          <IoArrowUpCircleOutline size={40} />
        </button>
      )}
    </div>
  </div>
  
  );
};

export default FAQ;

