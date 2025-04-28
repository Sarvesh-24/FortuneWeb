import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube,  } from 'react-icons/fa';
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaTelegramPlane,FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


// import { FaSquareXTwitter } from 'react-icons/fa6';




const Footer = () => {
  return (
//    <footer className="bg-black dark:bg-gray-900 text-white mt-0 mb-0">
//   <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
//     <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//       {/* Logo and Intro Section */}
//       <div>
//         <div className="flex items-center">
//           <img 
//             src='/assets/logo/Footer Logo.png'
//             alt="Fortune Advisorz Logo"
//             width={80}
//             height={80}
//             className="rounded-md"
//           />
//           <p className="text-3xl ml-6 font-bold">Fortune Advisorz</p>
//         </div>
//         <p className="mt-6 max-w-md leading-relaxed text-gray-400">
//           We empower you with time-based trading mentorship that works in all time frames and market fluctuations, making trading easier and less complex.
//         </p>
//         <ul className="mt-8 flex gap-4">
//           <li>
//             <a href="https://www.facebook.com/fortuneadvisorz/" target="_blank" rel="noreferrer" className="text-white hover:text-blue-600">
//               <FaFacebookF className="text-2xl" />
//             </a>
//           </li>
//           <li>
//             <a href="https://www.instagram.com/fortune_advisorz/" target="_blank" rel="noreferrer" className="text-white hover:text-pink-500">
//               <FaInstagram className="text-2xl" />
//             </a>
//           </li>
//           <li>
//             <a href="https://in.linkedin.com/company/fortuneadvisorz" target="_blank" rel="noreferrer" className="text-white hover:text-blue-600">
//               <FaLinkedin className="text-2xl" />
//             </a>
//           </li>
//           <li>
//             <a href="https://x.com/Parthas08744406" target="_blank" rel="noreferrer" className="text-white hover:text-blue-600">
//               <FaSquareXTwitter className="text-2xl" />
//             </a>
//           </li>
//           <li>
//             <a href="https://www.youtube.com/channel/UCOP5-2W_f62GdQhm4OCy4Ww" target="_blank" rel="noreferrer" className="text-white hover:text-red-600">
//               <FaYoutube className="text-2xl" />
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Links Section */}
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
//         {/* About Us */}
//         <div>
//           <p className="text-lg font-medium text-white">About Us</p>
//           <ul className="mt-4 space-y-4 text-sm text-gray-400">
//             <li><a href="#about" className="text-white hover:text-blue-600">About</a></li>
//             <li><a href="#services" className="text-white hover:text-blue-600">Services</a></li>
//             <li><a href="#gallery" className="text-white hover:text-blue-600">Gallery</a></li>
//             <li><a href="#team" className="text-white hover:text-blue-600">Team</a></li>
//           </ul>
//         </div>

//         {/* Policies */}
//         <div>
//           <p className="text-lg font-medium text-white">Policies</p>
//           <ul className="mt-4 space-y-4 text-sm text-gray-400">
//             <li><a href="/riskdisclaimer" className="text-white hover:text-blue-600">Risk Disclaimer</a></li>
//             <li><a href="/serviceprovide" className="text-white hover:text-blue-600">Services</a></li>
//             <li><a href="/termsandconditions" className="text-white hover:text-blue-600">Terms & Conditions</a></li>
//             <li><a href="/policies" className="text-white hover:text-blue-600">Privacy Policy</a></li>
//             <li><a href="/refundpolicy" className="text-white hover:text-blue-600">Refund Policy</a></li>
//           </ul>
//         </div>

//         {/* Helpful Links */}
        // <div>
        //   <p className="text-lg font-medium text-white">Helpful Links</p>
        //   <ul className="mt-4 space-y-4 text-sm text-gray-400">
        //     <li><a href="#faq" className="text-white hover:text-blue-600">FAQ</a></li>
        //     <li><a href="#feedback" className="text-white hover:text-blue-600">Feedback</a></li>
        //     <li><a href="#book" className="text-white hover:text-blue-600">Book</a></li>
        //     <li><a href="#event" className="text-white hover:text-blue-600">Event</a></li>
        //     <li><a href="#contact" className="text-white hover:text-blue-600">Contact Us</a></li>
        //   </ul>
        // </div>

//         {/* Contact Us */}
    //     <div>
    //       <p className="text-lg font-medium text-white">Contact Us</p>
    //       <ul className="mt-4 space-y-4 text-sm text-gray-400">
    //         <li className="flex items-center gap-4">
    //           <FaEnvelope className="text-teal-500 text-3xl" />
    //           <span>info@fortuneadvisorz.com</span>
    //         </li>
    //         <li className="flex items-center gap-4">
    //           <FaPhone className="text-teal-500 text-xl" />
    //           <span>+91 9699613407</span>
    //         </li>
    //         <li className="flex items-start gap-4">
    //           <FaMapMarkerAlt className="text-teal-500 text-3xl" />
    //           <span>Corporate Address: 3903, 39th floor, Kohinoor Square, Dadar West 400028</span>
    //         </li>
    //         <li className="flex items-start gap-4">
    //           <FaMapMarkerAlt className="text-teal-500 text-3xl" />
    //           <span>Registered Address: M/2, Panchasheel Bldg, 5th Floor, Room No. 514, Matunga Labour Camp, Valmiki Road, Mumbai – 400019</span>
    //         </li>
    //         <li className="flex items-start gap-4">
    //           <FaMapMarkerAlt className="text-teal-500 text-3xl" />
    //           <span>Branch Office: 123, First Floor, Fortune Towers, Andheri East, Mumbai – 400069</span>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

//     {/* Footer Bottom */}
    // <div className="mt-12 border-t border-gray-700 pt-6">
    //   <div className="text-center sm:flex sm:justify-between">
    //     <p className="text-sm text-gray-400">
    //       &copy; 2022 Fortune Advisorz. All rights reserved.
    //     </p>
    //     <p className="mt-4 sm:mt-0 text-sm text-gray-400">
    //       <a href="/termsAndConditions" className="hover:text-teal-500">Terms & Conditions</a> · 
    //       <a href="/policies" className="hover:text-teal-500 ml-2">Privacy Policy</a>
    //     </p>
    //   </div>
    // </div>
//   </div>
// </footer>

<footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
          {/* Light Mode Logo */}
          <img 
            src="/assets/logo/Footer Logo.png"
            alt="Fortune Advisorz Logo"
            width={80}
            height={80}
            className="rounded-md block dark:hidden"
          />

          {/* Dark Mode Logo */}
          <img 
            src="/assets/logo/Fortune-Advisorz-logo.png"
            alt="Fortune Advisorz Logo Dark"
            width={80}
            height={80}
            className="rounded-md hidden dark:block"
          />
        <p className="max-w-xs mt-4 leading-relaxed text-gray-400 dark:text-gray-300">
          We empower you with time-based trading mentorship that works in all time frames and market fluctuations, making trading easier and less complex. 
        </p>

        <div className="flex mt-8 space-x-6 text-gray-600 dark:text-gray-400">
          <a className="hover:text-blue-500 dark:hover:text-gray-200" href="https://www.facebook.com/fortuneadvisorz/" target="_blank" rel="noreferrer">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a className="hover:text-pink-500 dark:hover:text-gray-200" href="https://www.instagram.com/fortune_advisorz/" target="_blank" rel="noreferrer">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a className="hover:text-blue-400 dark:hover:text-gray-200" href="https://x.com/Parthas08744406" target="_blank" rel="noreferrer">
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a className="hover:text-blue-600 dark:hover:text-gray-200" href="https://in.linkedin.com/company/fortuneadvisorz" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
          <a className="hover:text-red-600 dark:hover:text-gray-200" href="https://www.youtube.com/channel/UCOP5-2W_f62GdQhm4OCy4Ww" target="_blank" rel="noreferrer">
            <FaYoutube className="w-6 h-6" />
          </a>
          <a className="hover:text-blue-400 dark:hover:text-gray-200" href="https://t.me/FortuneSignals369" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="w-6 h-6" />
          </a>
        </div>
      </div>


     
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        {/* About Us Section */}
        <div>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-300">About Us</p>
          <nav className="flex flex-col mt-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <a className="hover:text-blue-600 dark:hover:text-gray-200" href="/#about">About</a>
            <a className="hover:text-blue-600 dark:hover:text-gray-200" href="/#services">Services</a>
            <a className="hover:text-blue-600 dark:hover:text-gray-200" href="/#gallery">Gallery</a>
            <a className="hover:text-blue-600 dark:hover:text-gray-200" href="/#team">Meet our Team</a>
          </nav>
        </div>

        {/* Policies Section */}
        <div>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Policies</p>
          <ul className="mt-4 space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="/riskdisclaimer" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Risk Disclaimer</a></li>
            <li><a href="/serviceprovide" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Services</a></li>
            <li><a href="/termsandconditions" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Terms & Conditions</a></li>
            <li><a href="/policies" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Privacy Policy</a></li>
            <li><a href="/refundpolicy" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Refund Policy</a></li>
          </ul>
        </div>

        {/* Helpful Links Section */}
        <div>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Helpful Links</p>
          <ul className="mt-4 space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li><a href="/#faq" className="text-blue-600 dark:text-blue-400 hover:opacity-75">FAQ</a></li>
            <li><a href="/#feedback" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Feedback</a></li>
            <li><a href="/#book" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Book</a></li>
            <li><a href="/#event" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Event</a></li>
            <li><a href="/#contact" className="text-blue-600 dark:text-blue-400 hover:opacity-75">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Contact Us</p>
          <ul className="flex flex-col mt-4 space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-center">
              <FaEnvelope className="text-teal-500 text-xl min-w-[24px] mr-3" />
              <span className="text-blue-600 dark:text-blue-400">info@fortuneadvisorz.com</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-teal-500 text-xl min-w-[24px] mr-3" />
              <span className="text-blue-600 dark:text-blue-400">+91 9699613407</span>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-teal-500 text-xl min-w-[24px] mr-3 mt-1" />
              <span className="text-blue-600 dark:text-blue-400">
                Registered Address: M/2, Panchasheel Bldg, 5th Floor, Room No. 514, Matunga Labour Camp, Valmiki Road, Mumbai – 400019
              </span>
            </li>
            
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-teal-500 text-xl min-w-[24px] mr-3 mt-1" />
              <span className="text-blue-600 dark:text-blue-400">
                Corporate Address: 3903, 39th Floor, Kohinoor Square, Dadar West, 400028
              </span>
            </li>
          
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-teal-500 text-xl min-w-[24px] mr-3 mt-1" />
              <span className="text-blue-600 dark:text-blue-400">
                Branch Office: 1207/343, 9th main,
                Sector 7, HSR Layout, Bangalore - 560102
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-700 pt-6">
  <div className="text-center sm:flex sm:justify-between">
    <div>
      <p className="text-sm text-gray-400 dark:text-gray-500">
        &copy; 2025 Fortune Advisorz. All rights reserved.
      </p>
      <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
        Designed & Managed by <span className="text-blue-500 font-semibold">FORTUNE NOVEM</span>
      </p>
    </div>
    <p className="mt-4 sm:mt-0 text-sm text-gray-400 dark:text-gray-500">
      <a href="/termsAndConditions" className="hover:text-teal-500">Terms & Conditions</a> · 
      <a href="/policies" className="hover:text-teal-500 ml-2">Privacy Policy</a>
    </p>
  </div>
</div>


  </div>
</footer>


  );
};

export default Footer;

