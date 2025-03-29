
import React, { lazy, Suspense } from 'react';

// Lazy load package components
const NewBornPackage = lazy(() => import('@/components/packages/NewBornPackage'));
const WeddingPackage = lazy(() => import('@/components/packages/WeddingPackage'));
const FamilyPackage = lazy(() => import('@/components/packages/FamilyPackage'));
const CorporatePackage = lazy(() => import('@/components/packages/CorporatePackage'));
const MaternityPackage = lazy(() => import('@/components/packages/MaternityPackage'));
const MatrimonialPackage = lazy(() => import('@/components/packages/MatrimonialPackage'));
const ModellingPackage = lazy(() => import('@/components/packages/ModellingPackage'));
const EventPackage = lazy(() => import('@/components/packages/EventPackage'));

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
    <Suspense fallback={
      <div className="flex items-center justify-center p-12">
        <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    }>
      {renderPackageComponent()}
    </Suspense>
  );
};

export default PackageLoader;
