
import React from 'react';
import { DollarSign } from 'lucide-react';

const EventPackageHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="w-full h-64 bg-white rounded-md col-span-3 md:col-span-2 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-10">
          <DollarSign className="h-28 w-28 text-[#ea384c]" strokeWidth={1} />
          <p className="text-xl font-semibold text-primary mt-4">Premium Event Photography Services</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <img 
          src="/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png" 
          alt="South Indian family in traditional ceremony attire" 
          className="w-full h-[120px] object-cover rounded-md"
        />
        <img 
          src="/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png" 
          alt="Event Photography" 
          className="w-full h-[120px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default EventPackageHeader;
