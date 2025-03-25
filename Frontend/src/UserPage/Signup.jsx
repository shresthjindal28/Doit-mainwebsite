import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
const Signup = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
  });

  const [message, setMessage] = useState({ text: "", success: false });
  const [loading, setLoading] = useState(false);

  const [googleSignedUp, setGoogleSignedUp] = useState(false);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  console.log(API_URL);
  useEffect(() => {
    if (isAuthenticated && user && !googleSignedUp) {
      console.log("Google signup request triggered.");
      handleGoogleSignup(user);
      setGoogleSignedUp(true); // Prevent multiple API calls
    }
  }, [isAuthenticated, user, googleSignedUp]);
  
  const handleGoogleSignup = async (googleUser) => {
    try {
      const { name, email, sub } = googleUser; // `sub` is Google ID
      const response = await axios.post(
        `${API_URL}/api/google/users/google-signup`,
        {
          name,
          email,
          googleId: sub,
        }
      );
      setMessage({ text: response.data.message, success: true });
    
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Google signup failed.",
        success: false,
      });
   
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const {
      username,
      lastname,
      email,
      phonenumber,
      password,
      confirmpassword,
    } = formData;
    if (!username || !lastname || !email || !password || !confirmpassword) {
      setMessage({
        text: "Please fill in all required fields",
        success: false,
      });
      return false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setMessage({ text: "Invalid email format", success: false });
      return false;
    }
    if (phonenumber && !/^[0-9]{10}$/.test(phonenumber)) {
      setMessage({
        text: "Invalid phone number (10 digits required)",
        success: false,
      });
      return false;
    }
    if (password.length < 8) {
      setMessage({
        text: "Password must be at least 8 characters long",
        success: false,
      });
      return false;
    }
    if (password !== confirmpassword) {
      setMessage({ text: "Passwords do not match", success: false });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/api/users/signup`,
        formData,
        { withCredentials: true }
      );
      setMessage({ text: response.data.message, success: true });

      setFormData({
        username: "",
        firstname: "",
        lastname: "",
        middlename: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Signup failed.",
        success: false,
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    if (message.text) {
      const timeout = setTimeout(() => {
        setMessage({ text: "", success: false });
      }, 2000);

      return () => clearTimeout(timeout); // Cleanup timeout on component unmount or message change
    }
  }, [message.text]); // Runs only when message.text changes

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {message.text && (
          <p
            className={`text-center mb-4 ${
              message.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {message.text}
          </p>
        )}
        <button
          onClick={() => loginWithRedirect()}
          className="w-full p-2 bg-red-500 text-white rounded-md mb-4 hover:bg-red-600"
        >
          Sign in with Google
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="firstname"
            placeholder="Firstname (Optional)"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="middlename"
            placeholder="Middlename (Optional)"
            value={formData.middlename}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded-md ${
              loading
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
