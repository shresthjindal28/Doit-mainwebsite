
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calendar, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/#', target: 'top', icon: Home },
  { name: 'Bids', path: '/#bids', target: 'bids', icon: Calendar },
  { name: 'About', path: '/#about', target: 'about', icon: Info },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Need a small delay to allow navigation to complete before scrolling
      setTimeout(() => {
        scrollToElement(target);
      }, 100);
    } else {
      scrollToElement(target);
    }
    setMobileMenuOpen(false);
  };

  const scrollToElement = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePlaceBid = () => {
    console.log("Place a bid clicked");
    scrollToElement('bids');
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="page-container">
        <div className="flex items-center justify-between">
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.target)}
                className="flex items-center space-x-1 text-sm font-medium transition-colors text-foreground/80 hover:text-foreground"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          <Button 
            size="sm" 
            className="ml-auto rounded-full btn-hover-effect" 
            onClick={handlePlaceBid}
          >
            Place a Bid
          </Button>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden ml-4" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 top-16 bg-background z-40 transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6 p-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex items-center space-x-3 px-3 py-2 text-lg font-medium transition-colors text-foreground/80 hover:text-foreground"
              onClick={(e) => handleNavClick(e, item.target)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </a>
          ))}
          <Button 
            className="mt-6 w-full rounded-full btn-hover-effect" 
            onClick={handlePlaceBid}
          >
            Place a Bid
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
