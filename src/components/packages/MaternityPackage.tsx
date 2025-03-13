
import React from 'react';
import { Separator } from '@/components/ui/separator';

const MaternityPackage: React.FC = () => {
  return (
    <div className="package-details">
      <img 
        src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
        alt="Maternity Photography" 
        className="w-full h-auto max-h-[300px] object-cover rounded-md mb-6"
      />
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Maternity Photography Sessions</h3>
          <p className="mb-4 text-slate-600">
            Celebrate the beauty and miracle of pregnancy with our professional maternity photography sessions. 
            We capture this special time in your life with elegant, intimate portraits that you will cherish forever.
          </p>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Basic Maternity Package - ₹6,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>1-hour photo session</li>
            <li>10 edited digital images</li>
            <li>1 outfit change</li>
            <li>Indoor studio session</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Basic retouching included</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Standard Maternity Package - ₹12,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>2-hour photo session</li>
            <li>20 edited digital images</li>
            <li>2 outfit changes</li>
            <li>Studio or outdoor location (single location)</li>
            <li>Partner/family inclusion (limited shots)</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Advanced retouching included</li>
            <li>5 printed 5×7″ photographs</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Premium Maternity Package - ₹18,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>3-hour photo session</li>
            <li>30 edited digital images</li>
            <li>3 outfit changes</li>
            <li>Studio and outdoor locations (up to 2 locations)</li>
            <li>Partner/family inclusion</li>
            <li>Hair and makeup artist included</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Premium retouching included</li>
            <li>10 printed 5×7″ photographs</li>
            <li>1 custom 8×10″ matted print</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Deluxe Maternity Package - ₹25,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>4-hour photo session</li>
            <li>40 edited digital images</li>
            <li>Multiple outfit changes (up to 4)</li>
            <li>Multiple locations (up to 3)</li>
            <li>Partner/family inclusion</li>
            <li>Hair and makeup artist included with touch-ups</li>
            <li>Custom props and accessories</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Premium retouching included</li>
            <li>15 printed 5×7″ photographs</li>
            <li>1 custom 12×12″ photo album</li>
            <li>2 custom 8×10″ matted prints</li>
          </ul>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Add-On Services</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Additional digital images - ₹800 per image</li>
            <li>Hair and makeup artist - ₹4,000</li>
            <li>Additional location - ₹3,000 per location</li>
            <li>Partner/family photos - ₹2,000 (if not included in package)</li>
            <li>Custom photo album - Starting at ₹5,000</li>
            <li>Canvas prints - Starting at ₹3,000</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Maternity sessions are best scheduled between 28-34 weeks of pregnancy</li>
            <li>A 50% deposit is required to secure your booking</li>
            <li>Rescheduling must be done at least 48 hours in advance</li>
            <li>We have maternity gowns available for use during the session</li>
            <li>Travel fees may apply for locations beyond 20km from our studio</li>
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

export default MaternityPackage;
