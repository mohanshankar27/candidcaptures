
import { useLocation } from 'react-router-dom';
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

interface NavbarDesktopMenuProps {
  navItems: NavItem[];
  services: ServiceItem[];
  handleServiceClick: (service: ServiceItem) => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => void;
  isActive: (path: string) => boolean;
}

const NavbarDesktopMenu = ({ 
  navItems, 
  services, 
  handleServiceClick, 
  handleNavClick, 
  isActive 
}: NavbarDesktopMenuProps) => {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-serif italic transition-colors focus:bg-accent focus:text-accent-foreground focus:outline-none",
              isActive(item.href) ? "text-[#003c72] font-bold" : "hover:text-primary"
            )}
            onClick={(e) => handleNavClick(e, item)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavbarDesktopMenu;
