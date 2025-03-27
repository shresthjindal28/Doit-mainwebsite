import React, { useState } from "react";
import Map from "@/pages/Map";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-indigo-800">
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 text-sm md:text-base">
          Have questions or want to work with us? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
          {/* Form Section */}
          <div className="flex justify-center h-full">
            <form 
              onSubmit={handleSubmit}
              className="bg-white shadow-xl rounded-2xl px-5 md:px-8 pt-6 pb-6 w-full h-full border border-gray-100 transition-all hover:shadow-2xl flex flex-col"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700 border-b pb-2 border-gray-200 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Us
              </h2>
              
              <div className="mb-4 flex-grow">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1.5"
                    htmlFor="name"
                  >
                    Name <span className="text-indigo-600">*</span>
                  </label>
                  <input
                    className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1.5"
                    htmlFor="email"
                  >
                    Email <span className="text-indigo-600">*</span>
                  </label>
                  <input
                    className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1.5"
                    htmlFor="message"
                  >
                    Message <span className="text-indigo-600">*</span>
                  </label>
                  <textarea
                    className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-center mb-4">
                  <button
                    className={`relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 w-full md:w-auto shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block animate-pulse">Sending...</span>
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      </>
                    ) : (
                      <>
                        <span className="flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </span>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-4">
                  <div className="flex flex-col items-center p-2 text-center group cursor-pointer">
                    <div className="text-indigo-500 group-hover:text-indigo-700 mb-1.5 bg-indigo-50 p-2 rounded-full transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600 group-hover:text-gray-800">Call Us</p>
                  </div>
                  <div className="flex flex-col items-center p-2 text-center group cursor-pointer">
                    <div className="text-indigo-500 group-hover:text-indigo-700 mb-1.5 bg-indigo-50 p-2 rounded-full transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600 group-hover:text-gray-800">Email</p>
                  </div>
                  <div className="flex flex-col items-center p-2 text-center group cursor-pointer">
                    <div className="text-indigo-500 group-hover:text-indigo-700 mb-1.5 bg-indigo-50 p-2 rounded-full transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600 group-hover:text-gray-800">Office</p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="h-full">
            <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl border-2 border-white transition-all hover:shadow-2xl">
              <Map />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 md:p-4 border-t border-gray-200">
                <h3 className="font-bold text-base text-indigo-800 mb-0.5 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Our Location
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">123 Business Avenue, Tech Park, Innovation City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
