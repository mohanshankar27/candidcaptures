
import React from 'react';

const EventPackageAddOns: React.FC = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-3 text-[#333333]">Add-On Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-slate-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>Additional hour of coverage - ₹5,000 per hour</li>
            <li>Additional photographer - ₹10,000 per photographer</li>
            <li>Express delivery (48 hours) - ₹5,000</li>
            <li>Printed photo album (30 pages) - ₹8,000</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>On-site printing station - ₹15,000</li>
            <li>Photo booth setup - ₹20,000</li>
            <li>Drone photography - ₹10,000</li>
            <li>Video highlights - starting at ₹15,000</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventPackageAddOns;
