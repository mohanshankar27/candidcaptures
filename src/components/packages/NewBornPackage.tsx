import React from 'react';
import { Separator } from '@/components/ui/separator';
import BookingCTA from './BookingCTA';

const NewBornPackage: React.FC = () => {
  return (
    <div className="package-details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img 
          src="/lovable-uploads/b977d3f5-fd63-468d-ac7f-09766c3ab6c1.png" 
          alt="Newborn Photography" 
          className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
        />
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
            alt="Newborn Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
          <img 
            src="/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png" 
            alt="Newborn Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
        </div>
      </div>
      
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

        <BookingCTA 
          title="Book Your Newborn Photography Session" 
          serviceType="precious moments"
        />
      </div>
    </div>
  );
};

export default NewBornPackage;
