
import React from 'react';
import { Separator } from '@/components/ui/separator';

const CorporatePackage: React.FC = () => {
  return (
    <div className="package-details">
      <img 
        src="/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png" 
        alt="Corporate Headshot Photography" 
        className="w-full h-auto max-h-[300px] object-cover rounded-md mb-6"
      />
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Corporate Headshot Sessions</h3>
          <p className="mb-4 text-slate-600">
            Professional headshots are essential for your business presence. Our corporate headshot packages are designed to present you and your team in the best possible light, capturing professionalism while showcasing personality.
          </p>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Basic Individual Package - ₹3,500</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>15-20 minute session</li>
            <li>1 outfit/look</li>
            <li>2 edited digital images</li>
            <li>Basic retouching included</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Usage rights for personal and professional use</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Premium Individual Package - ₹5,500</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>30-40 minute session</li>
            <li>2 outfits/looks</li>
            <li>5 edited digital images</li>
            <li>Advanced retouching included</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Usage rights for personal and professional use</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Small Team Package (5-10 people) - ₹15,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 3-hour session</li>
            <li>1 outfit/look per person</li>
            <li>2 edited digital images per person</li>
            <li>Consistent styling and background</li>
            <li>Basic retouching included</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Usage rights for personal and professional use</li>
            <li>10% discount on additional images</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Medium Team Package (11-20 people) - ₹25,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 5-hour session</li>
            <li>1 outfit/look per person</li>
            <li>2 edited digital images per person</li>
            <li>Consistent styling and background</li>
            <li>Basic retouching included</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Usage rights for personal and professional use</li>
            <li>15% discount on additional images</li>
            <li>Complimentary group shot</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Large Team Package (21-50 people) - ₹45,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Full day session (can be split across multiple days)</li>
            <li>1 outfit/look per person</li>
            <li>2 edited digital images per person</li>
            <li>Consistent styling and background</li>
            <li>Basic retouching included</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Usage rights for personal and professional use</li>
            <li>20% discount on additional images</li>
            <li>Complimentary group shots (whole team and departments)</li>
            <li>Dedicated project manager</li>
          </ul>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Corporate Add-Ons</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Additional edited images - ₹750 per image</li>
            <li>Advanced retouching - ₹500 per image</li>
            <li>On-location fee (within city limits) - ₹5,000</li>
            <li>Rush delivery (24-48 hours) - ₹3,000</li>
            <li>Corporate-branded background - ₹2,500</li>
            <li>Makeup artist - ₹3,500 per day</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>Rescheduling must be done at least 48 hours in advance</li>
            <li>Standard delivery time is 7-10 business days</li>
            <li>Weekend sessions may incur additional fees</li>
            <li>Travel fees apply for locations beyond 20km from our studio</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-md mt-6">
          <p className="text-center italic text-slate-600">
            To book a session or for more information, please contact us at 
            <a href="tel:+919100493929" className="text-[#ea384c] mx-1">+91 91004 93929</a> or 
            <a href="mailto:info@artriva.com" className="text-[#ea384c] mx-1">info@artriva.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporatePackage;
