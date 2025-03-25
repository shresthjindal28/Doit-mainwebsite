
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';

interface UserDetails {
  name: string;
  email: string;
  company?: string;
}

const LiveSession = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    email: '',
    company: '',
  });
  const [isJoining, setIsJoining] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userDetails.name || !userDetails.email) {
      toast.error('Please provide your name and email');
      return;
    }

    setIsJoining(true);

    // Simulate joining session
    setTimeout(() => {
      toast.success(`Welcome, ${userDetails.name}! You've joined the live session.`);
      console.log('User joined with details:', userDetails);
      setIsJoining(false);
      // In a real app, you'd connect to a video service here
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary pt-20 px-4">
      <motion.div 
        className="max-w-md mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Join Live Session</h1>
              <p className="text-muted-foreground">Home Renovation Expo</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Badge variant="outline" className="bg-background/20">
              <Users className="h-3 w-3 mr-1" /> 12 attendees
            </Badge>
            <span>•</span>
            <span>Live now</span>
          </div>
        </motion.div>

        <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Your Name *</label>
            <Input
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={userDetails.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium">Company (Optional)</label>
            <Input
              id="company"
              name="company"
              value={userDetails.company}
              onChange={handleInputChange}
              placeholder="Acme Inc."
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isJoining}
          >
            {isJoining ? 'Joining...' : 'Join Session'}
          </Button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LiveSession;
