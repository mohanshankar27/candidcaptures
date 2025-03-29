
import React from 'react';
import { Service } from '@/data/services';
import ServiceGallery from './ServiceGallery';

interface ArtistsCelebritiesGalleryProps {
  service: Service;
}

const ArtistsCelebritiesGallery: React.FC<ArtistsCelebritiesGalleryProps> = ({ service }) => {
  // Collection of 6 unique artist/celebrity photography images
  const artistsImages = [
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
  ];

  return <ServiceGallery service={service} images={artistsImages} />;
};

export default ArtistsCelebritiesGallery;
