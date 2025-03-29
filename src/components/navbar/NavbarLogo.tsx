
import { useNavigate } from 'react-router-dom';

interface NavbarLogoProps {
  handleLogoClick: () => void;
}

const NavbarLogo = ({ handleLogoClick }: NavbarLogoProps) => {
  return (
    <button 
      onClick={handleLogoClick}
      className="flex items-center focus:outline-none"
    >
      <img 
        src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
        alt="Candid Capture Photography" 
        className="h-16 w-auto object-contain" 
        loading="eager"
        fetchPriority="high"
      />
    </button>
  );
};

export default NavbarLogo;
