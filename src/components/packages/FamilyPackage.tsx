
import React from 'react';
import { Separator } from '@/components/ui/separator';

const FamilyPackage: React.FC = () => {
  return (
    <div className="package-details">
      <img 
        src="/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png" 
        alt="Family Portrait Photography" 
        className="w-full h-auto max-h-[300px] object-cover rounded-md mb-6"
      />
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Family Portrait Sessions</h3>
          <p className="mb-4 text-slate-600">
            Capture the essence of your family's bond with our professional portrait photography services.
            Our expertly designed packages ensure that your family's unique dynamics and personalities shine through in every image.
          </p>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Basic Family Package - ₹15,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 1-hour photo session</li>
            <li>10 edited digital images</li>
            <li>1 location (studio or outdoor)</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Basic retouching included</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Premium Family Package - ₹25,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 2-hour photo session</li>
            <li>20 edited digital images</li>
            <li>Multiple poses and groupings</li>
            <li>1-2 outfit changes</li>
            <li>1 location (studio or outdoor)</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Advanced retouching included</li>
            <li>5 printed 8×10″ photographs</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Deluxe Family Package - ₹35,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 3-hour photo session</li>
            <li>30 edited digital images</li>
            <li>Multiple poses and groupings</li>
            <li>2-3 outfit changes</li>
            <li>2 locations (studio and/or outdoor)</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Premium retouching included</li>
            <li>10 printed 8×10″ photographs</li>
            <li>1 custom photo album (10×10″)</li>
            <li>1 mounted wall print (16×20″)</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Extended Family Package - ₹45,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Up to 4-hour photo session</li>
            <li>40 edited digital images</li>
            <li>Ideal for large family groups and multiple generations</li>
            <li>Multiple poses, groupings, and individual family units</li>
            <li>2-3 outfit changes</li>
            <li>2 locations (studio and/or outdoor)</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Premium retouching included</li>
            <li>15 printed 8×10″ photographs</li>
            <li>1 custom photo album (12×12″)</li>
            <li>2 mounted wall prints (16×20″)</li>
          </ul>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>Additional digital images can be purchased at ₹1,500 per image</li>
            <li>Travel fees may apply for locations beyond 20km from our studio</li>
            <li>All packages include pre-session consultation</li>
            <li>Weekend and holiday sessions may incur additional charges</li>
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

export default FamilyPackage;
