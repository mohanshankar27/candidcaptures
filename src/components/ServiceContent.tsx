import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import WeddingSlideshow from '@/components/WeddingSlideshow';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import ServiceGallery from '@/components/ServiceGallery';

interface ServiceContentProps {
  service: Service;
}

// Map of service names to image URLs with at least 8 unique images per service
const serviceImages = {
  'Artists / Celebrities': [
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png'
  ],
  'Concept shoot': [
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png'
  ],
  'Corporate & Short Videos': [
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png'
  ],
  'Corporate Headshots': [
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png'
  ],
  'E-Commerce & Catalogues': [
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png'
  ],
  'E-commerce shoot': [
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png'
  ],
  'Event Photography': [
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png'
  ],
  'Family Portraits': [
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png'
  ],
  'Fashion Photography': [
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png'
  ],
  'Food Photography': [
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png'
  ],
  'Makeup shoot': [
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png'
  ],
  'Maternity Photography': [
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png'
  ],
  'Matrimonial Portfolios': [
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png'
  ],
  'Model shoot': [
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png'
  ],
  'Modelling & Artist Portfolios': [
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png'
  ],
  'Naming Ceremony': [
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png'
  ],
  'Portraits & Portfolios': [
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png'
  ],
  'Pre-wedding photoshoot': [
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png'
  ],
  'Product Photography': [
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png'
  ],
  'Product shoot': [
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png'
  ],
  'Special Services': [
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png'
  ],
  'Toddler & Children': [
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png'
  ],
  'Wedding Photography': [
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png'
  ],
  'Wedding Photoshoot Gallery': [
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png'
  ],
};

// Create a collection of 28 images for each service by duplicating the existing images
// with different arrangements to create visual variety
const expandedServiceImages = Object.entries(serviceImages).reduce((acc, [serviceName, images]) => {
  // For each service, create a larger collection of 28+ images by reusing the original images
  // in different sequences to simulate a larger gallery
  const expandedImages = [
    ...images,
    ...images.slice(4, 8),
    ...images.slice(0, 4),
    ...images.slice(2, 6),
    ...images.slice(1, 5),
    ...images.slice(3, 7),
    ...images.slice(0, 8)
  ];
  
  return {
    ...acc,
    [serviceName]: expandedImages
  };
}, {});

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => {
  const isWeddingService = service.name === 'Wedding Photography';
  const serviceImageArray = serviceImages[service.name] || Array(8).fill('/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png');
  const expandedImageArray = expandedServiceImages[service.name] || Array(28).fill('/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  
  if (service.external) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center">
        <div className="mb-6 w-full overflow-hidden rounded-lg">
          <img 
            src={serviceImageArray[0]} 
            alt={service.name}
            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={() => setEnlargedImage(serviceImageArray[0])}
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

  // Use our new ServiceGallery component for all regular services
  return (
    <>
      <ServiceGallery service={service} images={expandedImageArray} />
      {isWeddingService && <WeddingSlideshow />}
    </>
  );
};

export default ServiceContent;
