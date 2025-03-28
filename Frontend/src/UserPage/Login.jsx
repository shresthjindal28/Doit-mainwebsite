import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const styles = {
  gradientBackground: {
    background: "linear-gradient(135deg, #f97316, #f59e0b, #ec4899)",
    boxShadow: "inset 0 0 40px rgba(0,0,0,0.1)",
  },
  heading: {
    textShadow:
      "2px 2px 0 rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.15), 0 0 15px rgba(255,255,255,0.5)",
    background: "linear-gradient(to right, #ffffff, #ffe1c4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  paragraph: {
    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  subText: {
    textShadow: "0 1px 2px rgba(0,0,0,0.1)",
  },
  linkButton: {
    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
    backdropFilter: "blur(4px)",
  },
  inputBackground: {
    backgroundColor: "#f3f4f6",
  },
  buttonGradient: {
    background: "linear-gradient(to right, #f59e0b, #f97316, #ef4444)",
  },
};

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
    <div className="min-h-screen flex flex-col md:flex-row text-black">
      {/* Left Side - Welcome Text */}
      <div
        className="flex-1 flex items-center justify-center p-10 md:p-16 overflow-hidden relative"
        style={styles.gradientBackground}
      >
        <div className="absolute w-64 h-64 rounded-full bg-white/10 -top-20 -left-20 blur-xl"></div>
        <div className="absolute w-64 h-64 rounded-full bg-yellow-500/10 bottom-10 right-10 blur-xl"></div>

        <div className="flex-1 flex items-center ml-8 text-white text-center relative z-10">
          <div className="max-w-md mx-auto">
            <h1
              className="text-5xl font-extrabold mb-8 tracking-tight animate-pulse"
              style={styles.heading}
            >
              Welcome Back to DO!T
            </h1>
            <p className="text-white mb-8 text-lg" style={styles.paragraph}>
              Log in to access your account and manage your home service needs
              or provide your professional services to our users.
            </p>
            <p className="text-white/90 text-sm " style={styles.subText}>
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="inline-block px-6 py-2 rounded-full bg-white/20 text-white font-medium transition-all hover:bg-white/30 hover:transform hover:scale-105 underline"
              style={styles.linkButton}
            >
              Create an account
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
              <h2 className="text-3xl font-bold text-center mb-6" style={{color: "#f97316"}}>
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
              <button
                className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition shadow mb-4"
                style={{ backgroundColor: "white" }}
              >
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
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition mb-5"
                    style={styles.inputBackground}
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
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition mb-5"
                    style={styles.inputBackground}
                  />
                </div>

                <div className="flex justify-between items-center text-sm mb-6">
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
                  className="w-full text-white p-3 rounded-lg hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 transition flex items-center justify-center gap-2 shadow-md"
                  style={styles.buttonGradient}
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
      </div>
    </div>
  );
};

export default Login;
