import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const websiteTexts = ["🌍 Explore Our Platform"];

  const [buttonText, setButtonText] = useState(websiteTexts[0]);

  useEffect(() => {
    setButtonText(
      websiteTexts[Math.floor(Math.random() * websiteTexts.length)]
    );
  }, []);

  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61574207312609",
    twitter: "https://x.com/d0it_saas",
    instagram: "https://www.instagram.com/d0it2025",
    linkedin: "https://www.linkedin.com/company/d0it",
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className=" text-center md:text-left">
            <h2 className="text-2xl font-bold text-yellow-400">DO!T</h2>
            <p className="mt-4  text-sm md:text-base">
              Your all-in-one solution for connecting with professional service
              providers across all industries.
            </p>
            <div className="mt-3 hidden md:flex space-x-6 text-gray-400">
              <FaFacebookF
                onClick={() => window.open(socialLinks.facebook, "_blank")}
                className="cursor-pointer hover:text-white transition duration-300 transform hover:scale-110"
              />
              <FaTwitter
                onClick={() => window.open(socialLinks.twitter, "_blank")}
                className="cursor-pointer hover:text-white transition duration-300 transform hover:scale-110"
              />
              <FaInstagram
                onClick={() => window.open(socialLinks.instagram, "_blank")}
                className="cursor-pointer hover:text-white transition duration-300 transform hover:scale-110"
              />
              <FaLinkedinIn
                onClick={() => window.open(socialLinks.linkedin, "_blank")}
                className="cursor-pointer hover:text-white transition duration-300 transform hover:scale-110"
              />
            </div>
            <div className="hidden md:block mt-10 text-center md:text-left">
              <button
                onClick={() => (window.location.href = "http://d0lt.com")}
                className="w-full md:w-auto px-6 py-2.5 text-base md:text-lg font-semibold text-yellow-500 bg-transparent border border-white shadow-md shadow-orange-500/50 rounded-full transition duration-300 hover:shadow-orange-400/80 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">{buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center md:items-center">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-center">
              <Link
                to={"/"}
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-400 cursor-pointer text-sm transition-all duration-300"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-400 cursor-pointer text-sm transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                to={"/contact"}
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-400 cursor-pointer text-sm transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to={"/signup"}
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-yellow-400 cursor-pointer text-sm transition-all duration-300"
              >
                Join with us
              </Link>
            </ul>
          </div>

          {/* Contact Section with Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3 mb-6">
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <IoLocationSharp className="text-yellow-400 flex-shrink-0" />
                <span>buenos aires, Argentina</span>
              </li>
              <li className="flex flex-wrap justify-center md:justify-start items-center space-x-2">
                <IoCall className="text-yellow-400 flex-shrink-0" />
                <span>+54 2915738993</span>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <MdEmail className="text-yellow-400 flex-shrink-0" />
                <span>contact@d0lt.com</span>
              </li>
            </ul>

            {/* Newsletter moved here for better organization */}
            <div className="space-y-3 mt-8">
              <p className="text-xs sm:text-sm">
                Stay updated with our latest services and offers
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-md sm:rounded-r-none bg-transparent border-gray-500 border focus:outline-none focus:border-yellow-400 text-sm"
                />
                <button className="px-3 py-2 text-gray-800 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-md sm:rounded-l-none shadow-lg transition-all duration-300 ease-in-out hover:brightness-110 font-medium text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="block md:hidden mt-6 text-center md:text-left">
              <button
                onClick={() => (window.location.href = "http://d0lt.com")}
                className="w-full md:w-auto px-6 py-2.5 text-base md:text-lg font-semibold text-yellow-500 bg-transparent border border-white shadow-md shadow-orange-500/50 rounded-full transition duration-300 hover:shadow-orange-400/80 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">{buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]"></div>
              </button>
            </div>
        <div className="mt-8 md:hidden flex justify-center space-x-6 text-gray-400">
          <FaFacebookF
            onClick={() => window.open(socialLinks.facebook, "_blank")}        
            className="cursor-pointer hover:text-yellow-400 transition duration-300 transform hover:scale-110"         
          />
          <FaTwitter            
            onClick={() => window.open(socialLinks.twitter, "_blank")}
            className="cursor-pointer hover:text-yellow-400 transition duration-300 transform hover:scale-110"          
          />
          <FaInstagram
            onClick={() => window.open(socialLinks.instagram, "_blank")}
            className="cursor-pointer hover:text-yellow-400 transition duration-300 transform hover:scale-110"
          />
          <FaLinkedinIn className="cursor-pointer hover:text-yellow-400 transition duration-300 transform hover:scale-110"
            onClick={() => window.open(socialLinks.linkedin, "_blank")}
            
          />
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
