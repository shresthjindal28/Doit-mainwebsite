import { Truck, Clock, CheckCircle, Wallet, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Fast & professional delivery services. Reliable and efficient solutions for your needs.",
  },
  {
    icon: Clock,
    title: "24hrs Services",
    description: "Round-the-clock availability. We're here whenever you need assistance.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description: "Guaranteed satisfaction with every service. High standards maintained.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Competitive rates without hidden charges. Best value for your money.",
  },
  {
    icon: Globe,
    title: "Wide Service Coverage",
    description: "Extensive service area coverage. Available wherever you are.",
  },
];

export const Features = () => {
  return (
    <section className="bg-secondary py-20" id="features">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                WHY TO CHOOSE
                <br />
                US
              </h2>
              <p className="text-gray-400 max-w-lg">
                Your home deserves a service that understands its importance, providing care and attention that ensures it remains a source of comfort and warmth. We focus on creating a seamless experience that brings peace of mind and supports the everyday harmony of your living space.
              </p>
              <Button 
                variant="outline" 
                className="bg-yellow-400 text-secondary hover:bg-yellow-500 border-none"
              >
                View Offers
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border border-gray-800 ${
                  index >= 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-yellow-400">20K</div>
            <div className="text-gray-400 text-sm">SATISFIED CLIENTS</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-yellow-400">30K</div>
            <div className="text-gray-400 text-sm">SERVICES GIVEN</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-yellow-400">99%</div>
            <div className="text-gray-400 text-sm">CLIENT SATISFACTION</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-yellow-400">300+</div>
            <div className="text-gray-400 text-sm">EXPERT PROFESSIONALS & EXPERIENCE</div>
          </div>
        </div>
      </div>
    </section>
  );
};