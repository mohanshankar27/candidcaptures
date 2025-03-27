import React from 'react';
import { Check, X, Info, Star, Crown, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import PackageImageCarousel from '../packages/PackageImageCarousel';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { getPackageImages } from '@/components/slideshow/serviceImages';

const CorporatePackage: React.FC = () => {
  // Get corporate package images from our central image management
  const corporateImages = getPackageImages('Corporate', 'carousel');
  const galleryImages = getPackageImages('Corporate', 'gallery');

  return (
    <div className="package-details bg-white">
      {/* Hero section with premium styling */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] opacity-40"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A1F2C] leading-tight">
              Corporate <span className="text-[#ea384c]">Professionals</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-boulas">
              Professional portraits that elevate your brand and showcase your team's personality
            </p>
          </div>
        </div>
      </div>

      {/* Add the image carousel component with enhanced styling and new images */}
      <div className="max-w-6xl mx-auto mb-16 px-4">
        <PackageImageCarousel images={corporateImages} altPrefix="Corporate Professional" />
      </div>
      
      <div className="space-y-12 max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-[#1A1F2C]">Corporate Professional Packages</h3>
          <p className="mb-6 text-slate-600 text-lg font-boulas">
            Professional portraits for business profiles, websites, and marketing materials. Choose the package 
            that best suits your team's requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* BASIC PACKAGE */}
          <Card className="overflow-hidden border-none hover:shadow-xl transition-all duration-300 bg-white rounded-2xl shadow-md">
            <CardHeader className="bg-gradient-to-r from-white to-slate-50 p-8 text-center relative">
              <div className="absolute top-6 right-6">
                <Star className="h-5 w-5 text-[#ea384c]" />
              </div>
              <h4 className="text-2xl uppercase font-bold tracking-wide text-slate-800 mb-2">Mini</h4>
              
              <div className="mt-6 space-y-3">
                <div className="flex flex-col items-center">
                  <div className="text-sm text-slate-500 line-through">₹1,599 (inc. GST)</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#ea384c]/10 px-3 py-1 rounded-full text-[#ea384c] font-medium">Special Offer</span>
                    <span className="text-3xl font-bold text-slate-800">₹995</span>
                    <span className="text-sm text-slate-500">+GST</span>
                  </div>
                  <p className="text-sm mt-1 font-boulas">per image</p>
                </div>
                
                <div className="bg-gradient-to-r from-slate-50 to-white rounded-lg p-4 shadow-sm border border-slate-100">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center justify-center gap-1 cursor-help">
                          <span className="font-medium">Team Discount</span>
                          <Info className="h-4 w-4 text-slate-500" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs bg-white shadow-lg p-3 rounded-lg border border-slate-100">
                        <p>Additional 15% discount applied when booking for 5+ team members</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <div className="flex items-center justify-center mt-1">
                    <span className="text-[#ea384c] font-semibold">₹6,417</span>
                    <span className="text-sm text-slate-500 ml-1">+GST per person</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">(for 5+ people)</div>
                </div>
              </div>
              
              <button className="mt-6 bg-gradient-to-r from-[#ea384c] to-[#ea384c]/90 text-white rounded-full px-6 py-3 text-sm hover:shadow-lg transition-all w-full font-medium">
                Schedule Online
              </button>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Studio Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center font-boulas">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, at our studio
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center font-boulas">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600 font-boulas">5 - 10 mins per person</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Look Changes:</span>
                  <span className="text-sm text-slate-600 flex items-center font-boulas">
                    <X className="h-4 w-4 text-red-500 mr-1" /> Not allowed
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Props:</span>
                  <span className="text-sm text-slate-600 font-boulas">Minimal</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Photos Delivered:</span>
                  <span className="text-sm text-slate-600 font-boulas">3 (full res)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600 font-boulas">₹300/image</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Hard Copies:</span>
                  <span className="text-sm text-slate-600 flex items-center font-boulas">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No (digital files only)
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600 flex items-center font-boulas">
                    <X className="h-4 w-4 text-red-500 mr-1" /> Not available
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* STANDARD PACKAGE - Updated with Executive Headshot Session information */}
          <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 relative bg-white rounded-2xl scale-105 z-10">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-6 py-1.5 bg-gradient-to-r from-[#ea384c] to-[#ea384c]/80 text-white text-sm rounded-full font-semibold shadow-md">
              Most Popular
            </div>
            <CardHeader className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] p-8 text-center relative">
              <div className="absolute top-6 right-6">
                <Crown className="h-6 w-6 text-[#ea384c]" />
              </div>
              <h4 className="text-2xl uppercase font-bold tracking-wide text-slate-800 mb-2">Executive Headshot Session</h4>
              
              <div className="mt-6 space-y-3">
                <div className="flex flex-col items-center">
                  <div className="text-sm text-slate-500 line-through">Regular Price ₹9,950+GST</div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#ea384c]/10 px-3 py-1 rounded-full text-[#ea384c] font-medium">OFFER !!</span>
                    <span className="text-3xl font-bold text-slate-800">₹5,275</span>
                    <span className="text-sm text-slate-500">+GST</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-gradient-to-r from-[#ea384c] to-[#ea384c]/90 text-white rounded-full px-6 py-3 text-sm hover:shadow-lg transition-all w-full font-medium">
                Book Your Appointment
              </button>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Studio Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center font-boulas">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center font-boulas">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600 font-boulas">30 Mins - 45 Mins</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Costume Changes:</span>
                  <span className="text-sm text-slate-600 font-boulas">Yes (upto 2 changes)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Consultation:</span>
                  <span className="text-sm text-slate-600 font-boulas">Yes (basic 10-15 mins)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600 flex items-center font-boulas">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Deliverables:</span>
                  <span className="text-sm text-slate-600 font-boulas">10 fully edited images</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600 font-boulas">₹750/image</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PREMIUM PACKAGE */}
          <Card className="overflow-hidden border-none hover:shadow-xl transition-all duration-300 bg-white rounded-2xl shadow-md">
            <CardHeader className="bg-gradient-to-r from-white to-slate-50 p-8 text-center relative">
              <div className="absolute top-6 right-6">
                <Sparkles className="h-5 w-5 text-[#ea384c]" />
              </div>
              <h4 className="text-2xl uppercase font-bold tracking-wide text-slate-800 mb-2">Signature & On Location</h4>
              
              <div className="mt-6">
                <div className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] p-6 rounded-lg shadow-sm">
                  <div className="text-xl font-bold text-slate-800">Custom Pricing</div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-3xl font-bold text-[#ea384c]">₹17,500</span>
                    <span className="text-sm text-slate-500">+GST onwards</span>
                  </div>
                  <div className="mt-3 text-sm text-slate-600">
                    Tailored to your specific requirements
                    <div className="text-xs mt-1 italic">Price based on team size, location & needs</div>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-gradient-to-r from-[#ea384c] to-[#ea384c]/90 text-white rounded-full px-6 py-3 text-sm hover:shadow-lg transition-all w-full font-medium">
                Let us plan everything
              </button>
            </CardHeader>
            <CardContent className="p-8">
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
        
        <Separator className="my-16" />
        
        {/* Photo Gallery Section with updated images */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-10 text-center text-[#1A1F2C]">Sample Corporate Professionals</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
                <img 
                  src={image} 
                  alt={`Corporate Professional Sample ${index + 1}`} 
                  className="w-full h-64 md:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] p-10 rounded-2xl mt-12 text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-5 text-[#1A1F2C]">Ready to elevate your team's professional image?</h3>
          <p className="text-slate-700 mb-8 text-lg max-w-2xl mx-auto font-boulas">
            Contact us to schedule a consultation and discuss your specific corporate photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="tel:+919632288815" className="inline-flex items-center justify-center gap-2 bg-[#ea384c] text-white px-8 py-3.5 rounded-full hover:bg-[#ea384c]/90 transition-all hover:shadow-md font-medium text-lg">
              Call Us: +91 96322 88815
            </a>
            <a href="mailto:candidcapture4@gmail.com" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#ea384c] text-[#ea384c] px-8 py-3.5 rounded-full hover:bg-[#ea384c]/5 transition-all font-medium text-lg">
              Email: candidcapture4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePackage;
