import React, { useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    toast.success("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    });
  };

  return (
    <div
      id="contact"
      className="w-full px-4 py-16 font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <ToastContainer />

      <div className="w-full max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contact with Our Team
        </h2>
        <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Get Your Edge In Trading Today
        </p>
      </div>

      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <p className="text-gray-800 dark:text-gray-300">
            Have questions or need assistance? Reach out to our team for
            support, inquiries, or collaborations.
          </p>

          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">
                Address
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                3903, 39th floor, Kohinoor Square, Dadar West 400028.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">
                Mobile
              </h3>
              <p className="text-gray-700 dark:text-gray-400">+91 9699613407</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaEnvelope className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">
                Email
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                info@fortuneadvisorz.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaClock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">
                Working Hours
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSd5-Ci8MFEyRAri9FOwNpUhDywT0lwWbBWuDk1f1rWxMxMMAQ/formResponse"
          method="POST"
          target="_blank"
          onSubmit={handleFormSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm space-y-4"
        >
          <input
            type="text"
            name="entry.1094118904"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          />
          <input
            type="email"
            name="entry.451516050"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          />
          <input
            type="text"
            name="entry.1257855407"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <input
            type="text"
            name="entry.27431264"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <textarea
            name="entry.1162590133"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
