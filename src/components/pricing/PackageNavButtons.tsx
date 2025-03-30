import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Baby, Users, Camera, CalendarDays, Package } from 'lucide-react';
import { MenuBar } from "@/components/ui/menu-bar";

interface PackageButtonProps {
  title: string;
  icon: React.ReactNode;
  path: string;
  className?: string;
}

const PackageButton = ({ title, icon, path, className = "" }: PackageButtonProps) => {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate(path)}
      className={`relative flex items-center justify-center h-16 px-8 py-3 text-indigo-800 bg-white rounded-full hover:shadow-lg transition-all duration-300 ${className}`}
      style={{
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        borderWidth: '1px',
        borderColor: 'rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-[#ea384c]">{icon}</span>
        <span className="text-lg font-serif font-medium">{title}</span>
      </div>
    </button>
  );
};

const PackageNavButtons: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>(() => {
    if (location.pathname.includes('/wedding')) return "Wedding Photography";
    if (location.pathname.includes('/event')) return "Event Coverage";
    if (location.pathname.includes('/family')) return "Family Portraits";
    if (location.pathname.includes('/maternity')) return "Maternity Photography";
    if (location.pathname.includes('/new-born')) return "New Born & Children";
    return "";
  });
  
  const menuItems = [
    {
      icon: Camera,
      label: "Wedding Photography",
      href: "/packages/wedding",
      gradient:
        "radial-gradient(circle, rgba(234,56,76,0.15) 0%, rgba(234,56,76,0.06) 50%, rgba(194,25,25,0) 100%)",
      iconColor: "text-[#ea384c]",
    },
    {
      icon: CalendarDays,
      label: "Event Coverage", 
      href: "/packages/event",
      gradient:
        "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-orange-500",
    },
    {
      icon: Users,
      label: "Family Portraits",
      href: "/packages/family",
      gradient:
        "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-green-500",
    },
    {
      icon: Baby,
      label: "Maternity Photography",
      href: "/packages/maternity",
      gradient:
        "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(109,40,217,0.06) 50%, rgba(91,33,182,0) 100%)",
      iconColor: "text-purple-500",
    },
    {
      icon: Baby,
      label: "New Born & Children",
      href: "/packages/new-born",
      gradient:
        "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    }
  ];
  
  const handleItemClick = (label: string) => {
    setActiveItem(label);
    const item = menuItems.find(item => item.label === label);
    if (item) {
      navigate(item.href);
    }
  };
  
  return (
    <div className="mt-12 mb-20">
      <MenuBar
        className="w-full max-w-3xl mx-auto"
        items={menuItems}
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default PackageNavButtons;
