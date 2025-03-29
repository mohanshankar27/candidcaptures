
import React, { useEffect, lazy, Suspense } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesFAQ from '@/components/ServicesFAQ';
import CorporateHeadshotsFAQ from '@/components/CorporateHeadshotsFAQ';
import PackageHeader from '@/components/packages/PackageHeader';
import PackageBreadcrumb from '@/components/packages/PackageBreadcrumb';
import PackageNavigation from '@/components/packages/PackageNavigation';
import PackageList from '@/components/packages/PackageList';

import { packageList } from '@/utils/packageData';
import { getPackageTitle, getAdjacentPackages, shouldShowGeneralFAQ } from '@/services/packageService';

// Lazy load package components
const NewBornPackage = lazy(() => import('@/components/packages/NewBornPackage'));
const WeddingPackage = lazy(() => import('@/components/packages/WeddingPackage'));
const FamilyPackage = lazy(() => import('@/components/packages/FamilyPackage'));
const CorporatePackage = lazy(() => import('@/components/packages/CorporatePackage'));
const MaternityPackage = lazy(() => import('@/components/packages/MaternityPackage'));
const MatrimonialPackage = lazy(() => import('@/components/packages/MatrimonialPackage'));
const ModellingPackage = lazy(() => import('@/components/packages/ModellingPackage'));
const EventPackage = lazy(() => import('@/components/packages/EventPackage'));

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

  const { prevPackage, nextPackage } = getAdjacentPackages(packageId);
  const packageTitle = getPackageTitle(packageId);
  const showGeneralFAQ = shouldShowGeneralFAQ(packageId);

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <PackageBreadcrumb packageTitle={packageTitle} />
          
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="hover:bg-primary/10" 
              onClick={() => {
                navigate('/services');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Button>
            
            <PackageNavigation 
              prevPackage={prevPackage} 
              nextPackage={nextPackage} 
              onNavigate={handlePackageNavigation}
            />
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-primary/10 transition-all duration-300 hover:shadow-xl">
            <PackageHeader title={packageTitle} />
            
            <div className="package-container animate-fadeIn">
              <Suspense fallback={
                <div className="flex items-center justify-center p-12">
                  <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                </div>
              }>
                {renderPackageComponent()}
              </Suspense>
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
              onPackageSelect={handlePackageNavigation}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PackageDetails;
