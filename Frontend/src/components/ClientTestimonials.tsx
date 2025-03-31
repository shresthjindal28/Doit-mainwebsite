"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
    author: "Brooklyn Simmons",
    role: "Homeowner",
  },
  {
    id: 2,
    text: "Outstanding service and remarkable results. The implementation was smooth and the impact on our operations was immediate. Would definitely work with them again!",
    author: "Alex Johnson",
    role: "Project Manager",
  },
  {
    id: 3,
    text: "Incredibly professional and responsive team. Their creative approach to solving our business challenges resulted in a 45% increase in customer engagement within just two months.",
    author: "Sarah Williams",
    role: "Marketing Director",
  },
  {
    id: 4,
    text: "We've worked with many service providers before, but none have matched the level of expertise and dedication shown by this team. Their work transformed our outdated systems and drastically improved our operational efficiency.",
    author: "Michael Chen",
    role: "CEO",
  },
  {
    id: 5,
    text: "The attention to detail was impressive. They didn't just meet our requirements—they anticipated needs we hadn't even considered. Our customers have noticed the difference in quality and functionality.",
    author: "Jessica Miller",
    role: "Product Owner",
  },
  {
    id: 6,
    text: "From concept to execution, the entire process was seamless. Their team communicated clearly at every stage and delivered exactly what they promised, on time and within budget.",
    author: "David Thompson",
    role: "Operations Manager",
  }
];

export const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 2000); // Autoplay duration set to 0.5 seconds
    }
    return () => clearInterval(interval);
  }, [autoplay, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-yellow-300/20"></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-orange-400/15"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-amber-500/10"></div>
      </div>
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <MessageSquareQuote className="w-8 h-8 text-amber-500 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-orange-700">
            What Our Clients Are Saying
          </h2>
          <p className="text-gray-700 mt-2">
            Real feedback from our satisfied customers
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="relative">
          <div
            className={cn(
              "p-6 rounded-2xl mb-6 transition-all duration-500 shadow-2xl text-gray-800 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg h-auto border border-amber-300" // Changed fixed height to auto
            )}
          >
            <div className="flex flex-col md:flex-row items-start mb-4">
              <MessageSquareQuote className="w-10 h-10 text-amber-600 mb-3 md:mb-0 md:mr-4" />
              <blockquote className="text-lg italic font-medium md:text-xl"> {/* Adjusted font size */}
                {testimonials[currentIndex].text}
              </blockquote>
            </div>
            <div className="text-right">
              <p className="font-semibold text-orange-600">- {testimonials[currentIndex].author}</p>
              <p className="text-red-900">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 hidden"> {/* Hide the navigation buttons */}
          <button
            onClick={prevSlide}
            className="bg-gray-200/50 hover:bg-gray-200/70 text-black rounded-full p-2"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-200/50 hover:bg-gray-200/70 text-black rounded-full p-2"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Logo Carousel */}
        <div className="mt-8">
          <h3 className="text-black text-center mb-4 text-xl font-semibold">
            Our Trusted Clients
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="animate-carousel">
              {[1, 2, 3, 4, 5].map((index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4">
                  <div className="bg-black/80 rounded-lg p-4 flex items-center justify-center min-h-[70px] md:min-h-[80px] border border-yellow-500">
                    <span className="text-amber-400 font-bold text-sm md:text-base">Logo {index}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
