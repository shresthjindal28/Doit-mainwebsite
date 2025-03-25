import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./Routes/Auth.js"; // If folder name is lowercase
import LoginRoute from "./Routes/Login.js";
import Logout from "./Routes/Logout.js"
import Google from './Routes/Google.js'

import cookieParser from "cookie-parser";
// import GoogleLoginRoute from "./Routes/GoogleLogin.js"
dotenv.config();
const app = express();


const frontendurl=process.env.FRONTEND_URL || "http://localhost:8080"
app.use(
  cors({
    origin:frontendurl,  // Replace with your frontend URL
    credentials: true,  // Allow cookies & authorization headers
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
app.use("/api/users", authRoutes)
app.use('/api/google/users/',Google)
app.use("/api/getusers", LoginRoute);
// app.use("/api/google/users/google-login",GoogleLoginRoute);
app.use('/api/users',Logout)
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
