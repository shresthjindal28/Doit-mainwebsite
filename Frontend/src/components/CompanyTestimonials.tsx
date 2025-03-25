import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import CompanyTestimonialsSlider  from "./CompanyTestimonialsSlider";

const testimonials = [
  {
    companyLogo: "Company log",
    percentage: "20%",
    quote: "With DOIT, we've significantly improved Business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas turpis ut lacus interdum lorem sit sagittis turpis ut fermentum.",
    author: "XYZ - CMO",
    image: "/lovable-uploads/b8976735-5f51-43b3-bba8-ea199be04825.png"
  },
  // Add more testimonials as needed
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
            <h2 className="text-5xl font-bold text-white mb-6">
              Offer Quick<br />and Effective<br />Maintenance
            </h2>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                The best companies<br />Services on DOIT
              </h3>
              
              {/* <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <Card className="relative overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt="Business improvement" 
                          className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 p-8 text-white">
                          <div className="h-full flex flex-col justify-between">
                            <p className="text-sm">{testimonial.companyLogo}</p>
                            <div>
                              <p className="text-7xl font-bold mb-4">{testimonial.percentage}</p>
                              <h4 className="text-xl font-semibold mb-2">{testimonial.quote}</h4>
                              <p className="text-sm mb-4">{testimonial.description}</p>
                              <p className="text-sm">{testimonial.author}</p>
                              <button className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors">
                                Visit
                              </button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-12 text-white" />
                <CarouselNext className="absolute -right-12 text-white" />
              </Carousel> */}

                {/* <CompanyTestimonialsSlider/> */}

            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
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