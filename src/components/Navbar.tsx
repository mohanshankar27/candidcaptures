
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    { name: 'Wedding Photography', href: '/services#wedding' },
    { name: 'Product shoot', href: '/services#product' },
    { name: 'Makeup shoot', href: '/services#makeup' },
    { name: 'Concept shoot', href: '/services#concept' },
    { name: 'Maternity shoot', href: '/services#maternity' },
    { name: 'Newborn shoot', href: '/services#newborn' },
    { name: 'Naming Ceremony', href: '/services#naming' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Package', href: '/pricing' },
    { name: 'About', href: '/about' },
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
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
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
            fetchPriority="high"
          />
        </button>

        <div className="hidden lg:block pr-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={item.name}>
                  {item.name === 'Services' ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          "text-base font-serif italic font-medium",
                          isActive(item.href) ? "text-[#003c72] font-bold" : "hover:text-primary"
                        )}
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {services.map((service) => (
                            <li key={service.name}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={service.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  onClick={() => handleServiceClick(service)}
                                >
                                  <div className="text-sm font-medium leading-none">{service.name}</div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={cn(
                        "flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-serif italic transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none",
                        isActive(item.href) ? "text-[#003c72] font-bold" : "hover:text-primary"
                      )}
                      onClick={(e) => handleNavClick(e, item)}
                    >
                      {item.name}
                    </a>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="lg:hidden flex items-center pr-4">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-transparent hover:bg-gray-100 text-gray-800"
            size="icon"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden pb-6 animate-fadeIn shadow-lg bg-white">
          <div className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.name === 'Services' ? (
                  <div className="space-y-2">
                    <button
                      className={cn(
                        "flex items-center justify-between w-full py-2 transition-colors text-base font-serif italic",
                        isActive(item.href) ? "text-[#003c72] font-bold" : "hover:text-primary"
                      )}
                      onClick={() => {
                        navigate(item.href);
                        setIsOpen(false);
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block py-1 text-sm hover:text-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            handleServiceClick(service);
                            setIsOpen(false);
                          }}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "block py-2 transition-colors text-base font-serif italic",
                      isActive(item.href) ? "text-[#003c72] font-bold" : "hover:text-primary"
                    )}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
