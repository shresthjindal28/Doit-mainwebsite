
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Video, Calendar, Users, VideoOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLiveSessionActive, setIsLiveSessionActive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate live session status change
    const timer = setTimeout(() => {
      setIsLiveSessionActive(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('bids');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      } 
    }
  };

  const joinLiveSession = () => {
    console.log("Joining live session");
    navigate('/live-session');
  };

  const registerForEvent = () => {
    console.log("Registering for present event");
    // Scroll to bids section after registering
    scrollToContent();
  };

  return (
    <section id="content" className="relative h-screen overflow-hidden bg-gradient-to-b from-background to-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
      </div>

      {/* Present Event Banner - Moved higher on the page */}
      <motion.div 
        className="absolute top-20 left-0 right-0 mx-auto w-full max-w-2xl px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="bg-card/80 backdrop-blur-sm border rounded-lg p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 rounded-full p-2">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <Badge variant="outline" className="mb-1">Present Event</Badge>
              <h3 className="font-medium">Home Renovation Expo</h3>
              <p className="text-xs text-muted-foreground">Today at 2:00 PM • San Francisco</p>
            </div>
          </div>
          <Button 
            size="sm" 
            className="whitespace-nowrap"
            onClick={registerForEvent}
          >
            Register Now
          </Button>
        </div>
      </motion.div>

      <div className="relative flex h-full items-center justify-center px-4 text-center">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Home Maintenance Service
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Find the Perfect Service <br />
            <span className="text-primary">at the Perfect Price</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mb-10 mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Our bidding platform connects homeowners with reliable maintenance professionals. 
            Submit your project and receive competitive bids from vetted experts.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 btn-hover-effect"
              onClick={() => {
                console.log("Post a Project clicked");
                scrollToContent();
              }}
            >
              Post a Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 btn-hover-effect"
              onClick={() => {
                console.log("Browse Services clicked");
                scrollToContent();
              }}
            >
              Browse Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Live Session Floating Button */}
      <motion.div
        className="absolute bottom-24 right-6 sm:right-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="relative">
          {isLiveSessionActive && (
            <motion.div 
              className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500"
              initial={{ scale: 0.5 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          )}
          <Button 
            onClick={joinLiveSession}
            className="flex items-center gap-2 rounded-full px-4 py-6 shadow-lg"
            variant={isLiveSessionActive ? "default" : "secondary"}
          >
            {isLiveSessionActive ? (
              <>
                <Video className="h-5 w-5" />
                <span className="font-medium">Join Live Session</span>
                <Badge variant="outline" className="ml-1 bg-background/20">
                  <Users className="h-3 w-3 mr-1" />
                  12
                </Badge>
              </>
            ) : (
              <>
                <VideoOff className="h-5 w-5" />
                <span className="font-medium">Session Ended</span>
              </>
            )}
          </Button>
        </div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full h-10 w-10"
          onClick={scrollToContent}
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
