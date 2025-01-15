const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(express.json());

app.use(cors({}));



// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message, phone } = req.body;

  try {
    // Validate fields
    if (!name || !email || !subject || !message || !phone) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "info@fortuneadvisorz.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `You have a new message from ${name} (${email}, ${phone}):\n\n${message}`,
    };

    // Send mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

