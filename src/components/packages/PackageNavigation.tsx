
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PackageNavigationProps {
  prevPackage: { id: string; title: string } | null;
  nextPackage: { id: string; title: string } | null;
  onNavigate: (packageId: string) => void;
}

const PackageNavigation: React.FC<PackageNavigationProps> = ({ 
  prevPackage, 
  nextPackage, 
  onNavigate 
}) => {
  return (
    <div className="hidden md:flex items-center gap-2">
      {prevPackage && (
        <Button
          variant="ghost"
          size="sm"
          className="text-xs"
          onClick={() => onNavigate(prevPackage.id)}
        >
          <ArrowLeft className="mr-1 h-3 w-3" /> {prevPackage.title}
        </Button>
      )}
      
      {nextPackage && (
        <Button
          variant="ghost"
          size="sm"
          className="text-xs"
          onClick={() => onNavigate(nextPackage.id)}
        >
          {nextPackage.title} <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default PackageNavigation;
