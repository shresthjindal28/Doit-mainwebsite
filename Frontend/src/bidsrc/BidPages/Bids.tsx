
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { BidEventProps } from '@/components/BidEvent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, Clock, DollarSign, MapPin, Users, Search, Filter, ChevronRight, Star } from 'lucide-react';

const Bids = () => {
  // Sample data (using the same data structure from Index)
  const upcomingEvents: BidEventProps[] = [
    {
      id: '1',
      title: 'Bathroom Renovation Project',
      description: 'Complete renovation of a master bathroom including tiling, plumbing, and fixture installation.',
      date: 'Jun 15, 2024',
      time: '10:00 AM',
      location: 'San Francisco, CA',
      budget: '$5,000 - $8,000',
      bidCount: 12,
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      status: 'upcoming'
    },
    {
      id: '2',
      title: 'Landscaping and Garden Design',
      description: 'Front yard landscaping with drought-resistant plants, pathway installation, and lighting.',
      date: 'Jun 22, 2024',
      time: '9:00 AM',
      location: 'Los Angeles, CA',
      budget: '$3,000 - $6,000',
      bidCount: 8,
      imageUrl: 'https://images.unsplash.com/photo-1558904541-efa5a29cad22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Kitchen Appliance Installation',
      description: 'Installation of new dishwasher, refrigerator, and range with necessary plumbing and electrical work.',
      date: 'Jun 28, 2024',
      time: '11:00 AM',
      location: 'Seattle, WA',
      budget: '$1,500 - $2,500',
      bidCount: 6,
      imageUrl: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      status: 'active'
    },
    {
      id: '7',
      title: 'Deck Construction',
      description: 'Building a new 300 sq ft cedar deck with railing and steps.',
      date: 'Jul 5, 2024',
      time: '10:30 AM',
      location: 'Portland, OR',
      budget: '$8,000 - $12,000',
      bidCount: 4,
      imageUrl: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      status: 'upcoming'
    },
    {
      id: '8',
      title: 'Window Replacement',
      description: 'Replacing 12 single-pane windows with energy-efficient double-pane windows.',
      date: 'Jul 12, 2024',
      time: '9:00 AM',
      location: 'Boston, MA',
      budget: '$6,000 - $9,000',
      bidCount: 7,
      imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      status: 'upcoming'
    },
    {
      id: '9',
      title: 'Fence Installation',
      description: 'Installing 150 linear feet of vinyl privacy fence with one gate.',
      date: 'Jul 18, 2024',
      time: '8:30 AM',
      location: 'Atlanta, GA',
      budget: '$3,500 - $5,500',
      bidCount: 3,
      imageUrl: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      status: 'upcoming'
    },
  ];

  const pastEvents: BidEventProps[] = [
    {
      id: '4',
      title: 'Roof Repair and Inspection',
      description: 'Repair of damaged shingles and comprehensive roof inspection for water damage.',
      date: 'May 20, 2024',
      time: '9:30 AM',
      location: 'Chicago, IL',
      budget: '$2,000 - $4,000',
      bidCount: 15,
      imageUrl: 'https://images.unsplash.com/photo-1632759145351-1d76af12dd7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      status: 'closed'
    },
    {
      id: '5',
      title: 'Exterior House Painting',
      description: 'Complete exterior painting of a two-story home including prep work, priming, and finish coats.',
      date: 'May 12, 2024',
      time: '8:00 AM',
      location: 'Austin, TX',
      budget: '$4,500 - $7,000',
      bidCount: 9,
      imageUrl: 'https://images.unsplash.com/photo-1580730673264-07834d94ea29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      status: 'closed'
    },
    {
      id: '6',
      title: 'HVAC System Maintenance',
      description: 'Seasonal maintenance for central air conditioning and heating system including duct cleaning.',
      date: 'Apr 25, 2024',
      time: '1:00 PM',
      location: 'Denver, CO',
      budget: '$800 - $1,200',
      bidCount: 11,
      imageUrl: 'https://images.unsplash.com/photo-1621264448670-28dcaf64dbf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      status: 'closed'
    },
    {
      id: '10',
      title: 'Kitchen Countertop Replacement',
      description: 'Replacing laminate countertops with quartz including sink and faucet installation.',
      date: 'Apr 10, 2024',
      time: '10:00 AM',
      location: 'Miami, FL',
      budget: '$3,200 - $4,800',
      bidCount: 14,
      imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      status: 'closed'
    },
    {
      id: '11',
      title: 'Driveway Resurfacing',
      description: 'Resurfacing 800 sq ft concrete driveway with decorative stamped overlay.',
      date: 'Mar 15, 2024',
      time: '8:00 AM',
      location: 'Phoenix, AZ',
      budget: '$2,800 - $4,500',
      bidCount: 8,
      imageUrl: 'https://images.unsplash.com/photo-1617850687396-57a679855691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      status: 'closed'
    },
    {
      id: '12',
      title: 'Basement Waterproofing',
      description: 'Interior and exterior waterproofing of basement with sump pump installation.',
      date: 'Feb 28, 2024',
      time: '9:30 AM',
      location: 'New York, NY',
      budget: '$5,500 - $8,500',
      bidCount: 12,
      imageUrl: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
      status: 'closed'
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredUpcomingEvents = upcomingEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPastEvents = pastEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderEvent = (event: BidEventProps) => (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md group">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge 
            className={`absolute top-3 right-3 border ${
              event.status === 'upcoming' 
                ? 'bg-blue-100 text-blue-700 border-blue-200' 
                : event.status === 'active' 
                  ? 'bg-green-100 text-green-700 border-green-200' 
                  : 'bg-gray-100 text-gray-700 border-gray-200'
            }`}
          >
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold line-clamp-1">{event.title}</h3>
        </CardHeader>
        
        <CardContent className="pb-2 flex-grow">
          <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{event.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span className="truncate">{event.location}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              <span>{event.budget}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="border-t mt-auto pt-4">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span>{event.bidCount} bids</span>
            </div>
            
            <Button 
              variant={event.status === 'closed' ? "outline" : "default"} 
              size="sm" 
              className={event.status !== 'closed' ? "btn-hover-effect" : ""}
              disabled={event.status === 'closed'}
            >
              {event.status === 'closed' ? 'Closed' : 'Place Bid'}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Bidding Events</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Browse all upcoming and past bidding events for home maintenance services. Place 
              competitive bids on open projects or view results from past events.
            </p>
          </motion.div>

          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events by title, description or location..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>

          <Tabs 
            defaultValue="upcoming" 
            className="mb-12"
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming" className="relative">
                Upcoming Events
                {upcomingEvents.length > 0 && (
                  <Badge className="ml-2 text-xs">{upcomingEvents.length}</Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="past" className="relative">
                Past Events
                {pastEvents.length > 0 && (
                  <Badge variant="outline" className="ml-2 text-xs">{pastEvents.length}</Badge>
                )}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              {filteredUpcomingEvents.length === 0 ? (
                <div className="text-center py-12 bg-secondary/50 rounded-lg">
                  <p className="text-muted-foreground">No upcoming events found matching your search.</p>
                  <Button variant="link" onClick={() => setSearchQuery('')}>
                    Clear search
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredUpcomingEvents.map(renderEvent)}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {filteredPastEvents.length === 0 ? (
                <div className="text-center py-12 bg-secondary/50 rounded-lg">
                  <p className="text-muted-foreground">No past events found matching your search.</p>
                  <Button variant="link" onClick={() => setSearchQuery('')}>
                    Clear search
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPastEvents.map(renderEvent)}
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="bg-secondary/70 rounded-xl p-8 mt-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <Badge className="mb-2">For Service Providers</Badge>
                <h2 className="text-2xl font-bold mb-3">Join Our Network of Trusted Professionals</h2>
                <p className="text-muted-foreground mb-6">
                  If you're a qualified service provider, join our platform to bid on projects
                  and grow your business. We connect skilled professionals with homeowners
                  looking for quality service.
                </p>
                <Button className="rounded-full px-6 btn-hover-effect">
                  Register as a Provider
                </Button>
              </div>
              <div className="md:w-1/3 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Verified Reviews</h3>
                    <p className="text-sm text-muted-foreground">Build your reputation with client feedback</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Competitive Bidding</h3>
                    <p className="text-sm text-muted-foreground">Set your own prices on projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Bids;
