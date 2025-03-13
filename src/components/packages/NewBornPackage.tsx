
import React from 'react';
import { Separator } from '@/components/ui/separator';

const NewBornPackage: React.FC = () => {
  return (
    <div className="package-details">
      <img 
        src="/lovable-uploads/b977d3f5-fd63-468d-ac7f-09766c3ab6c1.png" 
        alt="Newborn Photography" 
        className="w-full h-auto max-h-[300px] object-cover rounded-md mb-6"
      />
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">New Born Photo Shoot Packages</h3>
          <p className="mb-4 text-slate-600">
            Creating memories that last a lifetime with our professional newborn photography services.
            Our carefully designed packages ensure your precious moments are captured with love and attention to detail.
          </p>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Basic Package - ₹10,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 2-hour photo session</li>
            <li>10 edited digital images</li>
            <li>1 outfit/setup included</li>
            <li>In-studio session with props</li>
            <li>Online gallery for viewing and downloading</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Standard Package - ₹15,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 3-hour photo session</li>
            <li>20 edited digital images</li>
            <li>2 outfits/setups included</li>
            <li>Family portraits included</li>
            <li>In-studio session with props</li>
            <li>Online gallery for viewing and downloading</li>
            <li>5 printed 5×7″ photographs</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Premium Package - ₹25,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 4-hour photo session</li>
            <li>30 edited digital images</li>
            <li>3 outfits/setups included</li>
            <li>Family portraits included</li>
            <li>Sibling photos included</li>
            <li>In-studio session with premium props</li>
            <li>Online gallery for viewing and downloading</li>
            <li>10 printed 5×7″ photographs</li>
            <li>1 custom photo album (8×8″)</li>
          </ul>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Newborn sessions are best scheduled within the first 5-14 days after birth</li>
            <li>A 50% deposit is required to secure your booking</li>
            <li>Additional digital images can be purchased at ₹1,000 per image</li>
            <li>Travel fees may apply for at-home sessions</li>
            <li>All packages include pre-session consultation</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-md mt-6">
          <p className="text-center italic text-slate-600">
            To book a session or for more information, please contact us at 
            <a href="tel:+919632288815" className="text-[#ea384c] mx-1">+91 96322 88815</a> or 
            <a href="mailto:candidcapture4@gmail.com" className="text-[#ea384c] mx-1">candidcapture4@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewBornPackage;
