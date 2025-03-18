require("dotenv").config(); // Load environment variables
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000; // ✅ Use dynamic port for Render

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://aniruddh-portfolio-six.vercel.app", // ✅ Fixed CORS URL
    ],
    credentials: true, // Allow cookies and credentials
  })
);
app.use(bodyParser.json());

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ✅ POST route to handle contact form submission
app.post("/contact", (req, res) => {
  console.log("Received Contact Form Submission:", req.body);

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Ensure environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables.");
    return res
      .status(500)
      .json({ message: "Server email configuration error." });
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`, // Set a fixed sender email
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
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
      console.log("Email sent successfully:", info.response);
      return res.status(200).json({ message: "Message sent successfully!" });
    }
  });
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
