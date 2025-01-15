
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RiskDisclaimer = () => {
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
  id="riskdisclaimer"
  className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8"
>
  <motion.div
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    variants={fadeIn}
    className="max-w-7xl mx-auto"
  >
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Risk Disclaimer</h1>
    </div>

    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8">
      {/* Risk Disclaimer Content */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Risks Associated with Stock Market Trading</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Trading STOCK MARKET can be a challenging and potentially profitable opportunity for investors/traders. However, before deciding to participate in the Futures and Options market, you should carefully consider your investment objectives, level of experience, and risk appetite. Most importantly, do not invest money you cannot afford to lose and NEVER OVERTRADE.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        There is a considerable exposure to risk in capital markets trading. Any trading involving stocks/securities/currencies/commodities involves risks including, but not limited to, the potential for changing political and/or economic conditions that may substantially affect the price or liquidity of a stock/security/currency/commodity. Investments in capital markets speculation may also be susceptible to sharp rises and falls as the relevant market values fluctuate. The leveraged nature of FUTURES AND OPTIONS TRADING means that any market movement will have an equally proportional effect on your deposited funds. This may work against you as well as for you. Not only may investors/traders get back less than they invested, but in the case of higher risk strategies, investors/traders may lose the entirety of their investment. It is for this reason that when speculating in such markets it is advisable to use only risk capital.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Risk Disclaimer</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Trading Derivatives markets on margin carries a high level of risk, and may not be suitable for all investors/traders. Past performance is not indicative of future results. The high degree of leverage can work against you as well as for you. Before deciding to invest in markets you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with markets trading, and seek advice from an independent financial advisor if you have any doubts.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Intellectual Property</h3>
      <p className="text-gray-600 dark:text-gray-300">
        The student acknowledges that all information, whether in the form presentations, software, notes, books, course materials, in any form, including process followed in imparting training, methodology & process used during the training program are the intellectual property of FORTUNE ADVISORZ and shall not be copied.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Non-Compete Agreement</h3>
      <p className="text-gray-600 dark:text-gray-300">
        We are more than happy to welcome our students to learn and trade into the market. If a student starts a new venture similar to FORTUNE ADVISORZ within two years of learning the program, the student would be punishable under the contract act. It would be stated as abusing confidential information, secret or sensitive information, business practices, upcoming products and marketing plans about FORTUNE ADVISORZ.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Risks Associated with Futures And Options Trading</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Futures and Options involve substantial risk and are not suitable for all investors/traders. Futures and Options investors/traders may lose the entire amount of their investment in a relatively short period of time. It is possible to owe more than you have invested in your brokerage account. Please be aware of your broker’s requirements for trading Futures and Options. Before you decide to invest in the Futures and Options market you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a substantial loss which could total more than your initial investment in a short period of time. Therefore you should not invest money that you cannot afford to lose. If you have any questions or concerns regarding the risks associated with Futures & Options trading, you should confer with a trusted and reliable independent financial advisor. None of the information provided by FORTUNE ADVISORZ, constitutes a solicitation to trade any investment or security of any kind.
      </p>
      
      <p className="text-gray-600 dark:text-gray-300">
        FORTUNE ADVISORZ and/or its personnel may or may not own positions and/or trade any securities that are the subject of the education and subsequent information we provide. FORTUNE ADVISORZ is not affiliated with nor do we have any relationship with any brokers that you may open an account with, though we can help you with a list of brokers.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        Past performance is not indicative of future results. You acknowledge and agree that no promise or guarantee of success or profitability has been made between you and FORTUNE ADVISORZ. Testimonials as presented may not be representative of all reasonably comparative students.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Electronic Trading Risks</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Before you engage in transactions using an electronic system, you should carefully review the rules and regulations of the exchanges offering the system and/or listing the instruments you intend to trade. Online trading has inherent risk due to system response and access times that may vary due to market conditions, system performance, and other factors. You should understand these and additional risks before trading.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fortune Advisorz Market Opinions</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Any opinions, news, research, analyses, prices, or other information offered by FORTUNE ADVISORZ, is provided as general market commentary, and does not constitute investment advice. FORTUNE ADVISORZ will not accept liability for any loss or damage, including without limitation to, any loss of profit, which may arise directly or indirectly from use of or reliance on such information.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        Under no circumstances will FORTUNE ADVISORZ be responsible or liable in any way for any content, including but not limited to, any errors or omissions in the content, or for any injury, death, loss or damage of any kind sustained by any person as a result of any content communicated on this website/Facebook page, whether by FORTUNE ADVISORZ or a third party.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        In no event shall FORTUNE ADVISORZ be liable for any special, indirect or consequential damages or any damages whatsoever resulting from loss of use, data or profits arising out of or in connection with the availability, use or performance of any information communicated on this website/Facebook page.
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        We understand before enrolling to our program/course you have gone through all our terms & conditions. Above all the terms & conditions are applicable to all our online & offline programs/courses.
      </p>
    </div>
  </motion.div>
</div>

  );
};

export default RiskDisclaimer;
