
import React from 'react';
import { Check, X } from 'lucide-react';

const CorporatePackage: React.FC = () => {
  return (
    <div className="package-details">
      <img 
        src="/lovable-uploads/b0d50296-3c5f-41b2-afcf-af58d024d712.png" 
        alt="Corporate Headshot Photography Packages" 
        className="w-full h-auto max-h-[300px] object-cover rounded-md mb-6"
      />
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Corporate Headshot Packages</h3>
          <p className="mb-4 text-slate-600">
            Professional headshots for business profiles, websites, and marketing materials. Choose the package 
            that best suits your team's requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* BASIC PACKAGE */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="bg-slate-50 p-4 text-center border-b border-slate-200">
              <h4 className="text-xl uppercase font-medium tracking-wide text-slate-800">Mini</h4>
              <div className="mt-2 line-through text-slate-500 text-sm">₹8,890/- inclusive of GST</div>
              <div className="font-medium text-[#ea384c]">Now at <span className="text-xl font-semibold">₹7,550 +GST</span></div>
              <div className="mt-1 text-xs text-slate-600">
                Additional <span className="font-medium text-[#ea384c]">15% Discount</span> applicable if all team members are above 5 persons
                <div className="text-xs mt-1">(i.e. ₹6,417 +GST)</div>
              </div>
              <button className="mt-4 bg-[#ea384c] text-white rounded-full px-5 py-2 text-sm hover:bg-[#ea384c]/90 transition-colors">
                Schedule Online
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Studio Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, at our studio
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">15 - 30 mins per person</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Look Changes:</span>
                  <span className="text-sm text-slate-600">Max 1</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Props:</span>
                  <span className="text-sm text-slate-600">Minimal</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Photos Delivered:</span>
                  <span className="text-sm text-slate-600">3 (full res)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600">₹300/image</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Hard Copies:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No (digital files only)
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STANDARD PACKAGE */}
          <div className="bg-white border border-[#ea384c]/20 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all relative">
            <div className="absolute -top-4 right-0 left-0 mx-auto w-fit px-3 py-1 bg-[#ea384c] text-white text-sm rounded-full">
              Most Popular
            </div>
            <div className="bg-slate-50 p-4 text-center border-b border-slate-200">
              <h4 className="text-xl uppercase font-medium tracking-wide text-slate-800">Classic</h4>
              <div className="mt-2 line-through text-slate-500 text-sm">₹13,500/- inclusive of GST</div>
              <div className="font-medium text-[#ea384c]">Now at <span className="text-xl font-semibold">₹11,475 +GST</span></div>
              <div className="mt-1 text-xs text-slate-600">
                Additional <span className="font-medium text-[#ea384c]">15% Discount</span> applicable if all team members are above 5 persons
                <div className="text-xs mt-1">(i.e. ₹9,754 +GST)</div>
              </div>
              <button className="mt-4 bg-[#ea384c] text-white rounded-full px-5 py-2 text-sm hover:bg-[#ea384c]/90 transition-colors">
                Call us on: +919100493929
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Studio Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, at our studio
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <X className="h-4 w-4 text-red-500 mr-1" /> No
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">30 - 45 mins per person</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Look Changes:</span>
                  <span className="text-sm text-slate-600">Max 2</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Props:</span>
                  <span className="text-sm text-slate-600">Basic Professional Setup</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Photos Delivered:</span>
                  <span className="text-sm text-slate-600">5 (full res)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600">₹250/image</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Hard Copies:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, starting ₹350/- per print (min 5)
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600">Optional, starting ₹3,750/-</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Retouching:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, professional level
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PREMIUM PACKAGE */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="bg-slate-50 p-4 text-center border-b border-slate-200">
              <h4 className="text-xl uppercase font-medium tracking-wide text-slate-800">Signature & On Location</h4>
              <div className="font-medium text-[#ea384c]">Fully Customized Plan Starting <span className="text-xl font-semibold">₹17,500 +GST</span></div>
              <div className="mt-1 text-xs text-slate-600">
                For large corporate teams and executive suites
              </div>
              <div className="text-xs mt-1 italic">Actual price based on Team Size/Location/Requirements</div>
              <button className="mt-4 bg-[#ea384c] text-white rounded-full px-5 py-2 text-sm hover:bg-[#ea384c]/90 transition-colors">
                Let us plan everything
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Studio Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes (our or any 3rd party location)
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Outdoor Shoot:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, optional
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Duration:</span>
                  <span className="text-sm text-slate-600">As needed</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Look Changes:</span>
                  <span className="text-sm text-slate-600">As discussed</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Props:</span>
                  <span className="text-sm text-slate-600">Our / rental / company's assets</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Photos Delivered:</span>
                  <span className="text-sm text-slate-600">8+ per person (full res)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Additional Images:</span>
                  <span className="text-sm text-slate-600">₹200/image</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Location/Prop Charges:</span>
                  <span className="text-sm text-slate-600">At actuals</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Makeup:</span>
                  <span className="text-sm text-slate-600">Optional, starting ₹3,750/-</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-sm font-medium text-slate-700">Planning:</span>
                  <span className="text-sm text-slate-600 flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-1" /> Yes, detailed consultation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-medium mb-4 text-center text-slate-800">Corporate Photography FAQs</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-[#ea384c]">What is the turnaround time?</h4>
              <p className="text-sm text-slate-600 mt-1">Standard delivery is 3-5 business days. Rush delivery available at additional cost.</p>
            </div>
            <div>
              <h4 className="font-medium text-[#ea384c]">Do you offer on-site photography for large teams?</h4>
              <p className="text-sm text-slate-600 mt-1">Yes, we specialize in on-site corporate photography. Our Signature package includes this service.</p>
            </div>
            <div>
              <h4 className="font-medium text-[#ea384c]">Can we get consistency across multiple sessions?</h4>
              <p className="text-sm text-slate-600 mt-1">Absolutely. We maintain detailed records of lighting setup, background, and styling to ensure consistency.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 border border-[#ea384c]/20 rounded-lg mt-6 text-center">
          <h3 className="text-xl font-medium mb-3 text-[#ea384c]">Ready to elevate your team's professional image?</h3>
          <p className="text-slate-600 mb-4">
            Contact us to schedule a consultation and discuss your specific corporate photography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+919100493929" className="inline-flex items-center justify-center gap-2 bg-[#ea384c] text-white px-5 py-2 rounded-md hover:bg-[#ea384c]/90 transition-colors">
              Call Us: +91 91004 93929
            </a>
            <a href="mailto:info@artriva.com" className="inline-flex items-center justify-center gap-2 bg-white border border-[#ea384c] text-[#ea384c] px-5 py-2 rounded-md hover:bg-[#ea384c]/5 transition-colors">
              Email: info@artriva.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePackage;
