import React from 'react';
import { Check, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import PackageImageCarousel from '../packages/PackageImageCarousel';

const CorporatePackage: React.FC = () => {
  // Define corporate package images for the carousel
  const corporateImages = [
    '/lovable-uploads/b0d50296-3c5f-41b2-afcf-af58d024d712.png',
    '/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png'
  ];

  return (
    <div className="package-details">
      {/* Add the image carousel component */}
      <PackageImageCarousel images={corporateImages} altPrefix="Corporate Headshot" />
      
      <div className="space-y-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#333333]">Corporate Headshot Packages</h3>
          <p className="mb-4 text-slate-600 text-lg">
            Professional headshots for business profiles, websites, and marketing materials. Choose the package 
            that best suits your team's requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* BASIC PACKAGE */}
          <Card className="overflow-hidden border-slate-200 hover:shadow-md transition-all">
            <CardHeader className="bg-slate-50 p-6 text-center border-b border-slate-200">
              <h4 className="text-2xl uppercase font-medium tracking-wide text-slate-800 mb-2">Mini</h4>
              <div className="line-through text-slate-500 text-sm">₹8,890/- inclusive of GST</div>
              <div className="font-medium text-[#ea384c] mt-1">Now at <span className="text-2xl font-semibold">₹7,550 +GST</span></div>
              <div className="mt-3 text-xs text-slate-600 bg-slate-100 p-2 rounded-md">
                Additional <span className="font-medium text-[#ea384c]">15% Discount</span> applicable if all team members are above 5 persons
                <div className="text-xs mt-1">(i.e. ₹6,417 +GST)</div>
              </div>
              <button className="mt-4 bg-[#ea384c] text-white rounded-full px-6 py-2.5 text-sm hover:bg-[#ea384c]/90 transition-colors w-full">
                Schedule Online
              </button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Studio Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, at our studio
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">15 - 30 mins per person</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Look Changes:</span>
                  <span className="text-sm text-slate-600">Max 1</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Props:</span>
                  <span className="text-sm text-slate-600">Minimal</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Photos Delivered:</span>
                  <span className="text-sm text-slate-600">3 (full res)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600">₹300/image</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Hard Copies:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No (digital files only)
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* STANDARD PACKAGE */}
          <Card className="overflow-hidden border-[#ea384c]/20 shadow-md hover:shadow-lg transition-all relative">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-4 py-1 bg-[#ea384c] text-white text-sm rounded-full font-medium">
              Most Popular
            </div>
            <CardHeader className="bg-slate-50 p-6 text-center border-b border-slate-200">
              <h4 className="text-2xl uppercase font-medium tracking-wide text-slate-800 mb-2">Classic</h4>
              <div className="line-through text-slate-500 text-sm">₹13,500/- inclusive of GST</div>
              <div className="font-medium text-[#ea384c] mt-1">Now at <span className="text-2xl font-semibold">₹11,475 +GST</span></div>
              <div className="mt-3 text-xs text-slate-600 bg-slate-100 p-2 rounded-md">
                Additional <span className="font-medium text-[#ea384c]">15% Discount</span> applicable if all team members are above 5 persons
                <div className="text-xs mt-1">(i.e. ₹9,754 +GST)</div>
              </div>
              <button className="mt-4 bg-[#ea384c] text-white rounded-full px-6 py-2.5 text-sm hover:bg-[#ea384c]/90 transition-colors w-full">
                Call us on: +919632288815
              </button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Studio Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, at our studio
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">30 - 45 mins per person</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Look Changes:</span>
                  <span className="text-sm text-slate-600">Max 2</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Props:</span>
                  <span className="text-sm text-slate-600">Basic Professional Setup</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Photos Delivered:</span>
                  <span className="text-sm text-slate-600">5 (full res)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600">₹250/image</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Hard Copies:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, starting ₹350/- per print (min 5)
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600">Optional, starting ₹3,750/-</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Retouching:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, professional level
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PREMIUM PACKAGE */}
          <Card className="overflow-hidden border-slate-200 hover:shadow-md transition-all">
            <CardHeader className="bg-slate-50 p-6 text-center border-b border-slate-200">
              <h4 className="text-2xl uppercase font-medium tracking-wide text-slate-800 mb-2">Signature & On Location</h4>
              <div className="font-medium text-[#ea384c] mt-1">Fully Customized Plan Starting <span className="text-2xl font-semibold">₹17,500 +GST</span></div>
              <div className="mt-3 text-xs text-slate-600 bg-slate-100 p-2 rounded-md">
                For large corporate teams and executive suites
                <div className="text-xs mt-1 italic">Actual price based on Team Size/Location/Requirements</div>
              </div>
              <button className="mt-4 bg-[#ea384c] text-white rounded-full px-6 py-2.5 text-sm hover:bg-[#ea384c]/90 transition-colors w-full">
                Let us plan everything
              </button>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Studio Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes (our or any 3rd party location)
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, optional
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">As needed</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Look Changes:</span>
                  <span className="text-sm text-slate-600">As discussed</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Props:</span>
                  <span className="text-sm text-slate-600">Our / rental / company's assets</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Photos Delivered:</span>
                  <span className="text-sm text-slate-600">8+ per person (full res)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600">₹200/image</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Location/Prop Charges:</span>
                  <span className="text-sm text-slate-600">At actuals</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600">Optional, starting ₹3,750/-</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Planning:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, detailed consultation
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-12" />
        
        {/* Photo Gallery Section - Added to replace FAQ section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-8 text-center text-[#333333]">Sample Corporate Headshots</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
              <img 
                src="/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png" 
                alt="Corporate Headshot Sample 1" 
                className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
              <img 
                src="/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png" 
                alt="Corporate Headshot Sample 2" 
                className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
              <img 
                src="/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png" 
                alt="Corporate Headshot Sample 3" 
                className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
              <img 
                src="/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png" 
                alt="Corporate Headshot Sample 4" 
                className="w-full h-64 object-cover object-center hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-slate-50 to-white p-8 border border-[#ea384c]/20 rounded-lg mt-8 text-center">
          <h3 className="text-2xl font-medium mb-4 text-[#ea384c]">Ready to elevate your team's professional image?</h3>
          <p className="text-slate-600 mb-6 text-lg max-w-2xl mx-auto">
            Contact us to schedule a consultation and discuss your specific corporate photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919632288815" className="inline-flex items-center justify-center gap-2 bg-[#ea384c] text-white px-6 py-3 rounded-md hover:bg-[#ea384c]/90 transition-colors">
              Call Us: +91 96322 88815
            </a>
            <a href="mailto:candidcapture4@gmail.com" className="inline-flex items-center justify-center gap-2 bg-white border border-[#ea384c] text-[#ea384c] px-6 py-3 rounded-md hover:bg-[#ea384c]/5 transition-colors">
              Email: candidcapture4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePackage;
