
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavbarMobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavbarMobileMenuButton = ({ isOpen, setIsOpen }: NavbarMobileMenuButtonProps) => {
  return (
    <div className="lg:hidden flex items-center">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-transparent hover:bg-gray-100 text-gray-800"
        size="icon"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
    </div>
  );
};

export default NavbarMobileMenuButton;
