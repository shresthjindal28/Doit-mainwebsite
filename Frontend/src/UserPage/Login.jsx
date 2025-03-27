import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ text: "", success: false });
  const navigate = useNavigate();

 // const { loginWithRedirect, user, isAuthenticated } = useAuth0();

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

  // Add useEffect for navigation
  useEffect(() => {
    if (message.success) {
      navigate('/dashboard');
    }
  }, [message.success, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {message.text && (
          <p
            className={`text-center mb-4 ${
              message.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {message.text}
          </p>
        )}
        
        {/* Google Login Button */}
        <button
          onClick={() => loginWithRedirect()}
          className="w-full p-2 bg-red-500 text-white rounded-md mb-4 hover:bg-red-600"
        >
          Login with Google
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
