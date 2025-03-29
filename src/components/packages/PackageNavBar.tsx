
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PackageBreadcrumb from '@/components/packages/PackageBreadcrumb';
import PackageNavigation from '@/components/packages/PackageNavigation';
import { PackageItem } from '@/utils/packageData';

interface PackageNavBarProps {
  packageTitle: string;
  prevPackage: PackageItem | null;
  nextPackage: PackageItem | null;
  onBack: () => void;
  onNavigate: (packageId: string) => void;
}

const PackageNavBar: React.FC<PackageNavBarProps> = ({
  packageTitle,
  prevPackage,
  nextPackage,
  onBack,
  onNavigate
}) => {
  return (
    <>
      <PackageBreadcrumb packageTitle={packageTitle} />
      
      <div className="flex justify-between items-center mb-6">
        <Button 
          variant="outline" 
          size="sm" 
          className="hover:bg-primary/10" 
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Button>
        
        <PackageNavigation 
          prevPackage={prevPackage} 
          nextPackage={nextPackage} 
          onNavigate={onNavigate}
        />
      </div>
    </>
  );
};

export default PackageNavBar;
