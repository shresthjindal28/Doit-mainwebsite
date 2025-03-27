import { Card } from "@/components/ui/card";
import Carousel from "./Carousel";

const testimonials = [
  {
    title: "20% Business Growth",
    button: "Learn More",
    src: "",
    backgroundColor: "#FF5733", // Red
  },
  {
    title: "Improved Efficiency",
    button: "Discover",
    src: "",
    backgroundColor: "#33FF57", // Green
  },
  {
    title: "Enhanced Collaboration",
    button: "Explore",
    src: "",
    backgroundColor: "#3357FF", // Blue
  },
  {
    title: "Customer Satisfaction",
    button: "Join Now",
    src: "",
    backgroundColor: "#F3FF33", // Yellow
  },
];

const companyLogos = [
  { name: "Discord", logo: "discord" },
  { name: "NCR", logo: "ncr" },
  { name: "Monday", logo: "monday" },
  { name: "TED", logo: "ted" },
  { name: "Dropbox", logo: "dropbox" },
  { name: "Omega Energy", logo: "omega" },
  { name: "Greenhouse", logo: "greenhouse" },
  { name: "Vice", logo: "vice" },
  { name: "IDEO", logo: "ideo" }
];

export const CompanyTestimonials = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white ml-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-red-500">
                Offer Quick
              </span>
              <br />
              and Effective
              <br />
              <span className="underline decoration-yellow-400 decoration-4">
                Maintenance
              </span>
            </h2>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg p-6 shadow-lg overflow-hidden">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                The best companies Services on DOIT
                </h3>
                
                <div className="mx-auto max-w-3xl">
                <Carousel slides={testimonials} />
                </div>
              </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap justify-center gap-10 items-center opacity-50">
            {companyLogos.map((company, index) => (
              <div key={index} className="h-8">
                <span className="text-white text-sm">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};