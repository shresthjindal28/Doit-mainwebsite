import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/Navbar/SearchBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Services", href: "#services" },
    { title: "Enterprise", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Support", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  async function handlelogout() {
    try {
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        { withCredentials: true }
      );
      console.log("logout success");
      window.location.href = "/login"; // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <nav className="fixed w-full bg-white/5 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with added space */}
          <a href="/" className="text-xl font-bold text-white mr-6  ">
            DOIT
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 flex-grow">
            {/* Left-side Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white/90 hover:text-white transition-colors"
              >
                Services
              </a>
            </div>

            {/* Search Bar */}
            <div className="flex items-center w-[22vw]">
              <SearchBar onFilterChange={(category) => {
                // Handle the category change here
                console.log('Selected category:', category);
              }} />
            </div>

            {/* Right-side Links */}
            <div className="flex space-x-8 ml-auto items-center">
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors"
              >
                Enterprise
              </a>
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors"
              >
                Support
              </a>
            </div>

            {/* Contact Us and Log In aligned in same line with a gap */}
            <div className="flex items-center space-x-4 ml-auto">
              <a
                href="#"
                className="text-white/90 hover:text-white transition-colors"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="text-red-700 hover:text-red-800 transition-colors underline"
                onClick={() => navigate("/Login")}
              >
                Log in
              </a>

              <Button
                className="bg-yellow-400 hover:bg-yellow-500 text-red-500"
                onClick={() => navigate("/signup")}
              >
                Join Us - It's Free
              </Button>
              <Button
                className="bg-yellow-500 hover:bg-yellow-500 text-black"
                onClick={() => navigate("/bid")}
              >Place your Bid</Button>

              {/* <Button
                className="bg-red-400 hover:bg-yellow-500 text-white"
                onClick={handlelogout}
              >
                Log Out
              </Button> */}
            </div>
            {/* should be visible only when user is logined */}
            {/* <Button variant="ghost" className="text-white" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button> */}
          </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        </div>

        {/* Mobile Menu Button */}
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 animate-fade-in flex flex-col items-center">
          <div className="flex flex-col space-y-4 items-start px-5 ">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors w-[60vw] rounded-full px-4 py-1 bg-red-500 "
              >
                {link.title}
              </a>
            ))}
          </div>
              <div className=" flex gap-5 mt-7">
              <Button
                onClick={() => navigate("/Login")}
                className="bg-yellow-400 hover:bg-yellow-500 text-red-500 transition-colors underline"
              >
                Log in
              </Button>
  
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-red-500">
                Join Us - It's Free
              </Button>
              </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
