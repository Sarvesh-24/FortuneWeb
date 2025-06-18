import React from "react";
import { FaFacebookF, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

const FloatingSocialIcons = () => {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col gap-3 z-50">
      <a
        href="https://www.facebook.com/fortuneadvisorz/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-r-lg hover:scale-110 transition-all"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/fortune_advisorz/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-r-lg hover:scale-110 transition-all"
      >
        <FaInstagram />
      </a>
      <a
        href="https://t.me/FortuneSignals369"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white p-3 rounded-r-lg hover:scale-110 transition-all"
      >
        <FaTelegram />
      </a>
      <a
        href="https://www.youtube.com/@parthasarathyrs7193"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-3 rounded-r-lg hover:scale-110 transition-all"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
