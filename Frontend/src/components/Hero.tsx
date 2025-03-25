import { Button } from "@/components/ui/button";
import { Search } from "lucide-react"; // Assuming you're using lucide-react for the search icon
import { Input } from "@/components/ui/input"; // Assuming you have a custom Input component

// Sample data for service categories and services (you should replace this with actual data)

const services = [
  { name: "Cleaner", image: "/services/cleaner.jpg" },
  { name: "Plumber", image: "/services/plumber.jpg" },
  { name: "Electrician", image: "/services/electrician.jpg" },
  { name: "Carpenter", image: "/services/carpenter.jpg" },
  { name: "Painter", image: "/services/painter.jpg" },
  { name: "Cleaner", image: "/services/cleaner.jpg" },
  { name: "Plumber", image: "/services/plumber.jpg" },
  { name: "Electrician", image: "/services/electrician.jpg" },
  { name: "Carpenter", image: "/services/carpenter.jpg" },
  { name: "Painter", image: "/services/painter.jpg" },
  { name: "Cleaner", image: "/services/cleaner.jpg" },
  { name: "Plumber", image: "/services/plumber.jpg" },
  { name: "Electrician", image: "/services/electrician.jpg" },
  { name: "Carpenter", image: "/services/carpenter.jpg" },
  { name: "Painter", image: "/services/painter.jpg" },
  { name: "Electrician", image: "/services/electrician.jpg" },
  { name: "Carpenter", image: "/services/carpenter.jpg" },
  { name: "Painter", image: "/services/painter.jpg" },

  //add more services man 40+ 
];

const serviceCategories = [
  "Pest Control Specialist",
  "UV Technician",
  "Landscaper",
  "Photographer",
  "Office Cleaner",
  "Sports",
  "Electrician",
  "Cleaner",
  "Music",
  "TV Provider",
];

export const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[100vh] flex flex-col items-start bg-gradient-to-b from-emerald-400 to-cyan-400 pt-16">

        {/* Hero Heading Section */}
        <div className="hero-heading container mx-auto px-2 flex justify-start w-auto lg:w-auto lg:ml-[4rem] lg:mt-[-2rem] p-1">
  <div className="text-left text-white space-y-6 bg-white/10 backdrop-blur-sm p-3 w-fit h-auto mt-12 border border-white/30 rounded-[20px]">
    <h1 className="text-xl md:text-2xl font-bold leading-tight">
      YOUR HOME
      <br />
      OUR PRIORITY
    </h1>
    <p className="text-xs md:text-sm opacity-90 w-[220px] min-h-[6rem] h-auto leading-relaxed">
      Welcome to DOIT, your trusted partner for home maintenance. Whether you're a homeowner or renter,
      we provide reliable solutions for your needs, ensuring peace of mind with every task.
    </p>
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 h-auto text-sm">
        Book Service
      </Button>
      <a href="#" className="text-red-700 hover:text-red-800 transition-colors underline text-sm">
        Get a Free Quote
      </a>
    </div>
  </div>
</div>





        {/* Hero Choose Section (Now Positioned Below the Hero Heading) */}
        <div className="hero-choose container mx-auto px-6 flex justify-center items-center w-full lg:w-[65%] pt-12 pb-8 bg-gray-100/80 backdrop-blur-sm rounded-3xl mb-12 lg:mt-[0rem]">
  <div className="w-full">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Now what you like to choose</h2>

    {/* Updated Search Bar with Filter */}
    <div className="relative mb-6">
      <div className="flex items-center bg-white rounded-md">
        <Input type="search" placeholder="Search services..." className="pl-4 pr-20 border-0" />
        <div className="absolute right-3 flex items-center space-x-2">
          <span className="text-sm text-gray-500">FILTER</span>
          <Search className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
      {serviceCategories.map((category) => (
        <span
          key={category}
          className="px-4 py-1.5 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
        >
          {category}
        </span>
      ))}
    </div>

    {/* Horizontal Scrolling with Marquee Animation */}
    <div className="services-wrapper overflow-x-auto w-full pb-6">
      {/* Service cards with horizontal scrolling */}
      <div className="flex gap-6 animate-marquee">
        {services.map((service) => (
          <div
            key={service.name}
            className="bg-white rounded-xl p-4 text-center cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-gray-800 font-medium">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      </section>
    </>
  );
};
