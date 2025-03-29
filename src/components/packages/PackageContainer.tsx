
import React from 'react';
import CorporateHeadshotsFAQ from '@/components/CorporateHeadshotsFAQ';
import ServicesFAQ from '@/components/ServicesFAQ';
import PackageHeader from '@/components/packages/PackageHeader';
import PackageList from '@/components/packages/PackageList';
import { packageList } from '@/utils/packageData';
import PackageLoader from '@/components/packages/PackageLoader';
import { shouldShowGeneralFAQ } from '@/services/packageService';

interface PackageContainerProps {
  packageId: string | undefined;
  packageTitle: string;
  onNavigate: (packageId: string) => void;
}

const PackageContainer: React.FC<PackageContainerProps> = ({ 
  packageId, 
  packageTitle,
  onNavigate
}) => {
  const showGeneralFAQ = shouldShowGeneralFAQ(packageId);
  
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl">
      <PackageHeader title={packageTitle} />
      
      <div className="package-container animate-fadeIn">
        <PackageLoader packageId={packageId} />
      </div>
      
      {packageId === 'corporate' ? (
        <div className="mt-12">
          <CorporateHeadshotsFAQ />
        </div>
      ) : showGeneralFAQ && (
        <div className="mt-12">
          <ServicesFAQ />
        </div>
      )}
      
      <PackageList 
        packageList={packageList} 
        currentPackageId={packageId || ''} 
        onPackageSelect={onNavigate}
      />
    </div>
  );
};

export default PackageContainer;
