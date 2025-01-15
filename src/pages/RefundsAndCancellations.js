import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RefundsAndCancellations = () => {
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
  id="refundpolicy"
  className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8"
>
  <motion.div
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    variants={fadeIn}
    className="max-w-7xl mx-auto"
  >
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Refunds & Cancellations</h1>
    </div>

    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8">
      {/* Refund Policy Content */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Refund Policy</h2>
      <p className="text-gray-600 dark:text-gray-300">
        All sales on FORTUNE ADVISORZ are final. No cancellation, No Refunds, under any circumstances or of whatsoever nature. We strongly recommend that before payment, our visitors should:
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
        <li>Read all information about our products, services, and support given to our clients.</li>
        <li>Evaluate the quality of our services by way of sample reports/live reports/historical performance reports made available for registered unpaid users.</li>
        <li>Read all About Us and our Team. Read about Services offered, Frequently Asked Questions (FAQ’s).</li>
        <li>Read Terms of Use/Privacy Policy/Disclaimer/Disclosure in details. I confirm that I have read the Essential Legal Information and the Privacy Policy and agree to abide by same.</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">Cancellation Policy</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Prior to buying or selling an option, a person must receive a copy of Characteristics and Risks of Standardized Futures and Options. Copies of this document may be obtained from your broker, from any exchange on which Futures and Options are traded, or by contacting The Futures and Options Clearing Corporation at NSE or BSE.
      </p>
    </div>
  </motion.div>
</div>

  );
};

export default RefundsAndCancellations;
