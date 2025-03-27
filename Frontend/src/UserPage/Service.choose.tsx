import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { allServices, serviceCategories } from '@/data/allServices';
import { services } from '@/data/services';
import SearchBar from "@/components/Navbar/SearchBar";
import gsap from "gsap";
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_BACKEND_URL; // adjust this to match your API URL

export const ServiceChoose = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubservices, setSelectedSubservices] = useState([]);
  const scrollRef = useRef(null);

  const isAuthenticated = async () => {
    const token = Cookies.get('token');
    console.log('Token:', token);
    
    try {
      const response = await axios.post(
        `${API_URL}/api/getusers/login`,
        {},
        { 
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      return response.status === 200;
    } catch (error) {
      console.error('Authentication check failed:', error);
      return false;
    }
  };

  const handleSubserviceToggle = (subservice) => {
    setSelectedSubservices((prevSelected) => {
      if (prevSelected.some(item => item.id === subservice.id)) {
        return prevSelected.filter(item => item.id !== subservice.id);
      } else {
        return [...prevSelected, subservice];
      }
    });
  };

  const handleAddToCart = async () => {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      navigate('/login');
      return;
    }
    
    console.log('selectedSubservices:', selectedSubservices);
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItems = selectedSubservices.map(subservice => ({
      ...subservice,
      price: 499, // Adding a default price since it's not in the data structure
      serviceParent: selectedService.name
    }));
    
    localStorage.setItem('cart', JSON.stringify([...cartItems, ...newItems]));
    setIsPopupOpen(false);
    setSelectedSubservices([]);
  };

  const handleDirectAddToCart = (service) => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = {
      id: service.id,
      name: service.name,
      price: service.price,
      serviceParent: service.name
    };
    
    localStorage.setItem('cart', JSON.stringify([...cartItems, newItem]));
  };

  const getSubservicesForService = (serviceName) => {
    const service = allServices.find(s => s.name === serviceName);
    return service?.subServices || []; // Changed from subservices to subServices to match data structure
  };

  useEffect(() => {
    const element = scrollRef.current;
    
    if (selectedCategory === "All") {
      gsap.to(element, {
        x: "-100%",
        duration: 100,
        ease: "none",
        repeat: -1,
      });
    } else {
      gsap.killTweensOf(element);
      gsap.set(element, { x: 0 });
    }
  }, [selectedCategory]);

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.name === selectedCategory);

  return (
    <div className="min-h-screen bg-transparent py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-8 px-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
              Choose Your Service
            </h1>
            <p className="text-yellow-100 text-center mb-6">
              Select from our wide range of professional services
            </p>
            
            {/* Search Bar Section */}
            <div className="max-w-2xl mx-auto">
              <SearchBar onFilterChange={setSelectedCategory} />
            </div>
          </div>
          
          {/* Services Section */}
          <div className="p-6 bg-gradient-to-r from-yellow-400 to-yellow-500">
            <div className={`relative w-full ${selectedCategory === "All" ? "overflow-hidden" : "overflow-x-auto"}`}>
              <div 
                ref={scrollRef}
                className={`flex gap-6 ${selectedCategory === "All" ? "w-max" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}
              >
                {(selectedCategory === "All" ? [...filteredServices, ...filteredServices] : filteredServices).map((service, index) => (
                  <div
                    key={`${service.id}-${index}`}
                    className={`bg-white h-[50vh] rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100
                      ${selectedCategory !== "All" ? "w-full" : "w-[280px]"} h-full flex flex-col`}
                  >
                    <div className="p-6 flex flex-col items-center justify-between h-full">
                      <div className="flex flex-col items-center w-full">
                        <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                          <img
                            src={service.icon || "/default-service-icon.png"}
                            alt={service.name}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                          {service.name}
                        </h3>
                        <p className="text-gray-500 text-center text-sm mb-6 line-clamp-2 w-full">
                          {service.description || "Professional service available on demand"}
                        </p>
                      </div>
                      
                      <Button 
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium rounded-lg 
                        shadow-md hover:shadow-lg transition-all mt-auto"
                        onClick={() => {
                          const subservices = getSubservicesForService(service.name);
                          if (subservices.length === 0) {
                            handleDirectAddToCart(service);
                          } else {
                            setSelectedService(service);
                            setIsPopupOpen(true);
                          }
                        }}
                      >
                        {getSubservicesForService(service.name).length === 0 ? 'Add to Cart' : 'Select Options'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popup Modal */}
      {isPopupOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-3xl max-h-[85vh] overflow-hidden flex flex-col animate-fadeIn">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">{selectedService.name} Options</h2>
                <button 
                  onClick={() => {
                    setIsPopupOpen(false);
                    setSelectedSubservices([]);
                  }}
                  className="text-white hover:text-yellow-100 bg-yellow-600 bg-opacity-20 hover:bg-opacity-30 h-8 w-8 rounded-full flex items-center justify-center transition-all"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getSubservicesForService(selectedService.name)?.map((subservice) => (
                  <div 
                    key={subservice.id} 
                    onClick={() => handleSubserviceToggle(subservice)}
                    className={`border rounded-xl p-4 cursor-pointer transition-all hover:border-yellow-400
                      ${selectedSubservices.some(item => item.id === subservice.id)
                        ? 'border-yellow-400 bg-yellow-50 shadow-md'
                        : 'border-gray-200 hover:bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center">
                        <img
                          src={subservice.image || "/default-subservice-icon.png"}
                          alt={subservice.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-medium text-gray-800 truncate">{subservice.name}</h3>
                        <p className="text-gray-500 text-sm truncate">{subservice.providerType}</p>
                        <p className="text-yellow-600 font-medium mt-1">₹{subservice.price || 499}</p>
                      </div>
                      <div className="flex-shrink-0 self-center">
                        <input
                          type="checkbox"
                          checked={selectedSubservices.some(item => item.id === subservice.id)}
                          onChange={(e) => e.stopPropagation()}
                          className="w-5 h-5 accent-yellow-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t p-6 bg-gray-50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-gray-600">Selected: <span className="font-medium">{selectedSubservices.length} items</span></p>
                  <p className="font-bold text-xl text-gray-800">
                    Total: ₹{selectedSubservices.reduce((sum, item) => sum + (item.price || 499), 0)}
                  </p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button 
                    className="flex-grow sm:flex-grow-0 bg-gray-200 hover:bg-gray-300 text-gray-800"
                    onClick={() => {
                      setIsPopupOpen(false);
                      setSelectedSubservices([]);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="flex-grow sm:flex-grow-0 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium shadow-md"
                    onClick={handleAddToCart}
                    disabled={selectedSubservices.length === 0}
                  >
                    Add to Cart
                    {selectedSubservices.length > 0 && ` (${selectedSubservices.length})`}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceChoose;
