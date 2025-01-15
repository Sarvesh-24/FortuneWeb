import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
    id="policies"
    className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8"
  >
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      className="max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
      </div>
  
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8">
        {/* Privacy Policy Content */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Privacy and Security</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Privacy and security of your personal information is our priority. Fortune Advisorz Crew assures you that the user or customer information and details collected through accessing, using, and browsing the website, is safe, secured, and fully compliant with prevailing laws of India. All payment transactions are made only through encrypted SSL technology.
        </p>
  
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">Note:</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Our privacy policy is subject to change without prior notice. Please review this policy periodically in order to stay updated. Further, this privacy statement does not extend to the services provided by our business partners, affiliates, or the designers we have collaborated with. Please review the privacy statements of the other parties with whom you may interact.
        </p>
      </div>
    </motion.div>
  </div>
  
  );
};

export default PrivacyPolicy;
