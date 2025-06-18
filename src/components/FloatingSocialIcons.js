import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FloatingSocialIcons = () => {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 flex flex-col gap-3 z-50">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-r-lg hover:scale-110 transition-all"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-3 rounded-r-lg hover:scale-110 transition-all"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 text-white p-3 rounded-r-lg hover:scale-110 transition-all"
      >
        <FaTwitter />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-3 rounded-r-lg hover:scale-110 transition-all"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
