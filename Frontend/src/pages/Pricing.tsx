import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PricingCards() {
    const cardsRef = useRef([]);
    const containerRef = useRef(null);
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Hourly Subscription",
            price: isAnnual ? "$3/hr" : "$5/hr",
            features: ["Basic Cleaning Service", "Minor Repairs", "Email Support"],
            popular: false,
            color: "from-gray-800 to-gray-900",
        },
        {
            name: "Weekly Subscription",
            price: isAnnual ? "$35/week" : "$50/week",
            features: ["Regular Cleaning", "Standard Repairs", "Phone Support"],
            popular: false,
            color: "from-purple-500 to-indigo-700",
        },
        {
            name: "Monthly Subscription",
            price: isAnnual ? "$120/month" : "$150/month",
            features: ["Deep Cleaning", "Major Repairs", "24/7 Support"],
            popular: true,
            color: "from-rose-500 to-pink-700",
        },
        {
            name: "Contract Subscription",
            price: isAnnual ? "$1800/project" : "$2000/project",
            features: ["Complete Maintenance", "Replacement Service", "Dedicated Support"],
            popular: false,
            color: "from-green-500 to-teal-700",
        },
        {
            name: "Yearly Subscription",
            price: isAnnual ? "$1200/year" : "$1500/year",
            features: ["All Monthly Features", "Priority Service", "10% Discount on Additional Services"],
            popular: false,
            color: "from-blue-500 to-cyan-700",
        },
        {
            name: "Enterprise",
            price: isAnnual ? "$5000/year" : "$6000/year",
            features: ["Customized Service Plan", "Dedicated Account Manager", "SLA Guarantee"],
            popular: false,
            color: "from-amber-500 to-orange-700",
        },
    ];

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    const togglePricing = () => {
        setIsAnnual(!isAnnual);
        gsap.fromTo(cardsRef.current, { scale: 0.95 }, { scale: 1, duration: 0.5, stagger: 0.1 });
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-black flex flex-col items-center py-16 px-4 sm:px-8">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg mb-8 text-center">
                Choose Your Plan
            </h1>
            <p className="text-gray-400 text-lg mb-6 text-center">Pick a plan that suits your needs</p>
            
            {/* <div className="flex items-center mb-10">
                <span className={`mr-3 text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                <button 
                    onClick={togglePricing}
                    className="relative inline-flex items-center h-8 rounded-full w-14 bg-gray-300 transition-colors"
                >
                    <span 
                        className={`inline-block w-6 h-6 transform bg-white rounded-full transition-transform ${
                            isAnnual ? 'translate-x-7' : 'translate-x-1'
                        }`} 
                    />
                </button>
                <span className={`ml-3 text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                    Annual <span className="text-green-500 text-sm">(Save 20%)</span>
                </span>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-6 max-w-7xl w-full">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={`relative bg-gradient-to-br ${plan.color} text-white p-6 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
                    >
                        {plan.popular && (
                            <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded-md shadow-lg">
                                POPULAR
                            </div>
                        )}
                        <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
                        <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
                        <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="text-green-300">✔</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-white text-black py-2 rounded-lg font-bold hover:bg-gray-200 transition-all">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
