import { useState } from 'react';
import { Menu, X, Home, Camera, Heart, Users, ShoppingBag } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleServiceClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-semibold text-primary">
            Candid Moments
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <Menubar className="border-none bg-transparent">
              <MenubarMenu>
                <MenubarTrigger className="font-normal cursor-pointer">
                  Services
                </MenubarTrigger>
                <MenubarContent className="bg-white">
                  {services.map((service) => (
                    <MenubarItem
                      key={service.name}
                      className="flex items-center gap-2 cursor-pointer text-gray-800 hover:text-primary hover:bg-secondary"
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
                className="flex items-center gap-2 text-gray-800 hover:text-primary transition-colors"
              >
                {item.icon && item.icon}
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            {/* Mobile Services Menu */}
            <div className="py-2">
              <div className="font-medium mb-2 text-gray-800">Services</div>
              {services.map((service) => (
                <a
                  key={service.name}
                  href="#contact"
                  className="flex items-center gap-2 py-1 pl-4 text-gray-800 hover:text-primary transition-colors"
                  onClick={handleServiceClick}
                >
                  {service.icon}
                  {service.name}
                </a>
              ))}
            </div>
            {/* Regular Navigation Items */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 py-2 text-gray-800 hover:text-primary transition-colors"
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