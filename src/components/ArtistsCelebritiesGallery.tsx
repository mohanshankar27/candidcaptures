
import React from 'react';
import { Service } from '@/data/servicesList';
import ServiceGallery from './ServiceGallery';

interface ArtistsCelebritiesGalleryProps {
  service: Service;
}

const ArtistsCelebritiesGallery: React.FC<ArtistsCelebritiesGalleryProps> = ({ service }) => {
  // Collection of 28 artist/celebrity photography images
  // Reusing some images but with different compositions to simulate a larger gallery
  const artistsImages = [
    // First row - portrait images
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    
    // Second row - closeup portraits
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    
    // Third row - fashion/styled shoots
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    
    // Fourth row - dramatic lighting
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    
    // Fifth row - artistic poses
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    
    // Sixth row - glamour shots
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
    '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    
    // Seventh row - additional style variations
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
  ];

  return <ServiceGallery service={service} images={artistsImages} />;
};

export default ArtistsCelebritiesGallery;
