
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PricingContent } from '@/components/pricing';
import { Package } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import PackageNavButtons from '@/components/pricing/PackageNavButtons';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-grow pt-28">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="bg-gradient-to-br from-[#ea384c]/10 to-[#ea384c]/20 p-3 rounded-full shadow-inner">
                <Package className="h-8 w-8 text-[#ea384c] drop-shadow-sm" />
              </div>
              <h1 className="text-3xl md:text-4xl font-light tracking-wide text-[#ea384c] font-serif">
                Packages & <span className="font-medium">Price Lists</span>
              </h1>
            </div>
            
            <Separator className="my-4 mx-auto bg-gradient-to-r from-transparent via-[#ea384c]/30 to-transparent h-0.5 w-56" />
            
            <p className="text-slate-600 max-w-2xl mx-auto text-center font-light italic">
              "Explore our tailored photography packages, crafted with precision and artistry 
              to capture your most cherished moments with exceptional quality."
            </p>
          </div>
          
          {/* Updated Package Navigation Buttons using the new MenuBar component */}
          <PackageNavButtons />
          
          {/* Detailed Pricing Tabs */}
          <div className="mt-16">
            <PricingContent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
