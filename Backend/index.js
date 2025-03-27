import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./Routes/Auth.js"; // If folder name is lowercase
import LoginRoute from "./Routes/Login.js";
import Logout from "./Routes/Logout.js";
import Google from "./Routes/Google.js";
import nodemailer from "nodemailer";
import cookieParser from "cookie-parser";
// import GoogleLoginRoute from "./Routes/GoogleLogin.js"
dotenv.config();
const app = express();

const frontendurl = process.env.FRONTEND_URL || "http://localhost:8080";
app.use(
  cors({
    origin: frontendurl, // Replace with your frontend URL
    credentials: true, // Allow cookies & authorization headers
  })
);
// app.use(passport.initialize());
app.use(express.json());
app.use(cookieParser());
// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Use Routes
app.use("/api/users", authRoutes);
app.use("/api/google/users/", Google);
app.use("/api/getusers", LoginRoute);
// app.use("/api/google/users/google-login",GoogleLoginRoute);
app.use("/api/users", Logout);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const transporter = nodemailer.createTransport({
  service: "gmail", // or use a custom SMTP provider
  auth: {
    user: process.env.SMTP_USER, // Your email
    pass: process.env.SMTP_PASS, // App password or SMTP password
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Email request received:", req.body);

  if (!email) {
    return res.status(400).json({ success: false, error: "Email address is required" });
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER, // Send to a configured recipient or fallback to your own email
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
