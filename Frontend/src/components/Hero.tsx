import { Button } from "@/components/ui/button";
import { ServiceChoose } from "@/UserPage/Service.choose";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

export const Hero = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const contentRef = useRef(null);
  const serviceChooseRef = useRef(null); // New ref for ServiceChoose component

  useEffect(() => {
    // Split text into characters
    const titleText = new SplitType(titleRef.current!, { types: "chars" });
    const descText = new SplitType(descRef.current!, { types: "words" });

    // Create timeline
    const tl = gsap.timeline();

    // Animate title characters
    tl.from(titleText.chars, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.05,
      duration: 0.3,
      ease: "back.out",
    })
      // Animate description words
      .from(
        descText.words,
        {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.5"
      )
      // Animate buttons
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      // Animate ServiceChoose component
      .to(serviceChooseRef.current, {
        opacity: 1,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      });
  }, []);

  return (
    <div className="relative h-auto min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-500 via-yellow-500 to-red-600">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,0,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,69,0,0.2),transparent_70%)]"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-300/30 rounded-full filter blur-[150px]"></div>

      {/* Refined grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,223,0,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,223,0,0.15)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <section className="h-full flex flex-col items-center justify-center relative pb-16">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-300 rounded-full filter blur-[120px] opacity-40"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-[120px] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full filter blur-[180px] opacity-20"></div>

        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center mt-10">
          <div
            ref={contentRef}
            className="max-w-5xl flex flex-col items-center justify-center z-10 pt-8 backdrop-blur-[2px] p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent"
          >
            <h1
              ref={titleRef}
              className="text-2xl md:text-5xl lg:text-7xl font-extrabold text-center tracking-tight space-x-2 md:space-x-3 lg:space-x-4"
            >
              <span className="block mt-2 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                Your One-Stop Solution
              </span>
              <span
                className="text-yellow-300 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]
              "
              >
                {" "}
                Maintenance{" "}
              </span>
              <span className="block mt-2 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                {" "}
                Services
              </span>
            </h1>

            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 my-8 rounded-full shadow-lg"></div>

            <p
              ref={descRef}
              className="text-base md:text-xl text-center max-w-2xl text-white/95 leading-relaxed mb-12 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] font-medium px-4"
            >
              DO!T connects you with skilled professionals. From plumbing to
              painting, we've got you covered. Experienced professionals,
              guaranteed quality, and 24/7 support.
            </p>

            <div
              ref={buttonRef}
              className="flex flex-col md:flex-row items-center gap-6 mb-4 z-20"
            >
              <Button className="bg-gradient-to-br from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white font-bold px-10 py-4 h-auto rounded-full text-lg shadow-[0_8px_30px_rgb(255,193,7,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_35px_rgb(255,193,7,0.45)] border-b-4 border-amber-600">
                Book Service
              </Button>
              <Button className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white font-bold px-10 py-4 h-auto rounded-full text-lg shadow-[0_8px_30px_rgba(239,68,68,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_35px_rgba(239,68,68,0.45)]">
                Get a Free Quote
              </Button>
            </div>

            {/* Info Section */}
            <div className="flex mt-8 space-x-6 text-white font-medium">
              <div className="flex items-center space-x-1">
                <span className="text-orange-500 font-bold">24/7</span>
                <span>Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-500 font-bold">100%</span>
                <span>Satisfaction</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-red-500 font-bold">5★</span>
                <span>Rated</span>
              </div>
            </div>
          </div>

          {/* Service Choose component integrated within the same background */}
          <div ref={serviceChooseRef} className="w-full mt-20 z-10 opacity-0">
            <ServiceChoose />
          </div>
        </div>
      </section>
    </div>
  );
};
