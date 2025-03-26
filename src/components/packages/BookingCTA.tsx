
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Wifi } from "lucide-react";

interface BookingCTAProps {
  title: string;
  serviceType: string;
}

const BookingCTA: React.FC<BookingCTAProps> = ({ title, serviceType }) => {
  return (
    <div className="bg-slate-50 p-6 rounded-lg mt-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <h3 className="text-xl font-medium text-[#ea384c]">{title}</h3>
        <Badge variant="default" className="bg-green-500">
          <span className="flex items-center gap-1">
            <Wifi className="h-3 w-3" /> Live
          </span>
        </Badge>
      </div>
      <p className="text-slate-600 mb-4">
        Contact us to schedule a consultation and discuss how we can capture your {serviceType}.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="tel:+919632288815" className="inline-flex items-center justify-center gap-2 bg-[#ea384c] text-white px-5 py-2 rounded-md hover:bg-[#ea384c]/90 transition-colors">
          Call Us: +91 96322 88815
        </a>
        <a href="mailto:candidcapture4@gmail.com" className="inline-flex items-center justify-center gap-2 bg-white border border-[#ea384c] text-[#ea384c] px-5 py-2 rounded-md hover:bg-[#ea384c]/5 transition-colors">
          Email: candidcapture4@gmail.com
        </a>
      </div>
    </div>
  );
};

export default BookingCTA;
