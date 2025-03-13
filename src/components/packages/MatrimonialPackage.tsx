
import React from 'react';
import { Separator } from '@/components/ui/separator';

const MatrimonialPackage: React.FC = () => {
  return (
    <div className="package-details">
      <img 
        src="/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png" 
        alt="Matrimonial Portfolio Photography" 
        className="w-full h-auto max-h-[300px] object-cover rounded-md mb-6"
      />
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Matrimonial / Dating Portfolio Sessions</h3>
          <p className="mb-4 text-slate-600">
            Create an impressive matrimonial portfolio with our professional photography services. 
            We offer customized packages to help you make a lasting impression with high-quality, authentic photographs.
          </p>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Basic Portfolio Package - ₹10,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>1-hour photo session</li>
            <li>2 outfit changes</li>
            <li>10 edited digital images</li>
            <li>Indoor studio session with professional lighting</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Basic retouching included</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Premium Portfolio Package - ₹15,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>2-hour photo session</li>
            <li>3 outfit changes</li>
            <li>15 edited digital images</li>
            <li>Indoor studio and outdoor location (single location)</li>
            <li>Professional lighting and setups</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Advanced retouching included</li>
            <li>5 printed 5×7″ photographs</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Deluxe Portfolio Package - ₹20,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>3-hour photo session</li>
            <li>4 outfit changes</li>
            <li>20 edited digital images</li>
            <li>Multiple locations (studio and outdoor)</li>
            <li>Professional lighting and diverse setups</li>
            <li>Hair and makeup services included</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Premium retouching included</li>
            <li>10 printed 5×7″ photographs</li>
            <li>Custom-designed digital portfolio</li>
          </ul>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Add-On Services</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Additional digital images - ₹750 per image</li>
            <li>Hair and makeup services - ₹4,000</li>
            <li>Additional location - ₹3,000 per location</li>
            <li>Extra outfit change - ₹1,500 per outfit</li>
            <li>Custom-designed digital portfolio (if not included) - ₹5,000</li>
            <li>Extended session time - ₹5,000 per hour</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>We recommend booking your session at least 2 weeks in advance</li>
            <li>Bring multiple outfits for variety (formal, casual, traditional)</li>
            <li>Matrimonial portfolios typically include a mix of traditional and contemporary looks</li>
            <li>Travel fees may apply for locations beyond 20km from our studio</li>
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

export default MatrimonialPackage;
