import { Truck, Clock, CheckCircle, Wallet, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Fast & professional delivery services. Reliable and efficient solutions for your needs.",
  },
  {
    icon: Clock,
    title: "24hrs Services",
    description:
      "Round-the-clock availability. We're here whenever you need assistance.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description:
      "Guaranteed satisfaction with every service. High standards maintained.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Competitive rates without hidden charges. Best value for your money.",
  },
  {
    icon: Globe,
    title: "Wide Service Coverage",
    description: "Extensive service area coverage. Available wherever you are.",
  },
];

const RotatingCube = () => {
  const cubeRef = useRef();

  // useEffect(() => {
  //   gsap.to(cubeRef.current.rotation, {
  //     x: Math.PI * 2,
  //     y: Math.PI * 2,
  //     duration: 10,
  //     repeat: -1,
  //     ease: "linear",
  //   });
  // }, []);

  // return (
  //   <mesh ref={cubeRef}>
  //     <boxGeometry args={[1, 1, 1]} />
  //     <meshStandardMaterial color="#FFD700" />
  //   </mesh>
  // );
};

export const Features = () => {
  return (
    <>
      <section
        className="bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 py-20"
        id="features"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative">
              <div className="absolute -top-20 -left-20 w-40 h-40">
                {/* <Canvas>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[2, 2, 2]} />
                  <RotatingCube />
                </Canvas> */}
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  WHY TO CHOOSE
                  <br />
                  US
                </h2>
                <p className="text-gray-100 max-w-lg">
                  Your home deserves a service that understands its importance,
                  providing care and attention that ensures it remains a source
                  of comfort and warmth. We focus on creating a seamless
                  experience that brings peace of mind and supports the everyday
                  harmony of your living space.
                </p>
                <Button
                  variant="outline"
                  className="bg-yellow-500 text-secondary hover:bg-yellow-600 border-none shadow-lg hover:shadow-xl transition-all"
                >
                  View Offers
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-800 bg-white shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-all flex flex-col items-center text-center h-64"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6 text-center">
        <div className="space-y-2 text-center">
          <div className="text-4xl font-bold text-yellow-500">20K</div>
          <div className="text-gray-100 text-sm">SATISFIED CLIENTS</div>
        </div>
        <div className="space-y-2 text-center">
          <div className="text-4xl font-bold text-yellow-500">30K</div>
          <div className="text-gray-100 text-sm">SERVICES GIVEN</div>
        </div>
        <div className="space-y-2 text-center">
          <div className="text-4xl font-bold text-yellow-500">99%</div>
          <div className="text-gray-100 text-sm">CLIENT SATISFACTION</div>
        </div>
        <div className="space-y-2 text-center">
          <div className="text-4xl font-bold text-yellow-500">300+</div>
          <div className="text-gray-100 text-sm">
            EXPERT PROFESSIONALS & EXPERIENCE
          </div>
        </div>
      </div>
    </>
  );
};
