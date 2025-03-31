import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Wrench, Plug, Hammer, PaintBucket, Shield, 
  Home, Brush, Cog, Car, Smartphone, Calendar,
  Shirt, Settings, Lock, Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Images from public directory can be referenced directly by path
const houseImage = "/house.png"; // Assuming house.png is in the public directory


const services = [
  { icon: Home, title: "CLEANING SERVICE", description: "Professional cleaning" },
  { icon: Wrench, title: "PLUMBING SERVICES", description: "Expert plumbing" },
  { icon: Plug, title: "ELECTRICAL SERVICES", description: "24/7 electrical" },
  { icon: Hammer, title: "CARPENTRY SERVICES", description: "Quality carpentry" },
  { icon: Wrench, title: "HOME APPLIANCE REPAIR", description: "Appliance fixes" },
  { icon: Brush, title: "PAINTING SERVICES", description: "Professional painting" },
  { icon: Cog, title: "PEST CONTROL", description: "Pest elimination" },
  { icon: Home, title: "GARDENING & LANDSCAPING", description: "Garden care" },
  { icon: Settings, title: "HOME RENOVATION SERVICES", description: "Full renovation" },
  { icon: Cog, title: "AC & HVAC SERVICES", description: "Climate control" },
  { icon: Wrench, title: "HANDYMAN SERVICES", description: "General repairs" },
  { icon: Lock, title: "HOME SECURITY SERVICES", description: "Security systems" },
  { icon: Car, title: "MOVING & RELOCATION", description: "Moving assistance" },
  { icon: Shirt, title: "LAUNDRY SERVICES", description: "Laundry & dry clean" },
  { icon: Car, title: "VEHICLE SERVICES", description: "Auto maintenance" },
  { icon: Smartphone, title: "SMART HOME SERVICES", description: "Home automation" },
  { icon: Settings, title: "IT & TECHNICAL SUPPORT", description: "Tech support" },
  { icon: Calendar, title: "EVENT SUPPORT SERVICES", description: "Event planning" },
  { icon: Settings, title: "SPECIALIZED SERVICES", description: "Custom solutions" },
  { icon: Shield, title: "WELLNESS & LIFESTYLE", description: "Health & wellness" }
];

const frequentlySearched = [
  "Cleaning Service",
  "Plumbing Service",
  "AC & HVAC Service",
  "Electrical Service",
  "Appliance Repair",
  "Painting Service",
  "Moving Service",
  "Pest Control",
  "Electrical Service",
  "Plumbing Service"
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter(service => 
    searchQuery === "" || service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="services" className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-200 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero section with heading and 3D model side by side */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 relative">
        <div className="lg:w-1/2 flex justify-center">
            <motion.img
              src={houseImage}
              alt="House Services"
              className="max-w-lg rounded-lg "
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="lg:w-1/2 z-10 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-amber-900 leading-tight mb-6">
                What do you need to <span className="text-orange-500">Fix Today?</span>
              </h1>
              <p className="text-xl text-amber-800 max-w-lg mb-8">
                Professional services at your fingertips. Find the right expert for any job around your home.
              </p>
              
              <div className="relative w-full max-w-lg">
                <Input 
                  type="search" 
                  placeholder="Search services..." 
                  className="w-full bg-white/90 backdrop-blur-sm h-14 pl-12 pr-4 rounded-full shadow-lg border-2 border-amber-200 focus:border-orange-400 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-amber-500" size={20} />
              </div>
            </motion.div>
          </div>
          
          {/* Image on the right side */}
          
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left sidebar with frequently searched services */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block w-64"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg sticky top-20">
              <h3 className="text-amber-900 font-semibold text-lg mb-4 border-b-2 border-amber-200 pb-2">
                Popular Services
              </h3>
              <div className="space-y-2">
                {frequentlySearched.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-amber-800 hover:text-orange-500 cursor-pointer text-sm transition-colors duration-300 p-2 hover:bg-amber-50 rounded-lg"
                    onClick={() => setSearchQuery(service)}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-amber-400"></div>
                    {service}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main services grid */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-amber-900 mb-6 border-b border-amber-200 pb-3">
                All Services
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-64" // Added flex and h-64
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    onClick={() => setActiveIndex(index)}
                    layout
                  >
                    <div className="flex flex-col items-center text-center p-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-md mb-3">
                        {service.icon && <service.icon size={24} className="text-white" />}
                      </div>
                      <h3 className="font-semibold text-sm text-amber-900 mb-2">{service.title}</h3>
                      <p className="text-xs text-amber-700 mb-3">{service.description}</p>
                    </div>
                    <Button 
                      variant="default" 
                      className="w-full bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white border-none"
                      size="sm"
                    >
                      Book Now
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};