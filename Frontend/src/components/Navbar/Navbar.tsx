import { useState, useEffect, memo } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";
import Logo from "@/assests/Doitlogo.png";
import { Link } from "react-router-dom";

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { title: "Home", to: "hero" },
    { title: "Services", to: "services" },
    { title: "Enterprise", to: "enterprise" },
    { title: "Blog", to: "blog" },
    { title: "Support", to: "support" },
    { title: "Contact Us", to: "contact" },
  ];

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        { withCredentials: true }
      );
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10">
          {/* Logo - Left Corner */}
          <Link to="/" className="flex items-center">
            <img className="h-10 w-auto" src={Logo} alt="logo" />
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`relative px-2 py-1 font-medium text-sm cursor-pointer group ${
                    scrolled ? 'text-gray-800' : 'text-white/90'
                  }`}
                >
                  <span className="relative z-10">{link.title}</span>
                  <span className="absolute inset-0 bg-red-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0 opacity-0 group-hover:opacity-100"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Auth Buttons - Right Corner */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="relative overflow-hidden group"
              onClick={() => navigate("/Login")}
            >
              <span className={`relative z-10 font-bold text-sm ${
                scrolled ? 'text-red-600' : 'text-white'
              }`}>Log in</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>

            <Button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-red-700 font-medium px-5 py-2 text-sm rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
              onClick={() => navigate("/signup")}
            >
              Join Us - It's Free
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              className={`p-1.5 rounded-md transition-colors ${
                scrolled ? 'text-red-600 hover:bg-red-50' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in flex flex-col space-y-4 bg-white border-t border-gray-100 rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-1 items-center pt-2">
              {navLinks.map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-700 hover:text-red-500 transition-colors w-full text-center py-2.5 text-sm font-medium border-b border-gray-100 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </ScrollLink>
              ))}
            </div>
            
            <div className="flex flex-col gap-3 px-6 pt-2 pb-4">
              <Button
                onClick={() => {
                  navigate("/Login");
                  setIsOpen(false);
                }}
                className="bg-white text-red-600 border border-red-500 hover:bg-red-50 transition-colors text-sm py-2.5 font-medium"
                variant="outline"
              >
                Log in
              </Button>
  
              <Button 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-red-700 text-sm py-2.5 font-medium"
                onClick={() => {
                  navigate("/signup");
                  setIsOpen(false);
                }}
              >
                Join Us - It's Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
