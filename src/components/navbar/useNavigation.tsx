
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  name: string;
  href: string;
  external?: boolean;
}

export const useNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleServiceClick = (service: ServiceItem) => {
    if (service.external && service.href) {
      window.open(service.href, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      return;
    }
    
    navigate('/services');
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return false;
    }
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    
    if (item.href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (item.href.startsWith('/#')) {
      if (location.pathname === '/') {
        const sectionId = item.href.substring(2);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const sectionId = item.href.substring(2);
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Regular page navigation
      navigate(item.href);
    }
  };

  return {
    isOpen,
    setIsOpen,
    scrolled,
    handleServiceClick,
    handleLogoClick,
    isActive,
    handleNavClick
  };
};

export default useNavigation;
