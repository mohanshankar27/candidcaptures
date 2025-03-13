
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceGalleryProps {
  service: Service;
  images: string[];
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ service, images }) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  
  return (
    <div className="p-4 md:p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        {service.icon}
        <span>{service.name}</span>
      </h2>
      
      {/* Featured hero image - larger and prominent */}
      <div className="mb-6 w-full overflow-hidden rounded-lg border-2 border-[#ea384c]">
        <img 
          src={images[0]} 
          alt={`${service.name} featured`}
          className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => setEnlargedImage(images[0])}
        />
      </div>
      
      <div className="mb-6">
        <p className="text-lg mb-6">{service.description}</p>
        
        {service.benefits && (
          <Card className="mb-8 bg-secondary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-4">What's Included</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ea384c]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
      
      <h3 className="text-xl font-medium mb-3">{service.name} Showcase</h3>
      
      {/* Main gallery grid - responsive with different sizes for visual interest */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`
              overflow-hidden rounded-lg cursor-pointer bg-muted
              border-2 border-[#ea384c]
              ${index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index % 11 === 0 ? 'sm:col-span-2' : ''}
            `}
            onClick={() => setEnlargedImage(image)}
          >
            <img 
              src={image} 
              alt={`${service.name} ${index + 1}`} 
              className={`
                w-full object-cover transition-transform duration-300 hover:scale-110
                ${index % 7 === 0 ? 'h-60 md:h-80' : 'h-40 md:h-48'}
              `}
            />
          </div>
        ))}
      </div>
      
      {service.pricing && (
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2">Pricing</h3>
          <p className="bg-secondary/30 p-4 rounded-md inline-block border-l-4 border-[#ea384c]">{service.pricing}</p>
        </div>
      )}

      {/* Enlarged image overlay */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setEnlargedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={enlargedImage} 
              alt="Enlarged view" 
              className="w-full h-full object-contain border-4 border-[#ea384c]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceGallery;
