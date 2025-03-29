
import { useNavigate } from 'react-router-dom';
import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface ServiceItem {
  name: string;
  href: string;
  external?: boolean;
}

interface NavbarServiceDropdownProps {
  services: ServiceItem[];
  handleServiceClick: (service: ServiceItem) => void;
}

const NavbarServiceDropdown = ({ services, handleServiceClick }: NavbarServiceDropdownProps) => {
  return (
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
  );
};

export default NavbarServiceDropdown;
