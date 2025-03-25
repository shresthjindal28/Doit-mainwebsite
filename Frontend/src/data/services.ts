export interface SubService {
  id: string;
  name: string;
  description: string;
  provider: string;
  price?: number;
}

export interface MainService {
  id: string;
  name: string;
  description: string;
  icon?: string;
  subServices: SubService[];
}

export const services: MainService[] = [
  {
    id: "1",
    name: "Cleaning",
    description: "Professional cleaning solutions for your space",
    subServices: [
      {
        id: "cleaning-1",
        name: "Deep Cleaning",
        description: "Complete home deep cleaning service",
        provider: "Deep Cleaner",
        price: 2999
      },
      {
        id: "cleaning-2",
        name: "Regular Cleaning",
        description: "Regular home cleaning service",
        provider: "Cleaner",
        price: 1499
      },
      // Add other cleaning subservices...
    ]
  },
  {
    id: "plumbing",
    name: "Plumbing Services",
    description: "Expert plumbing solutions",
    subServices: [
      {
        id: "leak-repairs",
        name: "Leak Repairs",
        description: "Fix any type of water leaks",
        provider: "Plumber"
      },
      // Add other plumbing subservices...
    ]
  },
  // Add other main services...
];
