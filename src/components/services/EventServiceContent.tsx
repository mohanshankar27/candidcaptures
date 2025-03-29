
import React from 'react';
import { Service } from '@/data/services';

interface EventServiceContentProps {
  service: Service;
  serviceImageArray: string[];
}

const EventServiceContent: React.FC<EventServiceContentProps> = ({ 
  service, 
  serviceImageArray 
}) => {
  return (
    <div className="p-6 h-full">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-sm p-10 mb-8 ring-1 ring-purple-400">
        <div className="mb-6 w-full max-w-2xl overflow-hidden rounded-lg">
          <img 
            src={serviceImageArray[0]} 
            alt={service.name}
            className="w-full h-auto object-contain"
          />
        </div>
        <h2 className="text-2xl font-semibold text-primary mb-4">Event Management Services</h2>
        <p className="text-center text-slate-600 max-w-2xl">
          {service.description}
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-medium text-primary mb-3">Our Expertise</h3>
            <ul className="space-y-2">
              {service.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="font-medium text-primary mb-3">Pricing Information</h3>
            <p className="text-slate-700">{service.pricing}</p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventServiceContent;
