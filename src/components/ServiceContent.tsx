
import React from 'react';

interface ServiceContentProps {
  service: {
    name: string;
    icon?: React.ReactNode;
    description?: string;
    image?: string;
    pricing?: string;
    benefits?: string[];
  };
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  return (
    <div className="p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        {service.icon && <div className="text-primary">{service.icon}</div>}
        <h1 className="text-3xl font-bold">{service.name}</h1>
      </div>
      
      {service.image && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <img 
            src={service.image} 
            alt={service.name} 
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-lg">{service.description || `${service.name} services provided by Candid Capture Photography. We offer professional photography services tailored to meet your specific needs.`}</p>
        
        {service.pricing && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <p>{service.pricing}</p>
          </div>
        )}
        
        {service.benefits && service.benefits.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">What You Get</h2>
            <ul className="list-disc pl-5 space-y-1">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Book a Session</h2>
          <p>Contact us to book your session or learn more about our {service.name.toLowerCase()} services.</p>
          <a 
            href="#contact" 
            className="inline-block mt-2 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
