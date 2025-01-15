
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div
  id="termsandConditions"
  className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8"
>
  <motion.div
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    variants={fadeIn}
    className="max-w-7xl mx-auto"
  >
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms and Conditions</h1>
    </div>

    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8">
      {/* Terms and Conditions Content */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Terms & Conditions</h2>
      <p className="text-gray-600 dark:text-gray-300">
        The terms and conditions are governed by the provisions of Indian laws, including, but not limited to the Indian Contract Act, 1872; the Information Technology Act, 2000; the rules, regulations, guidelines and clarifications framed thereunder, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (“SPI Rules”) and; the Information Technology (Intermediaries Guidelines) Rules, 2011 (“IG Rules”).
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        All orders placed by the users on the Fortune Advisorz platforms are subject to the availability of such products, Fortune Advisorz Crew’s acceptance of the user’s offer and the user’s continued adherence to the terms and conditions and other policies. Fortune Advisorz Crew may, at any time and without having to service any prior notice to you: (i) upgrade, update, change, modify, or improve the services or a part of the Services in a manner it may deem fit.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        We request you to read through the terms and conditions carefully. These constitute a legal agreement that you will enter into, and shall apply to any interactions or purchases made through this website, hence, affecting your rights.
      </p>
    </div>
  </motion.div>
</div>

  );
};

export default TermsAndConditions;

