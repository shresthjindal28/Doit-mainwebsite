import express from "express";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, firstname, middlename, lastname, email, phonenumber, password, confirmpassword } = req.body;

    // Validate required fields
    if (!username || !lastname || !email || !password || !confirmpassword) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }

    // Validate phone number if provided
    if (phonenumber && !/^[0-9]{10}$/.test(phonenumber)) {
      return res.status(400).json({ message: "Invalid phone number (10 digits required)" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Check if phone number is already in use
    if (phonenumber) {
      const existingPhoneUser = await User.findOne({ phonenumber });
      if (existingPhoneUser) {
        return res.status(400).json({ message: "Phone number already in use" });
      }
    }

    // Ensure passwords match
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Create and save user
    const newUser = new User({ username, firstname, middlename, lastname, email, phonenumber, password });
    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Set HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(201).json({ message: "User registered successfully!", token, user: newUser });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
