import mongoose from "mongoose";

const GoogleSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Full name from Google
  email: { type: String, required: true, unique: true }, // Google email (unique identifier)
  googleId: { type: String, unique: true, required: true }, // Google ID (unique)
  family_name: { type: String }, // Last name from Google
  profilePic: { type: String }, // Optional: Google profile picture
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

const GoogleUser = mongoose.model("GoogleUser", GoogleSchema);
export default GoogleUser;
