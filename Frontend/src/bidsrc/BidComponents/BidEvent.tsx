
import { motion } from 'framer-motion';
import { Calendar, Clock, DollarSign, Users, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

export interface BidEventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  budget: string;
  bidCount: number;
  imageUrl: string;
  status: 'upcoming' | 'active' | 'closed';
}

const BidEvent = ({ 
  id, 
  title, 
  description, 
  date, 
  time, 
  location, 
  budget, 
  bidCount, 
  imageUrl, 
  status 
}: BidEventProps) => {
  const navigate = useNavigate();
  
  const getStatusColor = () => {
    switch (status) {
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

  const handleViewDetails = () => {
    navigate(`/bid/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <Badge 
            className={cn(
              "absolute top-3 right-3 border", 
              getStatusColor()
            )}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{description}</p>
          
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <span>{time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span className="truncate">{location}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              <span>{budget}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="border-t p-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            <span>{bidCount} bids</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary group-hover:bg-primary/10 -mr-2"
            disabled={status === 'closed'}
            onClick={handleViewDetails}
          >
            <span>View details</span>
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BidEvent;
