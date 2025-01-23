// import React, { useState } from "react";
// import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     phone: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success(data.message);
//         setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
//       } else {
//         toast.error(data.message || "There was an error submitting the form.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("There was a server error. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div id="contact" className="container mx-auto px-4 py-16 max-w-7xl font-sans text-gray-800">
//       <ToastContainer />

//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact with Our Team</h2>
//         <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
//         <p className="max-w-2xl mx-auto">Get Your Edge In Trading Today</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <p className="mb-8 ">
//             Have questions or need assistance? Reach out to our team for support, inquiries, or collaborations.
//           </p>

//           <div className="flex items-start space-x-4">
//             <FaMapMarkerAlt className="w-5 h-5 text-blue-600 mt-1" />
//             <div>
//               <h3 className="font-bold text-gray-700">Address</h3>
//               <p>3903, 39th floor, Kohinoor Square, Dadar West 400028.</p>
//             </div>
//           </div>

//           <div className="flex items-start space-x-4">
//             <FaPhone className="w-5 h-5 text-blue-600 mt-1" />
//             <div>
//               <h3 className="font-bold text-gray-700">Mobile</h3>
//               <p>+91 9699613407</p>
//             </div>
//           </div>

//           <div className="flex items-start space-x-4">
//             <FaEnvelope className="w-5 h-5 text-blue-600 mt-1" />
//             <div>
//               <h3 className="font-bold text-gray-700">Email</h3>
//               <p>info@fortuneadvisorz.com</p>
//             </div>
//           </div>

//           <div className="flex items-start space-x-4">
//             <FaClock className="w-5 h-5 text-blue-600 mt-1" />
//             <div>
//               <h3 className="font-bold text-gray-700">Working Hours</h3>
//               <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
//             </div>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-sm space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             rows="4"
//             className="w-full p-2 border rounded"
//           ></textarea>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             disabled={isLoading}
//           >
//             {isLoading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     phone: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success(data.message);
//         setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
//       } else {
//         toast.error(data.message || "There was an error submitting the form.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       toast.error("There was a server error. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//   id="contact"
//   className="w-full min-h-screen px-4 py-16 font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
// >
//   <ToastContainer />

//   <div className="w-full max-w-screen-xl mx-auto text-center mb-12">
//     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//       Contact with Our Team
//     </h2>
//     <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
//     <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
//       Get Your Edge In Trading Today
//     </p>
//   </div>

//   <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//     {/* Contact Info Section */}
//     <div className="space-y-6">
//       <p className="text-gray-800 dark:text-gray-300">
//         Have questions or need assistance? Reach out to our team for support,
//         inquiries, or collaborations.
//       </p>

//       <div className="flex items-start space-x-4">
//         <FaMapMarkerAlt className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
//         <div>
//           <h3 className="font-bold text-gray-800 dark:text-gray-200">Address</h3>
//           <p className="text-gray-700 dark:text-gray-400">
//             3903, 39th floor, Kohinoor Square, Dadar West 400028.
//           </p>
//         </div>
//       </div>

//       <div className="flex items-start space-x-4">
//         <FaPhone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
//         <div>
//           <h3 className="font-bold text-gray-800 dark:text-gray-200">Mobile</h3>
//           <p className="text-gray-700 dark:text-gray-400">+91 9699613407</p>
//         </div>
//       </div>

//       <div className="flex items-start space-x-4">
//         <FaEnvelope className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
//         <div>
//           <h3 className="font-bold text-gray-800 dark:text-gray-200">Email</h3>
//           <p className="text-gray-700 dark:text-gray-400">
//             info@fortuneadvisorz.com
//           </p>
//         </div>
//       </div>

//       <div className="flex items-start space-x-4">
//         <FaClock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
//         <div>
//           <h3 className="font-bold text-gray-800 dark:text-gray-200">
//             Working Hours
//           </h3>
//           <p className="text-gray-700 dark:text-gray-400">
//             Mon - Fri: 9:00 AM - 6:00 PM
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Contact Form Section */}
//     <form
//       onSubmit={handleSubmit}
//       className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm space-y-4"
//     >
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//         className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//       />
//       <input
//         type="text"
//         name="phone"
//         placeholder="Phone"
//         value={formData.phone}
//         onChange={handleChange}
//         className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//       />
//       <input
//         type="text"
//         name="subject"
//         placeholder="Subject"
//         value={formData.subject}
//         onChange={handleChange}
//         className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//       />
//       <textarea
//         name="message"
//         placeholder="Message"
//         value={formData.message}
//         onChange={handleChange}
//         rows="4"
//         className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
//       ></textarea>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300"
//         disabled={isLoading}
//       >
//         {isLoading ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   </div>
// </div>

//   );
// };

// export default Contact;

const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  // Handle preflight requests for CORS
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).end();
    return;
  }

  // Allow only POST requests
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { name, email, subject, message, phone } = req.body;

  // Validate input fields
  if (!name || !email || !subject || !message || !phone) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required!" });
  }

  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("EMAIL_USER or EMAIL_PASS environment variables are missing.");
    return res.status(500).json({
      success: false,
      message: "Server configuration error. Please contact support.",
    });
  }

  try {
    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@fortuneadvisorz.com", // Replace with your recipient email
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have a new message from ${name} (${email}, ${phone}):\n\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
      error: error.message, // Provide more error details for debugging
    });
  }
}
