import express from "express";
import jwt from "jsonwebtoken";
import GoogleUser from "../Models/GoogleUser.js";

const router = express.Router();
router.post("/google-signup", async (req, res) => {
  console.log("Received request body:", req.body); // Debugging

  try {
    const { name, email, googleId } = req.body;
    console.log("Extracted name:", name); // Check if name is received

    if (!name || !email || !googleId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    let user = await GoogleUser.findOne({ googleId });

    if (!user) {
      user = new GoogleUser({ name, email, googleId });
      await user.save();
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Strict",
    });

    res.status(201).json({ message: "Google Signup Successful!", user,token });
 
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Google signup failed", error: error.message });
  }
});

export default router