
import React from 'react';
import { Separator } from '@/components/ui/separator';

const EventPackage: React.FC = () => {
  return (
    <div className="package-details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <img 
          src="/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png" 
          alt="Event Photography" 
          className="w-full h-64 object-cover rounded-md col-span-3 md:col-span-2"
        />
        <div className="grid grid-cols-1 gap-4">
          <img 
            src="/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png" 
            alt="Event Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
          <img 
            src="/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png" 
            alt="Event Photography" 
            className="w-full h-[120px] object-cover rounded-md"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Event Photography Pricing</h3>
          <p className="mb-4 text-slate-600">
            Capture the special moments of your events with our professional photography services. We offer a range of event photography packages tailored to meet your specific needs, from corporate functions to personal celebrations.
          </p>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Basic Event Coverage - ₹15,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>4 hours of photography coverage</li>
            <li>One professional photographer</li>
            <li>100+ professionally edited digital images</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Quick turnaround time (7-10 business days)</li>
            <li>All high-resolution images included</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Standard Event Coverage - ₹25,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>6 hours of photography coverage</li>
            <li>One professional photographer</li>
            <li>200+ professionally edited digital images</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Quick turnaround time (7-10 business days)</li>
            <li>All high-resolution images included</li>
            <li>Same-day preview of selected images (10 photos)</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Premium Event Coverage - ₹35,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>8 hours of photography coverage</li>
            <li>Two professional photographers</li>
            <li>300+ professionally edited digital images</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Quick turnaround time (5-7 business days)</li>
            <li>All high-resolution images included</li>
            <li>Same-day preview of selected images (20 photos)</li>
            <li>Custom USB drive with all images</li>
          </ul>
        </div>

        <Separator />

        <div className="package">
          <h4 className="text-lg font-medium mb-2 text-[#ea384c]">Corporate Event Package - ₹40,000</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Full day coverage (up to 10 hours)</li>
            <li>Two professional photographers</li>
            <li>400+ professionally edited digital images</li>
            <li>Corporate branding integration</li>
            <li>Online gallery for viewing and downloading</li>
            <li>Quick turnaround time (5-7 business days)</li>
            <li>All high-resolution images included</li>
            <li>Same-day preview of selected images (30 photos)</li>
            <li>Custom USB drive with all images</li>
            <li>Commercial usage rights</li>
          </ul>
        </div>

        <Separator />

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Add-On Services</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Additional hour of coverage - ₹5,000 per hour</li>
            <li>Additional photographer - ₹10,000 per photographer</li>
            <li>Express delivery (48 hours) - ₹5,000</li>
            <li>Printed photo album (30 pages) - ₹8,000</li>
            <li>On-site printing station - ₹15,000</li>
            <li>Photo booth setup - ₹20,000</li>
            <li>Drone photography - ₹10,000</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Event Types We Cover</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Corporate conferences and seminars</li>
            <li>Product launches and promotional events</li>
            <li>Award ceremonies and galas</li>
            <li>Trade shows and exhibitions</li>
            <li>Corporate team-building activities</li>
            <li>Birthday parties and anniversaries</li>
            <li>Engagement parties</li>
            <li>Religious ceremonies</li>
            <li>Graduation celebrations</li>
            <li>Cultural events and festivals</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>A 50% deposit is required to secure your booking</li>
            <li>Travel fees may apply for events outside Bangalore city limits</li>
            <li>Customized packages available upon request</li>
            <li>Weekend and holiday bookings should be made well in advance</li>
            <li>Cancellation policy: Full refund if cancelled 30+ days before event, 50% refund if cancelled 15-29 days before event, no refund if cancelled less than 15 days before event</li>
          </ul>
        </div>

        <div className="bg-slate-50 p-4 rounded-md mt-6">
          <p className="text-center italic text-slate-600">
            To book our event photography services or for more information, please contact us at 
            <a href="tel:+919632288815" className="text-[#ea384c] mx-1">+91 96322 88815</a> or 
            <a href="mailto:candidcapture4@gmail.com" className="text-[#ea384c] mx-1">candidcapture4@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventPackage;
