import { cn } from "@/lib/utils";
import useNavigation from './useNavigation';
import NavbarLogo from './NavbarLogo';
import NavbarDesktopMenu from './NavbarDesktopMenu';
import NavbarMobileMenuButton from './NavbarMobileMenuButton';
import NavbarMobileMenu from './NavbarMobileMenu';

const Navbar = () => {
  const {
    isOpen,
    setIsOpen,
    scrolled,
    handleServiceClick,
    handleLogoClick,
    isActive,
    handleNavClick
  } = useNavigation();

  // Keep services array for mobile menu
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

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md" 
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4">
        <NavbarLogo handleLogoClick={handleLogoClick} />
        
        <NavbarDesktopMenu 
          navItems={navItems}
          services={services}
          handleServiceClick={handleServiceClick}
          handleNavClick={handleNavClick}
          isActive={isActive}
        />

        <NavbarMobileMenuButton 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
        />
      </div>

      <NavbarMobileMenu
        isOpen={isOpen}
        navItems={navItems}
        services={services}
        isActive={isActive}
        handleNavClick={handleNavClick}
        handleServiceClick={handleServiceClick}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
};

export default Navbar;
