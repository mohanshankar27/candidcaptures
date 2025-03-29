
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface PackageItem {
  id: string;
  title: string;
}

interface PackageListProps {
  packageList: PackageItem[];
  currentPackageId: string;
  onPackageSelect: (packageId: string) => void;
}

const PackageList: React.FC<PackageListProps> = ({ 
  packageList, 
  currentPackageId, 
  onPackageSelect 
}) => {
  return (
    <div className="mt-10 pt-8 border-t border-slate-200">
      <h3 className="text-xl font-medium mb-4 text-slate-800">Explore Other Photography Packages</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {packageList.map(pkg => (
          <Button
            key={pkg.id}
            variant={pkg.id === currentPackageId ? "default" : "outline"}
            size="sm"
            className={cn(
              "text-xs w-full justify-start",
              pkg.id === currentPackageId ? "bg-primary text-white" : "hover:bg-primary/10"
            )}
            onClick={() => onPackageSelect(pkg.id)}
          >
            {pkg.id === currentPackageId ? "• " : ""}{pkg.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PackageList;
