
import React from 'react';
import { Package } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface PackageHeaderProps {
  title: string;
}

const PackageHeader: React.FC<PackageHeaderProps> = ({ title }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <Package className="h-6 w-6 text-[#ea384c]" />
        <h2 className="text-2xl md:text-3xl font-bold text-[#003c72]">
          {title}
        </h2>
      </div>
      <Separator className="bg-slate-200" />
    </div>
  );
};

export default PackageHeader;
