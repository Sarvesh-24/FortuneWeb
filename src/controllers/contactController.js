const nodemailer = require('nodemailer');
require('dotenv').config();

const sendContactEmail = (req, res) => {
  const { name, email, subject, message, phone } = req.body;

  // Check if all fields are filled
  if (!name || !email || !subject || !message || !phone) {
    return res.status(400).send('All fields are required!');
  }

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: `Message from ${name} (${phone}):\n\n${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Server error. Please try again later.');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully!');
  });
};

module.exports = { sendContactEmail };
