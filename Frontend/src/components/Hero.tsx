import { Button } from "@/components/ui/button";
import { ServiceChoose } from "@/UserPage/Service.choose";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from 'split-type';

export const Hero = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Split text into characters
    const titleText = new SplitType(titleRef.current!, { types: 'chars' });
    const descText = new SplitType(descRef.current!, { types: 'words' });

    // Create timeline
    const tl = gsap.timeline();

    // Animate title characters
    tl.from(titleText.chars, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.05,
      duration: 0.3,
      ease: "back.out"
    })
    // Animate description words
    .from(descText.words, {
      opacity: 0,
      y: 20,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.5")
    // Animate buttons
    .from(buttonRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

  }, []);

  return (
    <>
    <div className="relative h-full w-[100vw] bg-gradient-to-br from-orange-500 via-[#FFD700] to-yellow-200 ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>
      <section className="min-h-[100vh] flex flex-col pt-16 ">
      
        <div className="flex justify-center items-center w-auto lg:w-auto lg:ml-[4rem] lg:mt-[-2rem] p-1">
          <div ref={contentRef} className="text-left text-white space-y-6 p-3 w-screen mt-12 rounded-[20px] flex flex-col items-center justify-center z-10">
            <h1 ref={titleRef} className="text-xl md:text-5xl font-bold leading-tight mt-7">
              YOUR HOME OUR PRIORITY
            </h1>
            <p ref={descRef} className="text-xs w-[30vw] md:text-xl opacity-90 min-h-[6rem] h-auto leading-relaxed">
              Welcome to DOIT, your trusted partner for home maintenance.
              Whether you're a homeowner or renter, we provide reliable
              solutions for your needs, ensuring peace of mind with every task.
            </p>
            <div ref={buttonRef} className="flex flex-col sm:flex-row items-center gap-3">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 h-auto text-sm">
                Book Service
              </Button>
              <a
                href="#"
                className="text-red-700 hover:text-red-800 transition-colors underline text-sm"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
        <ServiceChoose />
      </section>
    </div>
    </>
  );
};
