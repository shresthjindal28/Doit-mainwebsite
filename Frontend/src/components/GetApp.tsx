import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export const GetApp = () => {
  return (
    <div className="bg-black h-[40vh] w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left Content - Text */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#4CD787]">
              GET STARTED WITH DOIT! TODAY
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-2 max-w-xl text-gray-300">
              Download the app now and simplify your home maintenance with just a few taps!
            </p>
          </motion.div>

          {/* Right Content - Download Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-start md:justify-end items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              {/* Laser border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4CD787] via-green-400 to-emerald-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              
              <Button 
                variant="outline" 
                className="relative h-14 sm:h-16 w-48 sm:w-52 px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-black border-none shadow-lg transition-all duration-300 overflow-hidden z-10 rounded-lg"
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              >
                <FaGooglePlay size={24} className="mr-3" />
                <div className="text-left">
                  <div className="text-xs font-semibold mb-1">GET IT ON</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              {/* Laser border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-[#4CD787] rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              
              <Button 
                variant="outline" 
                className="relative h-14 sm:h-16 w-48 sm:w-52 px-5 py-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-green-500 hover:to-emerald-600 text-black border-none shadow-lg transition-all duration-300 overflow-hidden z-10 rounded-lg"
                onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
              >
                <FaApple size={28} className="mr-3" />
                <div className="text-left">
                  <div className="text-xs font-semibold mb-1">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetApp;