
import React from 'react';

const EventImportantInfo: React.FC = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-3 text-[#333333]">Important Information</h3>
      <ul className="list-disc pl-5 space-y-2 text-slate-600">
        <li>A 50% deposit is required to secure your booking</li>
        <li>Travel fees may apply for events outside Bangalore city limits</li>
        <li>Customized packages available upon request</li>
        <li>Weekend and holiday bookings should be made well in advance</li>
        <li>Special discounts available for cultural and traditional events</li>
      </ul>
    </div>
  );
};

export default EventImportantInfo;
