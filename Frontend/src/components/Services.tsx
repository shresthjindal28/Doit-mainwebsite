import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Wrench, Plug, Hammer, PaintBucket, Shield, 
  Home, Brush, Cog, Car, Smartphone, Calendar,
  Shirt, Settings, Lock
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

  return (
    <section id="services" className="min-h-screen bg-gradient-to-b from-emerald-600 to-emerald-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex gap-12">
          {/* Left sidebar with frequently searched services */}
          <div className="hidden lg:block w-64 space-y-2">
            <h3 className="text-white font-semibold mb-4">Most frequently searched service</h3>
            {frequentlySearched.map((service, index) => (
              <div
                key={index}
                className="text-white/80 hover:text-white cursor-pointer text-sm"
              >
                {service}
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="flex-1">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                What you need to Fix<br />Today?
              </h2>
              
              <div className="relative mb-8">
                <Input 
                  type="search" 
                  placeholder="Search services..." 
                  className="w-full bg-white/90 backdrop-blur-sm h-12 pl-4 pr-12 rounded-lg"
                />
                <Button 
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  variant="ghost"
                >
                  <span className="sr-only">Search</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-yellow-300 rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <service.icon size={24} className="text-gray-800" />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-800">{service.title}</h3>
                      <Button 
                        variant="destructive" 
                        className="w-full bg-red-500 hover:bg-red-600 text-white"
                      >
                        Pick Out
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};