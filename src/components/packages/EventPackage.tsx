
import React from 'react';
import { Separator } from '@/components/ui/separator';
import BookingCTA from './BookingCTA';
import EventPackageHeader from './event/EventPackageHeader';
import EventPackagePricingCards from './event/EventPackagePricingCards';
import EventPackageAddOns from './event/EventPackageAddOns';
import EventTypesList from './event/EventTypesList';
import EventImportantInfo from './event/EventImportantInfo';

const EventPackage: React.FC = () => {
  return (
    <div className="package-details">
      <EventPackageHeader />
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#333333]">Event Photography Pricing</h3>
          <p className="mb-4 text-slate-600">
            Capture the special moments of your events with our professional photography services. We offer a range of event photography packages tailored to meet your specific needs, from corporate functions to personal celebrations and cultural ceremonies.
          </p>
        </div>

        <EventPackagePricingCards />

        <Separator />

        <EventPackageAddOns />

        <EventTypesList />

        <EventImportantInfo />

        <BookingCTA 
          title="Book Your Event Photography Services" 
          serviceType="special event"
        />
      </div>
    </div>
  );
};

export default EventPackage;
