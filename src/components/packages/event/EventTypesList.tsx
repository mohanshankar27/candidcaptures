
import React from 'react';

const eventTypes = [
  'Corporate conferences', 'Product launches', 'Award ceremonies', 'Trade shows', 'Team-building',
  'Birthday parties', 'Anniversaries', 'Religious ceremonies', 'Graduations', 'Cultural events', 
  'Family functions', 'Traditional ceremonies', 'Naming ceremonies', 'Thread ceremonies', 'Festival celebrations'
];

const EventTypesList: React.FC = () => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-3 text-[#333333]">Event Types We Cover</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {eventTypes.map((type, i) => (
          <div key={i} className="bg-primary/5 p-2 rounded-lg text-center text-slate-700 border border-primary/10 text-sm">
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTypesList;
