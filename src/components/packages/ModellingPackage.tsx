
import React from 'react';
import { Separator } from '@/components/ui/separator';

const ModellingPackage: React.FC = () => {
  return (
    <div className="package-details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img 
          src="/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png" 
          alt="Modelling Portfolio" 
          className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
        />
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png" 
            alt="Modelling Portfolio" 
            className="w-full h-[120px] object-cover rounded-md"
          />
          <img 
            src="/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png" 
            alt="Modelling Portfolio" 
            className="w-full h-[120px] object-cover rounded-md"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Modelling Portfolio & Polaroid Sessions</h3>
          <p className="mb-4 text-slate-600">
            Elevate your modelling career with our professional portfolio services. Our expert photographers specialize in creating stunning portfolios that showcase your versatility and unique look, helping you stand out in the competitive modelling industry.
          </p>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Basic Polaroid Package - ₹5,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>2-hour studio session</li>
            <li>3 outfit changes</li>
            <li>10 professionally edited digital images</li>
            <li>5 printed polaroid-style photos</li>
            <li>Basic styling advice</li>
            <li>Soft and hard copy of images</li>
            <li>Online gallery for downloading</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Standard Portfolio Package - ₹12,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>4-hour studio session</li>
            <li>5 outfit changes</li>
            <li>20 professionally edited digital images</li>
            <li>10 printed polaroid-style photos</li>
            <li>Hair and makeup consultation</li>
            <li>Basic styling assistance</li>
            <li>Online gallery for downloading</li>
            <li>Digital portfolio compilation</li>
            <li>10 printed comp cards</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Premium Portfolio Package - ₹25,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Full-day photoshoot (6-8 hours)</li>
            <li>Multiple locations (studio and outdoor)</li>
            <li>8 outfit changes</li>
            <li>40 professionally edited digital images</li>
            <li>15 printed polaroid-style photos</li>
            <li>Professional hair and makeup artist included</li>
            <li>Styling consultation and assistance</li>
            <li>Online gallery for downloading</li>
            <li>Digital portfolio compilation</li>
            <li>20 printed comp cards</li>
            <li>Portfolio book (10 pages, professionally designed)</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Elite Portfolio Package - ₹40,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Two-day comprehensive photoshoot</li>
            <li>Multiple premium locations</li>
            <li>12 outfit changes across various styles</li>
            <li>60 professionally edited digital images</li>
            <li>20 printed polaroid-style photos</li>
            <li>Professional hair and makeup artist for both days</li>
            <li>Professional stylist consultation</li>
            <li>Wardrobe assistance available</li>
            <li>Online gallery for downloading</li>
            <li>Digital portfolio compilation with categorization</li>
            <li>30 printed comp cards with multiple designs</li>
            <li>Premium portfolio book (20 pages, professionally designed)</li>
            <li>Short video clips for motion portfolio</li>
            <li>Agency submission guidance</li>
          </ul>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Add-On Services</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Additional outfit change - ₹1,500 per outfit</li>
            <li>Additional edited digital images - ₹500 per image</li>
            <li>Additional printed comp cards - ₹2,000 per set of 10</li>
            <li>Professional hair and makeup artist - ₹5,000</li>
            <li>Location change - ₹3,000 per additional location</li>
            <li>Express delivery (48 hours) - ₹5,000</li>
            <li>Video portfolio additions - Starting at ₹10,000</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Portfolio Types We Specialize In</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Fashion portfolios</li>
            <li>Commercial modeling</li>
            <li>Runway portfolios</li>
            <li>Editorial style</li>
            <li>Fitness modeling</li>
            <li>Plus-size modeling</li>
            <li>Parts modeling (hands, feet, etc.)</li>
            <li>Acting headshots</li>
            <li>Child modeling portfolios</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>Rescheduling is possible with at least 48 hours notice</li>
            <li>We can provide recommendations for hair stylists, makeup artists, and wardrobe stylists</li>
            <li>Travel fees may apply for locations outside Bangalore city limits</li>
            <li>Customized packages available upon request</li>
            <li>Commercial usage rights are available at additional cost</li>
            <li>Portfolio guidance and agency introduction services available</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-md mt-6">
          <p className="text-center italic text-slate-600">
            To book our modelling portfolio services or for more information, please contact us at 
            <a href="tel:+919632288815" className="text-[#ea384c] mx-1">+91 96322 88815</a> or 
            <a href="mailto:candidcapture4@gmail.com" className="text-[#ea384c] mx-1">candidcapture4@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModellingPackage;
