
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Baby, Users, Camera, CalendarDays } from 'lucide-react';

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
  const packages = [
    {
      title: "Wedding Photography",
      icon: <Camera size={20} />,
      path: "/packages/wedding",
    },
    {
      title: "Event Coverage", 
      icon: <CalendarDays size={20} />,
      path: "/packages/event",
    },
    {
      title: "Family Portraits",
      icon: <Users size={20} />,
      path: "/packages/family",
    },
    {
      title: "Maternity Photography",
      icon: <Baby size={20} />,
      path: "/packages/maternity",
    },
    {
      title: "New Born & Children",
      icon: <Baby size={20} />,
      path: "/packages/new-born",
    }
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-12 mb-20">
      {packages.map((pkg, index) => (
        <PackageButton 
          key={index}
          title={pkg.title}
          icon={pkg.icon}
          path={pkg.path}
        />
      ))}
    </div>
  );
};

export default PackageNavButtons;
