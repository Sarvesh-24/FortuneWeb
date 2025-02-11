import React, {useState, useEffect} from "react";
import { FaUserTie, FaTrophy, FaUsers, FaHandshake, FaChartLine, FaBullseye, FaLightbulb, FaIndustry } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { FloatingWhatsApp } from 'react-floating-whatsapp'



const achievements = [
  { title: "Global Reach", icon: <RiStockFill />, count: "33+", suffix: "Years Of Expertise…" },
  { title: "Happy Clients", icon: <FaUserTie />, count: "25+", suffix: "Years Of Experience In Serving HNI Clients" },
  { title: "Awards", icon: <FaTrophy />, count: "10k+", suffix: "Traders Life Transformed" },
  { title: "Team Size", icon: <FaUsers />, count: "18+", suffix: "Experience in Providing Advisory Services To Mutual Fund Advisors" },
];






const Company = () => {

  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);


  
    useEffect(() => {
      setIsVisible(true);
      controls.start("visible");
    }, [controls]);


  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleChatSubmit = (event, message) => {
    console.log("Message submitted:", message);
  };

  const handleChatClose = () => {
    console.log("Chat box closed.");
  };

  const handleNotification = () => {
    console.log("Notification triggered.");
  };

  const coreValues = [
    { title: "Transparency in Trading", icon: <FaUsers />, description: "We prioritize open communication and clear processes to build trust with our clients." },
    { title: "Mutual Respect in Client Relations", icon: <FaHandshake />, description: "We uphold respect in every interaction, fostering lasting relationships with traders and investors." },
    { title: "Accountability in Financial Decisions", icon: <FaChartLine />, description: "We take full ownership of our actions, ensuring responsible and ethical financial guidance." },
    { title: "Integrity in Financial Advisory", icon: <FaBullseye />, description: "Honesty and ethical conduct are the cornerstones of our advisory services." },
    { title: "Teamwork for Collaborative Success", icon: <FaLightbulb />, description: "We believe in the power of collaboration to achieve the best outcomes for our clients." },
    { title: "Commitment to Quality Service", icon: <FaIndustry />, description: "Delivering high-quality financial strategies that drive successful outcomes." },
  ];


  return (
    <section
  id="company"
  className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"
>
  {/* Header */}
  <div className="text-center mb-10 sm:mb-14 pt-14 md:pt-20">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-5 sm:mb-7 leading-tight">
    Fortune Advisorz
  </h1>
  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-6 sm:px-0 font-medium">
    RESPECT THE MARKET <strong className="text-blue-600 dark:text-blue-400">“IT WILL RESPECT YOU”</strong>
  </p>
</div>


  {/* Content */}
  <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start gap-8 px-4 sm:px-8">
    {/* Right Section (Image) */}
    <div className="flex-1 relative w-full h-[500px] sm:h-[600px] lg:h-full">
      <img
        src="/assets/company/company3.jpeg"
        alt="Our vision for success"
        className="rounded-2xl shadow-2xl w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
    </div>

    {/* Left Section (About Us) */}
    <div className="flex-1">
      {/* About Us */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          WHO WE ARE?
        </h2>
        <ul className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed list-disc pl-6">
          <li>
            At <strong>Fortune Advisorz</strong>, we help struggling traders through easy and strategic, time-based trading mentorship.
          </li>
          <li>
            Our unique blend of <strong>Vedic Maths</strong>, <strong>Time Analysis</strong>, and <strong>Astrological Analysis</strong> creates an unbeatable <em>Time Trade Technique</em>.
          </li>
          <li>
            This technique helps traders capture big market moves in advance with the most profitable <strong>entry, exit, and stop-loss strategies</strong>.
          </li>
          <li>
            Our time-tested system works across multiple markets: <strong>Stocks</strong>, <strong>Options</strong>, <strong>Futures</strong>, <strong>Commodities</strong>, <strong>Forex</strong>, <strong>Crypto</strong>, and even <strong>Mutual Funds</strong>.
          </li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-100 to-purple-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-3xl sm:text-4xl text-blue-600 dark:text-blue-400 mb-2">
              {achievement.icon}
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {achievement.count}
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {achievement.suffix}
            </div>
            <div className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">
              {achievement.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      className="max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Fortune Advisorz
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
          We Help You Achieve Your Only Target: “That’s Capturing Big Moves In Trading”
        </p>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 mb-12 lg:mb-16">
        {/* Image Section for Vision - Positioned Above on Small Screens */}
        <div className="lg:flex-1 relative overflow-hidden rounded-2xl shadow-lg mb-8 sm:mb-12 lg:mb-0">
          <img
            src="/assets/company/company1.webp"
            alt="A view of the office space reflecting our vision for success"
            className="rounded-2xl shadow-2xl object-cover w-full h-full transition-transform duration-300 hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
        </div>

        {/* Text Section (Mission & Mentor’s Vision) */}
        <div className="lg:flex-1 space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              Mentor’s Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Our mentor’s vision is to revolutionize the way individuals approach the stock market by shifting their mindset from uncertainty to confidence. By offering expert guidance and proven strategies, we aim to help people navigate the complexities of stock trading, investing wisely to build a secure financial future. We believe that with the right tools, knowledge, and support, anyone can become a successful investor. Our commitment is to empower individuals to take control of their financial destiny and achieve long-term wealth through informed and strategic stock market decisions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              At Fortune Advisorz, our mission is to transform how individuals perceive the stock market by providing expert guidance and empowering them with the knowledge needed to make strategic, informed decisions. We strive to help our clients build a secure financial future through effective stock market strategies and continuous education. Our goal is to promote financial independence, wealth-building, and long-term success in the stock market, ensuring that every investor has the tools they need to thrive in the ever-changing financial landscape.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>

  <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      className="max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Our Core Values
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Guiding Principles for Financial Excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-3xl text-blue-600 dark:text-blue-400 mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>

  <FloatingWhatsApp
    phoneNumber="+91 9702625115"
    accountName="FORTUNE ADVISORZ"
    onSubmit={handleChatSubmit}
    onClose={handleChatClose}
    onNotification={handleNotification}
    avatar="/assets/logo/Fortune-Advisorz-logo-web (1).png"
    statusMessage="Typically replies within 1 hour"
    chatMessage={`Hello there! 🤝 How can we help?`}
    placeholder="Type your message here..."
    messageDelay={2}
    darkMode={true}
    allowClickAway={true}
    allowEsc={true}
    className="fixed bottom-8 right-8 p-3 z-50 floating-whatsapp"
    buttonClassName="floating-whatsapp-button"
    chatboxHeight={350}
    notification={true}
    notificationDelay={60}
    notificationSound={true}
    notificationLoop={3}
    notificationStyle={{ backgroundColor: '#007bff', color: 'white' }}
    chatboxStyle={{ borderRadius: '10px' }}
  />

  <div className="mt-16 text-center px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
      Ready to Work With Us?
    </h2>
    <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
      Contact us today to discuss how we can help you achieve your goals.
    </p>

    <a href="/contact">
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
        Get in Touch
      </button>
    </a>
  </div>
</section>

  );
};

export default Company;


