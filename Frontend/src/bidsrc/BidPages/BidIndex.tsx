
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import EventList from '@/components/EventList';
import { BidEventProps } from '@/components/BidEvent';

const Index = () => {
  // Sample data for upcoming events
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
  ];

  // Sample data for past events
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
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <EventList upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
      
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

export default Index;
