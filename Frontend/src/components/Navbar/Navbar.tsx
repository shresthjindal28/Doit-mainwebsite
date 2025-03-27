import { useState, useEffect, useCallback, memo } from "react";
import { Menu, X, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/Navbar/SearchBar";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";
import Logo from "@/assests/Doitlogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img className="h-9 w-auto" src={Logo} alt="logo" />
            
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 flex-grow">
            {/* Left-side Links */}
            <div className="flex space-x-6 ml-8">
              {navLinks.slice(0, 3).map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`relative hover:text-red-500 transition-colors cursor-pointer font-medium text-sm group ${
                    scrolled ? 'text-gray-800' : 'text-white/90'
                  }`}
                >
                  {link.title}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex items-center w-[30vw] mx-auto">
              <SearchBar onFilterChange={(category) => {
                console.log('Selected category:', category);
              }} />
            </div>

            {/* Right-side Links */}
            <div className="flex space-x-6 ml-auto items-center">
              {navLinks.slice(3).map((link, index) => (
                <ScrollLink
                  key={index}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`relative hover:text-red-500 transition-colors cursor-pointer font-medium text-sm group ${
                    scrolled ? 'text-gray-800' : 'text-white/90'
                  }`}
                >
                  {link.title}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              ))}

              <div className="flex items-center space-x-4">
                {/* <button className="relative">
                  <ShoppingCart className={`h-5 w-5 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-red-500 transition-colors`} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </button> */}

                <div className="flex items-center gap-4">
                  <button
                    className={`flex underline items-center gap-1.5 font-medium text-sm ${
                      scrolled ? 'text-red-600' : 'text-white'
                    } hover:text-red-400 transition-colors`}
                    onClick={() => navigate("/Login")}
                  >
                    <User className="h-4 w-4" />
                    Log in
                  </button>

                  <Button
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-red-700 font-medium px-4 py-2 text-sm rounded-full transition-all hover:shadow-md"
                    onClick={() => navigate("/signup")}
                  >
                    Join Us - It's Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            
            
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
            {/* Search in mobile view */}
            <div className="px-4 w-full">
              <SearchBar onFilterChange={(category) => {
                console.log('Selected category:', category);
              }} />
            </div>
            
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
};

export default Navbar;
