
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const JoinSection = () => {
  const navigate = useNavigate();
  
  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for homeowners with occasional projects",
      features: [
        "Post up to 3 projects per month",
        "Compare up to 10 bids per project",
        "Basic project management tools",
        "Email support"
      ],
      isPopular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Premium",
      price: "$29/month",
      description: "Ideal for homeowners with multiple projects",
      features: [
        "Unlimited project postings",
        "Priority placement in contractor searches",
        "Advanced project management tools",
        "Phone & email support",
        "Exclusive access to top-rated contractors"
      ],
      isPopular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Professional",
      price: "$99/month",
      description: "For property managers and contractors",
      features: [
        "Unlimited project postings & bids",
        "Team collaboration tools",
        "Branded project pages",
        "Priority 24/7 support",
        "Project analytics and reporting",
        "API access for integration"
      ],
      isPopular: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <motion.div 
      className="my-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="join"
    >
      <div className="text-center mb-12">
        <Badge className="mb-2">Join BidKeeper</Badge>
        <h2 className="text-3xl font-bold mb-4">Choose the Perfect Plan for Your Needs</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join thousands of homeowners and contractors already using BidKeeper to simplify their
          home maintenance projects and grow their businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={`h-full relative ${plan.isPopular ? 'border-primary shadow-lg' : ''}`}>
              {plan.isPopular && (
                <div className="absolute -top-3 right-8">
                  <Badge className="bg-primary text-white">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "Free" && <span className="text-muted-foreground">/month</span>}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-auto rounded-full"
                  variant={plan.buttonVariant}
                  onClick={() => {
                    navigate('/live-session');
                  }}
                >
                  {plan.isPopular ? 'Get Started' : 'Join Now'}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default JoinSection;
