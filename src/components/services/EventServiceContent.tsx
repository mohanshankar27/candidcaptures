
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
      
      {/* Featured Event Photos */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-primary mb-6 text-center">Featured Event Photography</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png" 
              alt="South Indian family in traditional ceremony attire"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-white">
              <h4 className="font-medium text-gray-800">South Indian Ceremonies</h4>
              <p className="text-sm text-gray-600">Traditional family portraits for cultural ceremonies and events</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png" 
              alt="Celebration event photography"
              className="w-full h-auto object-cover"
            />
            <div className="p-4 bg-white">
              <h4 className="font-medium text-gray-800">Celebrations & Ceremonies</h4>
              <p className="text-sm text-gray-600">Professional coverage of all your special events</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png" 
              alt="Corporate event photography"
              className="w-full h-[180px] object-cover"
            />
            <div className="p-3 bg-white">
              <h4 className="font-medium text-gray-800 text-sm">Corporate Events</h4>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png" 
              alt="Social gathering photography"
              className="w-full h-[180px] object-cover"
            />
            <div className="p-3 bg-white">
              <h4 className="font-medium text-gray-800 text-sm">Social Gatherings</h4>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png" 
              alt="Birthday celebration photography"
              className="w-full h-[180px] object-cover"
            />
            <div className="p-3 bg-white">
              <h4 className="font-medium text-gray-800 text-sm">Birthday Celebrations</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventServiceContent;
