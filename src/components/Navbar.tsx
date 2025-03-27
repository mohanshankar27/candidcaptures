import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import OnlineStatusBadge from './OnlineStatusBadge';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    { name: 'Wedding Photography' },
    { name: 'Product shoot' },
    { name: 'Makeup shoot' },
    { name: 'Concept shoot' },
    { name: 'Maternity shoot' },
    { name: 'Newborn shoot' },
    { name: 'Naming Ceremony' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Package', href: '/pricing' },
    { name: 'About', href: '/#about' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const handleServiceClick = (service) => {
    if (service.external && service.href) {
      window.open(service.href, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      return;
    }
    
    navigate('/services');
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => {
    if (path.startsWith('/#')) {
      return false;
    }
    return location.pathname === path;
  };

  const handleNavClick = (e, item) => {
    e.preventDefault();
    
    if (item.href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (item.href.startsWith('/#')) {
      if (location.pathname === '/') {
        const sectionId = item.href.substring(2);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const sectionId = item.href.substring(2);
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Regular page navigation
      navigate(item.href);
    }
  };

  return (
    <nav className="fixed w-full bg-background/90 backdrop-blur-sm z-50 shadow-sm border-b">
      <div className="w-full flex justify-between items-center h-28 px-0">
        <button 
          onClick={handleLogoClick}
          className="flex items-center focus:outline-none pl-4"
        >
          <img 
            src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
            alt="Candid Capture Photography" 
            className="h-48 w-auto object-contain" 
            loading="eager"
          />
        </button>

        <div className="hidden lg:flex items-center space-x-8 pr-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 transition-colors text-base font-medium font-serif italic ${
                isActive(item.href) ? 'text-[#003c72] font-bold' : 'hover:text-primary'
              }`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.name}
            </a>
          ))}
          <OnlineStatusBadge />
        </div>

        <div className="lg:hidden flex items-center pr-4">
          <OnlineStatusBadge />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-primary transition-colors ml-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden pb-6 animate-fadeIn bg-background/95 backdrop-blur-sm">
          <div className="py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 py-2 transition-colors text-base font-serif italic ${
                  isActive(item.href) ? 'text-[#003c72] font-bold' : 'hover:text-primary'
                }`}
                onClick={(e) => {
                  handleNavClick(e, item);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
