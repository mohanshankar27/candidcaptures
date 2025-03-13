
import React from 'react';
import { ExternalLink } from 'lucide-react';
import WeddingSlideshow from '@/components/WeddingSlideshow';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceContentProps {
  service: Service;
}

// Map of service names to image URLs
const serviceImages = {
  'Artists / Celebrities': '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
  'Concept shoot': '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
  'Corporate & Short Videos': '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
  'Corporate Headshots': '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
  'E-Commerce & Catalogues': '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
  'E-commerce shoot': '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
  'Event Photography': '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
  'Family Portraits': '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
  'Fashion Photography': '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
  'Food Photography': '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
  'Makeup shoot': '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
  'Maternity Photography': '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
  'Matrimonial Portfolios': '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
  'Model shoot': '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
  'Modelling & Artist Portfolios': '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
  'Naming Ceremony': '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
  'Portraits & Portfolios': '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
  'Pre-wedding photoshoot': '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
  'Product Photography': '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
  'Product shoot': '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
  'Special Services': '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
  'Toddler & Children': '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
  'Wedding Photography': '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
};

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  const isWeddingService = service.name === 'Wedding Photography';
  const serviceImage = serviceImages[service.name] || '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png';
  
  if (service.external) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center">
        <div className="mb-6 w-full overflow-hidden rounded-lg">
          <img 
            src={serviceImage} 
            alt={service.name}
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <p className="text-center mb-4">{service.description}</p>
        <a 
          href={service.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          View Gallery <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        {service.icon}
        <span>{service.name}</span>
      </h2>
      
      <div className="mb-6 w-full overflow-hidden rounded-lg">
        <img 
          src={serviceImage} 
          alt={service.name}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <p className="mb-8">{service.description}</p>

      {isWeddingService && <WeddingSlideshow />}
      
      {service.benefits && (
        <Card className="mb-8 bg-secondary/20">
          <CardContent className="pt-6">
            <h3 className="text-xl font-medium mb-4">What's Included</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      
      {service.pricing && (
        <div>
          <h3 className="text-xl font-medium mb-2">Pricing</h3>
          <p className="bg-secondary/30 p-4 rounded-md inline-block">{service.pricing}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceContent;
