
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

interface ServiceItem {
  name: string;
  href: string;
  external?: boolean;
}

interface NavbarMobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  services: ServiceItem[];
  isActive: (path: string) => boolean;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => void;
  handleServiceClick: (service: ServiceItem) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const NavbarMobileMenu = ({ 
  isOpen,
  navItems,
  services,
  isActive,
  handleNavClick,
  handleServiceClick,
  setIsOpen
}: NavbarMobileMenuProps) => {
  if (!isOpen) return null;

  return (
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
                    setIsOpen(false);
                    handleNavClick(
                      { preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>, 
                      item
                    );
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
  );
};

export default NavbarMobileMenu;
