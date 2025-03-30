
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden pb-4 shadow-lg bg-white/95 backdrop-blur-sm border-b border-amber-100"
        >
          <div className="py-4 px-5 space-y-2">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-amber-50 last:border-0">
                {item.name === 'Services' ? (
                  <div className="space-y-2 py-1.5">
                    <motion.button
                      className={cn(
                        "flex items-center justify-between w-full py-3 transition-colors text-base font-arjulian",
                        isActive(item.href) ? "text-[#003c72] font-bold" : "hover:text-primary"
                      )}
                      onClick={() => {
                        setIsOpen(false);
                        handleNavClick(
                          { preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>, 
                          item
                        );
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </motion.button>
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 space-y-0 border-l-2 border-amber-200"
                    >
                      <div className="grid grid-cols-2 gap-x-2 gap-y-0">
                        {services.map((service) => (
                          <motion.a
                            key={service.name}
                            href={service.href}
                            className="block py-2.5 px-2 text-sm hover:text-primary touch-action-manipulation rounded-md hover:bg-amber-50/50 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              handleServiceClick(service);
                              setIsOpen(false);
                            }}
                            whileTap={{ scale: 0.97, backgroundColor: 'rgba(251,191,36,0.1)' }}
                          >
                            {service.name}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <motion.a
                    href={item.href}
                    className={cn(
                      "block py-3 transition-colors text-base font-arjulian touch-action-manipulation",
                      isActive(item.href) ? "text-[#003c72] font-bold" : "hover:text-primary"
                    )}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsOpen(false);
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobileMenu;
