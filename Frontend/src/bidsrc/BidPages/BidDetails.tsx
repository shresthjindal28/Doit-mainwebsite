
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, DollarSign, MapPin, Users, CheckCircle, Video, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BidEventProps } from '@/components/BidEvent';
import { toast } from 'sonner';

// Mock data for the bid details
const mockBidData: Record<string, BidEventProps> = {
  'bid1': {
    id: 'bid1',
    title: 'Kitchen Renovation Project',
    description: 'Complete kitchen renovation including cabinets, countertops, flooring, and appliances. Looking for experienced contractors who can deliver quality work within budget.',
    date: 'May 15, 2024',
    time: '10:00 AM EST',
    location: 'Boston, MA',
    budget: '$15,000 - $25,000',
    bidCount: 12,
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    status: 'active'
  },
  'bid2': {
    id: 'bid2',
    title: 'Bathroom Remodeling',
    description: 'Full bathroom remodel including new shower, toilet, vanity, and tile work. Seeking professional plumbers and tile setters who can work efficiently.',
    date: 'June 1, 2024',
    time: '2:00 PM EST',
    location: 'Chicago, IL',
    budget: '$8,000 - $12,000',
    bidCount: 8,
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    status: 'upcoming'
  },
  'bid3': {
    id: 'bid3',
    title: 'Exterior House Painting',
    description: 'Need the entire exterior of a 2-story colonial house painted. Approximately 2,500 sq ft. Looking for painters with experience in similar projects.',
    date: 'April 10, 2024',
    time: '9:00 AM EST',
    location: 'Denver, CO',
    budget: '$5,000 - $7,500',
    bidCount: 15,
    imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    status: 'closed'
  }
};

const BidDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<BidEventProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bidAmount, setBidAmount] = useState('');
  
  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    setTimeout(() => {
      if (id && mockBidData[id]) {
        setEvent(mockBidData[id]);
      }
      setIsLoading(false);
    }, 800);
  }, [id]);

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bidAmount) {
      toast.error('Please enter a bid amount');
      return;
    }
    
    toast.success(`Your bid of $${bidAmount} has been submitted!`);
    console.log(`Bid submitted: $${bidAmount} for event ${id}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="page-container pt-24 flex justify-center items-center">
          <div className="text-center">
            <div className="animate-pulse h-8 w-64 bg-muted rounded mb-4 mx-auto"></div>
            <div className="animate-pulse h-4 w-48 bg-muted rounded mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="page-container pt-24 flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Event Not Found</h2>
            <p className="text-muted-foreground mb-6">The bid event you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/bids')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = () => {
    switch (event.status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'closed':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen pb-12">
      <Navbar />
      
      <div className="relative h-[40vh] md:h-[50vh]">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <Button 
            variant="ghost" 
            className="mb-6 text-white hover:bg-white/20 hover:text-white"
            onClick={() => navigate('/bids')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <Badge 
              className={`border ${getStatusColor()}`}
            >
              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl">{event.description}</p>
        </div>
      </div>
      
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <Tabs defaultValue="details">
              <TabsList className="w-full">
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="video" className="flex-1">Video Tour</TabsTrigger>
                <TabsTrigger value="bids" className="flex-1">Current Bids</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <p className="mb-6">
                    This project requires expertise in {event.title.toLowerCase()}. The successful contractor will need to provide all materials, 
                    labor, and equipment necessary to complete the job according to specifications. The work must be completed
                    on schedule and within the agreed budget range of {event.budget}.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Date</p>
                            <p className="font-medium">{event.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Time</p>
                            <p className="font-medium">{event.time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium">{event.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Budget</p>
                            <p className="font-medium">{event.budget}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Licensed and insured professionals only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Minimum 3 years of experience in similar projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Ability to provide references from previous clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Must be able to start work within 2 weeks of bid acceptance</span>
                    </li>
                  </ul>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="video" className="pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Video className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Video Tour</h3>
                  </div>
                  
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                    {/* Video placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                      <img 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                        alt="Project visualization" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    This video tour showcases the current state of the project and provides additional visual context
                    about the scope of work required. For more details, please refer to the specifications in the Details tab.
                  </p>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="bids" className="pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Current Bids</h3>
                    </div>
                    <Badge variant="outline">{event.bidCount} total</Badge>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {[...Array(3)].map((_, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Users className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium">Contractor {index + 1}</p>
                                <p className="text-sm text-muted-foreground">Bid placed on {new Date().toLocaleDateString()}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-lg">${7500 + (index * 500)}</p>
                              <p className="text-sm text-muted-foreground">Estimated completion: 3 weeks</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Button>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      View All Bids
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Place Your Bid</h3>
                
                {event.status === 'closed' ? (
                  <div className="text-center p-4">
                    <p className="text-muted-foreground mb-2">This bidding event is closed</p>
                    <Badge variant="outline">Bidding ended</Badge>
                  </div>
                ) : (
                  <form onSubmit={handleBidSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="bidAmount" className="text-sm font-medium">
                        Your Bid Amount ($)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                          id="bidAmount"
                          type="number"
                          placeholder="Enter amount"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          className="w-full pl-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          min="1"
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full">Submit Bid</Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting a bid, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                )}
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex gap-2 text-sm text-muted-foreground mb-4">
                    <Users className="h-4 w-4" />
                    <span>{event.bidCount} contractors have placed bids</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/live-session')}
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Join Live Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidDetails;
