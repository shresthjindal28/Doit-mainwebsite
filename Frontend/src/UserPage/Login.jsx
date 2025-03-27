import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ text: "", success: false });
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/api/getusers/login`,
        formData,
        { withCredentials: true }
      );
      setMessage({ text: "Login successful!", success: true });
    } catch (error) {
      setMessage({
        text: error.response?.data?.message || "Login failed. Try again.",
        success: false,
      });
    }
  };

  useEffect(() => {
    if (message.success) {
      navigate("/dashboard");
    }
  }, [message.success, navigate]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row text-black bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Left Card - Text Content */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-t from-[#e6ab1a] to-orange-500/70 p-10 md:p-16">
        <div className="max-w-md text-white text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Welcome Back to DO!T
          </h1>
          <p
            className="text-white/90 mb-8"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
          >
            Log in to access your account and manage your home service needs or
            provide your professional services to our users.
          </p>
          <p
            className="text-white/80 text-sm mb-2"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Don't have an account?
          </p>
          <Link
            to="/signup"
            className="text-white underline hover:text-white/90 transition-colors"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            Create an account
          </Link>
        </div>
      </div>

      {/* Right Card - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">
            Sign In
          </h2>

          {message.text && (
            <div
              className={`p-3 rounded-lg mb-4 text-center text-sm font-medium ${
                message.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition shadow mb-4">
            <FaGoogle className="text-red-500" />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition bg-gray-100"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition bg-gray-100"
              />
            </div>

            <div className="flex justify-between items-center text-sm mb-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-orange-500" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-orange-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white p-3 rounded-lg hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 transition flex items-center justify-center gap-2 shadow-md"
            >
              <FaSignInAlt />
              <span>Sign In</span>
            </button>

            <p className="text-center text-gray-700 mt-4">
              Don't have an account?
              <Link
                to="/signup"
                className="text-orange-600 hover:underline ml-1"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
