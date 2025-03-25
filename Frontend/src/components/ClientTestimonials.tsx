"use client"; // Required if using hooks in a server component

import { useState } from "react";
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";
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
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
    author: "Brooklyn Simmons",
    role: "Homeowner",
    image: "/lovable-uploads/dc323643-7b58-4491-92b5-c883d5d6012b.png"
  },
  {
    id: 2,
    text: "Outstanding service and remarkable results. The implementation was smooth and the impact on our operations was immediate. Would definitely work with them again!",
    author: "Alex Johnson",
    role: "Project Manager",
    image: "/lovable-uploads/dc323643-7b58-4491-92b5-c883d5d6012b.png"
  }
];

export const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-[#4CD787] min-h-screen">
    <div className="testimonial-gradient min-h-screen flex flex-col justify-center px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <Settings className="w-6 h-6 text-red-500" />
          <h2 className="text-red-500 font-semibold tracking-wide">OUR CLIENT SAY</h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={testimonials[currentIndex].image}
              alt="Client testimonial"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="text-white">
            <h2 className="text-4xl font-bold mb-8">
              What our satisfied clients are saying
            </h2>
            <blockquote className="text-lg mb-8">
              {testimonials[currentIndex].text}
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-red-600">{testimonials[currentIndex].role}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className={cn(
                    "p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className={cn(
                    "p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="animate-carousel">
            {[1, 2, 3, 4, 5].map((index) => (
              <CarouselItem key={index} className="basis-1/5 pl-4">
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center min-h-[80px]">
                  <span className="text-black font-semibold">Logo {index}</span>
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
