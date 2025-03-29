
import React from 'react';
import { ExternalLink } from 'lucide-react';
import WeddingSlideshow from '@/components/WeddingSlideshow';
import { Service } from '@/data/services';
import ServiceGallery from '@/components/ServiceGallery';
import ArtistsCelebritiesGallery from '@/components/ArtistsCelebritiesGallery';
import { getServiceImage } from './services/serviceImages';

interface ServiceContentProps {
  service: Service;
}

// Define a pool of all available images
const allAvailableImages = [
  '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
  '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
  '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
  '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
  '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
  '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
  '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
  '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
  '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
  '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
  '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
  '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
  '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
  '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
  '/lovable-uploads/5faf55b4-c582-4816-aa3b-99e8faa9a73d.png',
  '/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png',
  // Updated concept shoot images
  '/lovable-uploads/4a67f538-ecc9-41af-87e5-08ddea7ba4f6.png',
  '/lovable-uploads/6401c725-7910-476d-b26c-898ff561ccaf.png',
  '/lovable-uploads/507c487a-ec87-4401-ace4-4b27d7bcd2e0.png',
  '/lovable-uploads/fb019637-e8cb-4a43-9303-075fd194e2b8.png',
  '/lovable-uploads/0abd204c-da72-4a05-87ae-39929aeedd9f.png' // Changed from 0da1d025 to 0abd204c
];

// Map of service names to 6 unique images per service using indices from allAvailableImages
// Each service gets a unique set of 6 images with no repetition across services
const serviceImageIndices = {
  'Artists / Celebrities': [0, 1, 2, 3, 4, 5],
  'Concept shoot': [16, 17, 18, 19, 20, 15], // Updated to use the new concept shoot images
  'Corporate & Short Videos': [12, 13, 0, 1, 2, 3],
  'E-Commerce & Catalogues': [15, 10, 11, 13, 0, 1],
  'Event Photography': [2, 3, 4, 5, 6, 7],
  'Family Portraits': [8, 9, 10, 11, 12, 13],
  'Fashion Photography': [0, 2, 4, 6, 8, 10],
  'Food Photography': [1, 3, 5, 7, 9, 11],
  'Makeup shoot': [12, 0, 2, 4, 6, 8],
  'Maternity Photography': [13, 1, 3, 5, 7, 9],
  'Matrimonial Portfolios': [10, 12, 0, 2, 4, 6],
  'Modelling & Artist Portfolios': [11, 13, 1, 3, 5, 7],
  'Naming Ceremony': [8, 10, 12, 0, 2, 4],
  'Portraits & Portfolios': [9, 11, 13, 1, 3, 5],
  'Pre-wedding photoshoot': [6, 8, 10, 12, 0, 2],
  'Product Photography': [7, 9, 11, 13, 1, 3],
  'Product shoot': [4, 6, 8, 10, 12, 0],
  'Special Services': [5, 7, 9, 11, 13, 1],
  'Toddler & Children': [2, 4, 6, 8, 10, 12],
  'Wedding Photography': [3, 5, 7, 9, 11, 13]
};

// Convert indices to actual image URLs
const serviceImages = Object.entries(serviceImageIndices).reduce((acc, [serviceName, indices]) => {
  acc[serviceName] = indices.map(index => allAvailableImages[index]);
  return acc;
}, {} as Record<string, string[]>);

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  const isWeddingService = service.name === 'Wedding Photography';
  const serviceImageArray = serviceImages[service.name] || Array(6).fill(getServiceImage('Concept shoot'));
  
  if (service.external) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center">
        <div className="mb-6 w-full overflow-hidden rounded-lg border-2 border-[#ea384c]">
          <img 
            src={serviceImageArray[0]} 
            alt={service.name}
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
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

  // Check if this is the special Artists / Celebrities service
  if (service.name === 'Artists / Celebrities') {
    return <ArtistsCelebritiesGallery service={service} />;
  }

  // Use our ServiceGallery component for all other regular services
  return (
    <>
      <ServiceGallery service={service} images={serviceImageArray} />
      {isWeddingService && <WeddingSlideshow />}
    </>
  );
};

export default ServiceContent;
