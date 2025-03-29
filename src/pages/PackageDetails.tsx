
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageContainer from '@/components/packages/PackageContainer';
import PackageNavBar from '@/components/packages/PackageNavBar';
import { getPackageTitle, getAdjacentPackages } from '@/services/packageService';

const PackageDetails: React.FC = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [packageId]);

  const handlePackageNavigation = (packageId: string) => {
    navigate(`/packages/${packageId}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const navigateToServices = () => {
    navigate('/services');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const { prevPackage, nextPackage } = getAdjacentPackages(packageId);
  const packageTitle = getPackageTitle(packageId);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <PackageNavBar 
            packageTitle={packageTitle}
            prevPackage={prevPackage}
            nextPackage={nextPackage}
            onBack={navigateToServices}
            onNavigate={handlePackageNavigation}
          />
          
          <PackageContainer
            packageId={packageId}
            packageTitle={packageTitle}
            onNavigate={handlePackageNavigation}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetails;
