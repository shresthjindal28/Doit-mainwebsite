import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  { value: "20K", label: "Happy Customers", endValue: 20 },
  { value: "30K", label: "Services Completed", endValue: 30 },
  { value: "99%", label: "Satisfaction Rate", endValue: 99 },
  { value: "300+", label: "Expert Professionals", endValue: 300 },
];

export const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const numberRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        if (numberRefs.current[index]) {
          gsap.fromTo(
            numberRefs.current[index],
            { innerHTML: "0" },
            {
              duration: 2,
              innerHTML: stat.endValue.toString(),
              snap: { innerHTML: 1 },
              onComplete: () => {
                if (numberRefs.current[index]) {
                  numberRefs.current[index]!.innerHTML = stat.value;
                }
              },
            }
          );
        }
      });
    }
  }, [inView]);

  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`space-y-2 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                ref={el => numberRefs.current[index] = el}
                className="text-3xl md:text-4xl font-bold text-primary"
              >
                0
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};