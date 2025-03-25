import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Award, ShieldCheck, Users, Clock, BadgeCheck, ChevronRight } from 'lucide-react';
import JoinSection from '@/components/JoinSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        {/* Hero section */}
        <div className="page-container">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-2">About BidKeeper</Badge>
              <h1 className="text-4xl font-bold mb-4">Simplifying Home Maintenance Through Smart Bidding</h1>
              <p className="text-lg text-muted-foreground mb-6">
                BidKeeper brings together homeowners and skilled service providers through an innovative bidding platform. 
                We're revolutionizing how home maintenance services are discovered, compared, and booked.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full px-6 btn-hover-effect">
                  Get Started
                </Button>
                <Button variant="outline" className="rounded-full px-6 btn-hover-effect">
                  How It Works
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="BidKeeper platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Trusted by</p>
                      <p className="text-lg font-bold">10,000+ Homeowners</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Our Mission */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-2">Our Mission</Badge>
            <h2 className="text-3xl font-bold mb-4">Connecting Homeowners With Quality Service</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              Our mission is to create transparency and trust in the home maintenance industry by letting 
              homeowners compare qualified service providers in one place, while giving professionals a 
              platform to showcase their skills and grow their business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Quality First</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We vet all service providers to ensure only qualified professionals can bid on your projects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Trust & Security</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our secure bidding process and payment protection gives you peace of mind for every project.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Time Saving</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive and compare multiple bids in one place without the hassle of calling around.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <Badge className="mb-2">How It Works</Badge>
              <h2 className="text-3xl font-bold mb-4">Simple Process, Exceptional Results</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our streamlined bidding process makes it easy for homeowners to find the right service provider
                at the right price, in just a few simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Post Your Project",
                  description: "Describe your home maintenance needs with as much detail as possible."
                },
                {
                  step: "02",
                  title: "Receive Bids",
                  description: "Qualified service providers will submit detailed bids for your review."
                },
                {
                  step: "03",
                  title: "Compare & Select",
                  description: "Compare bids based on price, timeline, reviews, and qualifications."
                },
                {
                  step: "04",
                  title: "Get the Job Done",
                  description: "Work with your selected provider and pay securely through our platform."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary/20">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 right-[-30px] text-gray-300">
                      <ChevronRight className="h-8 w-8" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <Badge className="mb-2">Benefits</Badge>
                <h2 className="text-3xl font-bold mb-6">Why Choose BidKeeper</h2>
                <div className="space-y-4">
                  {[
                    "Competitive pricing through our bidding system",
                    "Verified, background-checked service providers",
                    "Detailed provider profiles with ratings and reviews",
                    "Secure payment protection",
                    "Project management tools to stay organized",
                    "Dedicated customer support team"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-8 rounded-full px-6 btn-hover-effect">
                  Join BidKeeper Today
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-square md:aspect-auto md:h-full relative rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1593697972679-c4041d132a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                    alt="Happy homeowner with service provider" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <BadgeCheck className="h-5 w-5 text-primary" />
                        <span className="font-medium">Verified Reviews</span>
                      </div>
                      <p className="text-xl font-semibold">"BidKeeper saved us time and money on our kitchen renovation. Highly recommend!"</p>
                      <p className="mt-2 text-sm">— Sarah J., Homeowner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Join BidKeeper Section */}
          <JoinSection />

          {/* Call to Action */}
          <motion.div 
            className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-2">Get Started Today</Badge>
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home Maintenance Experience?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of homeowners who've discovered the smart way to handle home maintenance projects.
              Post your first project today and start receiving bids from qualified professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 btn-hover-effect">
                Post a Project
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 btn-hover-effect">
                Browse Services
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <footer className="border-t bg-secondary py-12">
        <div className="page-container text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 BidKeeper. All rights reserved. Premium home maintenance bidding platform.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
