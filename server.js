require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from your React frontend
    credentials: true, // Allow cookies and credentials
  })
);
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format

// POST route to handle contact form submission
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Ensure all required fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Create a Nodemailer transporter using your email service provider
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use a different email service
    auth: {
      user: process.env.EMAIL_USER, // Load email from environment variables
      pass: process.env.EMAIL_PASS, // Load password from environment variables
    },
  });

  // Email options
  const mailOptions = {
    from: email, // The email address provided in the form
    to: process.env.EMAIL_USER, // Your email address where you'll receive submissions
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ message: "Failed to send message. Try again later." });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ message: "Message sent successfully!" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
