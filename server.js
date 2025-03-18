require("dotenv").config(); // Load environment variables
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000; // ✅ Dynamic port for Render

// Middleware
app.use(
  cors({
    origin: [
      "https://aniruddh-portfolio-six.vercel.app", // ✅ Only allow deployed frontend
    ],
    credentials: true, // Allow cookies and credentials
  })
);
app.use(bodyParser.json());

// ✅ Health Check Route (To Test if Backend is Running)
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

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // ✅ Ensure these are set in Render
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
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

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
