
import { useState } from 'react';
import { Menu, X, Home, Camera, Heart, Users, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { name: 'Wedding Photography', icon: <Heart className="w-4 h-4" /> },
    { name: 'Pre-wedding photoshoot', icon: <Heart className="w-4 h-4" /> },
    { name: 'E-commerce shoot', icon: <ShoppingBag className="w-4 h-4" /> },
    { name: 'Model shoot', icon: <Users className="w-4 h-4" /> },
    { name: 'Product shoot', icon: <ShoppingBag className="w-4 h-4" /> },
    { name: 'Makeup shoot', icon: <Camera className="w-4 h-4" /> },
    { name: 'Concept shoot', icon: <Camera className="w-4 h-4" /> },
    { name: 'Maternity shoot', icon: <Heart className="w-4 h-4" /> },
    { name: 'Newborn shoot', icon: <Heart className="w-4 h-4" /> },
    { name: 'Naming Ceremony', icon: <Heart className="w-4 h-4" /> },
  ];

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleServiceClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };

  return (
    <nav className="fixed w-full bg-background/90 backdrop-blur-sm z-50 shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={handleLogoClick}
            className="flex items-center focus:outline-none"
          >
            <img 
              src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
              alt="Candid Capture Photography" 
              className="h-12 w-auto"
            />
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <Menubar className="border-none bg-transparent">
              <MenubarMenu>
                <MenubarTrigger className="font-medium cursor-pointer text-base">
                  Services
                </MenubarTrigger>
                <MenubarContent className="bg-background/95 backdrop-blur-sm border rounded-xl">
                  {services.map((service) => (
                    <MenubarItem
                      key={service.name}
                      className="flex items-center gap-2 cursor-pointer hover:text-primary hover:bg-secondary p-3 text-base"
                      onClick={handleServiceClick}
                    >
                      {service.icon}
                      {service.name}
                    </MenubarItem>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 hover:text-primary transition-colors text-base font-medium"
              >
                {item.icon && item.icon}
                {item.name}
              </a>
            ))}
            
            <ThemeToggle />
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 animate-fadeIn bg-background/95 backdrop-blur-sm">
            <div className="py-4">
              <div className="font-medium mb-2 text-lg">Services</div>
              {services.map((service) => (
                <a
                  key={service.name}
                  href="#contact"
                  className="flex items-center gap-2 py-2 pl-4 hover:text-primary transition-colors"
                  onClick={handleServiceClick}
                >
                  {service.icon}
                  {service.name}
                </a>
              ))}
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 py-2 hover:text-primary transition-colors text-base"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && item.icon}
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
