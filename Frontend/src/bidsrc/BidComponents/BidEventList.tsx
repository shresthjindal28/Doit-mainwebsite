
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowUpDown, X } from 'lucide-react';
import BidEvent, { BidEventProps } from './BidEvent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EventListProps {
  upcomingEvents: BidEventProps[];
  pastEvents: BidEventProps[];
}

// Define filter types
type FilterOption = {
  id: string;
  label: string;
  value: string;
};

// Budget range filter options
const budgetOptions: FilterOption[] = [
  { id: 'any', label: 'Any budget', value: 'any' },
  { id: 'under1k', label: 'Under $1,000', value: 'under1k' },
  { id: '1kto5k', label: '$1,000 - $5,000', value: '1kto5k' },
  { id: '5kto10k', label: '$5,000 - $10,000', value: '5kto10k' },
  { id: 'over10k', label: 'Over $10,000', value: 'over10k' },
];

// Location filter options - these could be fetched from an API in a real app
const locationOptions: FilterOption[] = [
  { id: 'any', label: 'Any location', value: 'any' },
  { id: 'sf', label: 'San Francisco', value: 'San Francisco' },
  { id: 'la', label: 'Los Angeles', value: 'Los Angeles' },
  { id: 'ny', label: 'New York', value: 'New York' },
  { id: 'chicago', label: 'Chicago', value: 'Chicago' },
];

const EventList = ({ upcomingEvents, pastEvents }: EventListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string>('any');
  const [selectedLocations, setSelectedLocations] = useState<string[]>(['any']);

  // Filter the events based on all criteria
  const filterEvents = (events: BidEventProps[]) => {
    return events.filter(event => {
      // Text search filter
      const matchesSearch = 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (!matchesSearch) return false;
      
      // Budget filter
      if (selectedBudget !== 'any') {
        const numericBudget = parseFloat(event.budget.replace(/[^0-9.]/g, ''));
        
        switch (selectedBudget) {
          case 'under1k':
            if (numericBudget >= 1000) return false;
            break;
          case '1kto5k':
            if (numericBudget < 1000 || numericBudget > 5000) return false;
            break;
          case '5kto10k':
            if (numericBudget < 5000 || numericBudget > 10000) return false;
            break;
          case 'over10k':
            if (numericBudget <= 10000) return false;
            break;
        }
      }
      
      // Location filter
      if (!selectedLocations.includes('any') && !selectedLocations.includes(event.location)) {
        return false;
      }
      
      return true;
    });
  };

  // Sort the filtered events
  const sortEvents = (events: BidEventProps[]) => {
    if (!sortOrder) return events;
    
    return [...events].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      return sortOrder === 'asc' 
        ? dateA.getTime() - dateB.getTime() 
        : dateB.getTime() - dateA.getTime();
    });
  };

  // Apply both filtering and sorting
  const filteredUpcomingEvents = sortEvents(filterEvents(upcomingEvents));
  const filteredPastEvents = sortEvents(filterEvents(pastEvents));

  // Toggle location selection
  const toggleLocation = (locationValue: string) => {
    if (locationValue === 'any') {
      setSelectedLocations(['any']);
      return;
    }
    
    // If 'any' is currently selected, remove it
    let newLocations = selectedLocations.filter(loc => loc !== 'any');
    
    // Toggle the selected location
    if (newLocations.includes(locationValue)) {
      newLocations = newLocations.filter(loc => loc !== locationValue);
    } else {
      newLocations.push(locationValue);
    }
    
    // If no locations are selected, default to 'any'
    setSelectedLocations(newLocations.length ? newLocations : ['any']);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedBudget('any');
    setSelectedLocations(['any']);
    setSortOrder(null);
    setShowFilters(false);
  };

  // Count active filters
  const activeFilterCount = [
    selectedBudget !== 'any',
    !selectedLocations.includes('any'),
    sortOrder !== null
  ].filter(Boolean).length;

  return (
    <section className="section-container">
      <div className="page-container" id="content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-2">Bidding Platform</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Browse Bidding Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find upcoming and past bidding events for home maintenance services. Place your bids or view previous results.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-2 h-6 w-6" 
                onClick={() => setSearchQuery('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Popover open={showFilters} onOpenChange={setShowFilters}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                  {activeFilterCount > 0 && (
                    <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                      {activeFilterCount}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Budget</h4>
                    <div className="flex flex-col gap-2">
                      {budgetOptions.map(option => (
                        <div key={option.id} className="flex items-center">
                          <input
                            type="radio"
                            id={option.id}
                            name="budget"
                            className="mr-2"
                            checked={selectedBudget === option.value}
                            onChange={() => setSelectedBudget(option.value)}
                          />
                          <label htmlFor={option.id}>{option.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Location</h4>
                    <div className="flex flex-col gap-2">
                      {locationOptions.map(option => (
                        <div key={option.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`loc_${option.id}`}
                            className="mr-2"
                            checked={selectedLocations.includes(option.value)}
                            onChange={() => toggleLocation(option.value)}
                          />
                          <label htmlFor={`loc_${option.id}`}>{option.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-2 border-t">
                    <Button variant="ghost" size="sm" onClick={resetFilters}>
                      Reset filters
                    </Button>
                    <Button size="sm" onClick={() => setShowFilters(false)}>
                      Apply filters
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                  checked={sortOrder === 'asc'}
                  onCheckedChange={() => setSortOrder(sortOrder === 'asc' ? null : 'asc')}
                >
                  Oldest first
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={sortOrder === 'desc'}
                  onCheckedChange={() => setSortOrder(sortOrder === 'desc' ? null : 'desc')}
                >
                  Newest first
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs 
          defaultValue="upcoming" 
          className="mb-8"
          onValueChange={setActiveTab}
        >
          <TabsList>
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
          <TabsContent value="upcoming" className="pt-6">
            {filteredUpcomingEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {searchQuery || activeFilterCount > 0 
                    ? "No events match your filters. Try adjusting your search criteria."
                    : "No upcoming events found."
                  }
                </p>
                {(searchQuery || activeFilterCount > 0) && (
                  <Button variant="outline" className="mt-4" onClick={resetFilters}>
                    Clear all filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUpcomingEvents.map((event) => (
                  <BidEvent key={event.id} {...event} />
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="past" className="pt-6">
            {filteredPastEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {searchQuery || activeFilterCount > 0 
                    ? "No events match your filters. Try adjusting your search criteria."
                    : "No past events found."
                  }
                </p>
                {(searchQuery || activeFilterCount > 0) && (
                  <Button variant="outline" className="mt-4" onClick={resetFilters}>
                    Clear all filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPastEvents.map((event) => (
                  <BidEvent key={event.id} {...event} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button size="lg" className="rounded-full px-8">
            {activeTab === 'upcoming' ? 'View All Upcoming Events' : 'View All Past Events'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventList;
