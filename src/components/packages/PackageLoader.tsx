
import React from 'react';

// Direct imports instead of lazy-loading
import NewBornPackage from '@/components/packages/NewBornPackage';
import WeddingPackage from '@/components/packages/WeddingPackage';
import FamilyPackage from '@/components/packages/FamilyPackage';
import CorporatePackage from '@/components/packages/CorporatePackage';
import MaternityPackage from '@/components/packages/MaternityPackage';
import MatrimonialPackage from '@/components/packages/MatrimonialPackage';
import ModellingPackage from '@/components/packages/ModellingPackage';
import EventPackage from '@/components/packages/EventPackage';

interface PackageLoaderProps {
  packageId: string | undefined;
}

const PackageLoader: React.FC<PackageLoaderProps> = ({ packageId }) => {
  const renderPackageComponent = () => {
    switch (packageId) {
      case 'new-born':
        return <NewBornPackage />;
      case 'wedding':
        return <WeddingPackage />;
      case 'family':
        return <FamilyPackage />;
      case 'corporate':
        return <CorporatePackage />;
      case 'maternity':
        return <MaternityPackage />;
      case 'matrimonial':
        return <MatrimonialPackage />;
      case 'modelling':
        return <ModellingPackage />;
      case 'event':
        return <EventPackage />;
      default:
        return (
          <div className="text-center p-8">
            <p className="text-slate-500">Package details coming soon.</p>
          </div>
        );
    }
  };

  return (
    <>
      {renderPackageComponent()}
    </>
  );
};

export default PackageLoader;
