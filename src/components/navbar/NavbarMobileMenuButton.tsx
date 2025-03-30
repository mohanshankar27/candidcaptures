
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

interface NavbarMobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavbarMobileMenuButton = ({ isOpen, setIsOpen }: NavbarMobileMenuButtonProps) => {
  return (
    <div className="lg:hidden flex items-center">
      <motion.div
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent hover:bg-gray-100 text-gray-800 p-3 touch-action-manipulation"
          size="icon"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </motion.div>
    </div>
  );
};

export default NavbarMobileMenuButton;
