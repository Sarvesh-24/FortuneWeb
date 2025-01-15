import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitterSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';




const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white mt-0 mb-0">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <img 
                src='/assets/logo/Logo.webp'
                alt="Fortune Advisorz Logo"
                width={80}
                height={80}
                className="rounded-md"
              />
              <p className="text-3xl ml-6 font-bold">Fortune Advisorz</p>
            </div>

            <p className="mt-6 max-w-md leading-relaxed text-gray-400">
              We empower you with time-based trading mentorship that works in all time frames and market fluctuations, making trading easier and less complex.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a href="https://www.facebook.com/fortuneadvisorz/" target="_blank" rel="noreferrer" className="text-white hover:text-blue-600">
                  <FaFacebookF className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fortune_advisorz/" target="_blank" rel="noreferrer" className="text-white hover:text-instagram">
                  <FaInstagram className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://in.linkedin.com/company/fortuneadvisorz" target="_blank" rel="noreferrer" className="text-white hover:text-blue-600">
                  <FaLinkedin className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://x.com/Parthas08744406" target="_blank" rel="noreferrer" className="text-white hover:text-blue-600">
                  <FaSquareXTwitter className="text-2xl" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCOP5-2W_f62GdQhm4OCy4Ww" target="_blank" rel="noreferrer" className="text-white hover:text-red-600">
                  <FaYoutube className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div>
              <p className="text-lg font-medium">About Us</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="text-white hover:text-blue-600">About</a></li>
                <li><a href="#services" className="text-white hover:text-blue-600">Services</a></li>
                <li><a href="#gallery" className="text-white hover:text-blue-600">Gallery</a></li>
                <li><a href="#team" className="text-white hover:text-blue-600">Team</a></li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-medium">Policies</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><a href="/riskdisclaimer" className="text-white hover:text-blue-600">Risk Disclaimer</a></li>
                <li><a href="/serviceprovide" className="text-white hover:text-blue-600">Services</a></li>
                <li><a href="/termsandconditions" className="text-white hover:text-blue-600">Terms & Conditions</a></li>
                <li><a href="/policies" className="text-white hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="/refundpolicy" className="text-white hover:text-blue-600">Refund Policy</a></li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-medium">Helpful Links</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li><a href="#faq" className="text-white hover:text-blue-600">FAQ</a></li>
                <li><a href="#feedback" className="text-white hover:text-blue-600">Feedback</a></li>
                <li><a href="#book" className="text-white hover:text-blue-600">Book</a></li>
                <li><a href="#event" className="text-white hover:text-blue-600">Event</a></li>
                <li><a href="#contact" className="text-white hover:text-blue-600">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-teal-500 text-3xl" />
                  <span>info@fortuneadvisorz.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-teal-500 text-1xl" />
                  <span>+91 9699613407</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-teal-500 text-4xl" />
                  <span>Corporate Address: 3903, 39th floor, Kohinoor Square, Dadar West 400028</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-teal-500 text-6xl" />
                  <span>Registered Address : M/2, Panchasheel Bldg,
                    5th Floor, Room No. 514,
                    Matunga Labour Camp, Valmiki Road, Mumbai – 400019
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="text-center sm:flex sm:justify-between">
            <p className="text-sm text-gray-400">
              &copy; 2022 Fortune Advisorz. All rights reserved.
            </p>
            <p className="mt-4 sm:mt-0 text-sm text-gray-400">
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