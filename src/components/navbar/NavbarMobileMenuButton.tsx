
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
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent hover:bg-amber-50/80 text-gray-800 p-3 touch-action-manipulation relative overflow-hidden"
          size="icon"
          aria-label="Toggle menu"
        >
          <motion.div
            initial={false}
            animate={{ 
              rotate: isOpen ? 90 : 0, // Reduced animation complexity
              scale: isOpen ? 0.9 : 1
            }}
            transition={{ duration: 0.2, type: "tween" }} // Simplified animation for better performance
            className="absolute inset-0 flex items-center justify-center"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-amber-100/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </motion.div>
    </div>
  );
};

export default NavbarMobileMenuButton;
