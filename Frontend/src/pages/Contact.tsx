import React, { useState } from "react";
import axios from "axios";
import Map from "@/pages/Map";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSuccessMessage("");
    
    try {
      // Send the form data directly - backend will extract name, email and message
      const response = await axios.post(`${API_URL}/send-email`, formState);
      if (response.data.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error details:", error);
      // @ts-ignore
      const errorMsg = error.response?.data?.error || "Error sending message. Please check your network and try again.";
      setErrorMessage(errorMsg);
    }
    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-indigo-800">Get In Touch</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 text-sm md:text-base">
          Have questions or want to work with us? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
          <div className="flex justify-center h-full">
            <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-2xl px-5 md:px-8 pt-6 pb-6 w-full h-full border border-gray-100 flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Contact Us</h2>
              {successMessage && <p className="text-green-600 text-sm mb-3">{successMessage}</p>}
              {errorMessage && <p className="text-red-600 text-sm mb-3">{errorMessage}</p>}
              
              <label className="block text-gray-700 text-sm font-medium mb-1.5">Name *</label>
              <input className="border rounded-lg w-full py-2.5 px-4 mb-3" id="name" type="text" placeholder="Your Name" value={formState.name} onChange={handleChange} required />
              
              <label className="block text-gray-700 text-sm font-medium mb-1.5">Email *</label>
              <input className="border rounded-lg w-full py-2.5 px-4 mb-3" id="email" type="email" placeholder="Your Email" value={formState.email} onChange={handleChange} required />
              
              <label className="block text-gray-700 text-sm font-medium mb-1.5">Message *</label>
              <textarea className="border rounded-lg w-full py-2.5 px-4 mb-5" id="message" placeholder="How can we help you?" rows={4} value={formState.message} onChange={handleChange} required></textarea>
              
              <button className={`bg-indigo-600 text-white py-2.5 px-6 rounded-lg w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'}`} type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          <div className="h-full">
            <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl border-2 border-white">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
