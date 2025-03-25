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
    <div>
      <div className="hero-choose container mx-auto px-6 flex justify-center items-center w-full lg:w-[65%] pt-12 pb-8 bg-gray-100/80 backdrop-blur-sm rounded-3xl mb-12 lg:mt-[0rem]">
        <div className="w-full flex items-center justify-center flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Now what you like to choose
          </h2>

          <div className="w-full flex justify-center mb-24">
            <SearchBar onFilterChange={setSelectedCategory}/>
          </div>

          <div className={`relative w-full ${selectedCategory === "All" ? "overflow-hidden" : "overflow-x-auto"}`}>
            <div 
              ref={scrollRef}
              className={`flex gap-6 ${selectedCategory === "All" ? "w-max" : ""}`}
            >
              {(selectedCategory === "All" ? [...filteredServices, ...filteredServices] : filteredServices).map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className={`bg-white rounded-xl p-6 hover:shadow-lg transition-shadow flex-shrink-0 ${
                    selectedCategory !== "All" ? "w-full" : "w-[300px]"
                  }`}
                >
                  <div className="flex items-center flex-col gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {service.name}
                    </h3>
                    <Button 
                      className="bg-yellow-400 hover:bg-yellow-500 text-black mt-2"
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
                      {getSubservicesForService(service.name).length === 0 ? 'Add to Cart' : 'Select Service'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && selectedService && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{selectedService.name} </h2>
            <button 
              onClick={() => {
                setIsPopupOpen(false);
                setSelectedSubservices([]);
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getSubservicesForService(selectedService.name)?.map((subservice, index) => (
              <div 
                key={subservice.id} 
                className={`border p-4 rounded-lg hover:shadow-md transition-all ${
                  selectedSubservices.some(item => item.id === subservice.id)
                    ? 'border-yellow-400 bg-yellow-50'
                    : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{subservice.name}</h3>
                  <input
                    type="checkbox"
                    checked={selectedSubservices.some(item => item.id === subservice.id)}
                    onChange={() => handleSubserviceToggle(subservice)}
                    className="w-4 h-4 accent-yellow-400"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-2">Provider: {subservice.providerType}</p>
                <div className="w-12 h-12 mb-2">
                  <img
                    src={subservice.image}
                    alt={subservice.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">Selected Services: {selectedSubservices.length}</p>
                <p className="font-bold text-lg">
                  Total: ₹{selectedSubservices.reduce((sum, item) => sum + (item.price || 499), 0)}
                </p>
              </div>
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6"
                onClick={handleAddToCart}
                disabled={selectedSubservices.length === 0}
              >
                Add to Cart ({selectedSubservices.length})
              </Button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  
  )
}

export default ServiceChoose
