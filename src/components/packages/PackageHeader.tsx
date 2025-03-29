
import React from 'react';
import { Package } from 'lucide-react';

interface PackageHeaderProps {
  title: string;
}

const PackageHeader: React.FC<PackageHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
      <Package className="h-6 w-6 text-[#ea384c]" />
      <h1 className="text-3xl font-light text-[#ea384c]">{title}</h1>
    </div>
  );
};

export default PackageHeader;
