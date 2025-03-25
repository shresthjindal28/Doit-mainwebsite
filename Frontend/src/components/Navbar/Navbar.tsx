import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/Navbar/SearchBar";  
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()


 async function handlelogout(){
   try{
    await axios.post('http://localhost:5000/api/users/logout',{},{withCredentials:true})
    console.log("logout success")
    window.location.href = "/login"; // Redirect to login page
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
  
  return (
    <nav className="fixed w-full bg-white/5 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo with added space */}
          <a href="/" className="text-xl font-bold text-white mr-8">DOIT</a>
         
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-grow">
            {/* Left-side Links */}
            <div className="flex space-x-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
            </div>

            {/* Search Bar */}
            <div className="flex items-center w-96">
              <SearchBar />
            </div>

            {/* Right-side Links */}
            <div className="flex space-x-8 ml-auto items-center">
              <a href="#" className="text-white/90 hover:text-white transition-colors">Enterprise</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">Support</a>
             
            </div>

            {/* Contact Us and Log In aligned in same line with a gap */}
            <div className="flex items-center space-x-4 ml-auto">
              <a href="#" className="text-white/90 hover:text-white transition-colors">Contact Us</a>
  
              <a href="#" className="text-red-700 hover:text-red-800 transition-colors underline" onClick={()=>navigate("/Login")}>Log in</a>
              <Button className="bg-red-400 hover:bg-yellow-500 text-white" onClick={handlelogout}>
              Log Out
            </Button>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-red-500" onClick={()=>navigate("/signup")}>
                Join Us - It's Free
              </Button>
            </div>

            <Button variant="ghost" className="text-white" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#services" className="text-white/90 hover:text-white transition-colors">Services</a>
            <SearchBar />
            <a href="#" className="text-white/90 hover:text-white transition-colors">Enterprise</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Support</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="text-red-700 hover:text-red-800 transition-colors underline">Log in</a>

            <Button className="bg-yellow-400 hover:bg-yellow-500 text-red-500">
              Join Us - It's Free
            </Button>
            

            <Button variant="ghost" className="text-white w-full">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart
            </Button>

          
          </div>
        </div>
      )}
    </nav>
  );
};
