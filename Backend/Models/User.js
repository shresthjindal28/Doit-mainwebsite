import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  firstname: { type: String },
  lastname: { type: String, required: true },
  middlename: { type: String },
  email: { type: String, required: true, unique: true },
  phonenumber: { type: String, unique: true, sparse: true }, // sparse allows multiple null values
  password: { type: String },
  googleId: { type: String, unique: true, sparse: true } // For Google authentication
});

// Hash password before saving, but only if it's set
UserSchema.pre("save", async function (next) {
  if (!this.password || !this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);
export default User;
