
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Service } from '@/data/servicesList';
import { Card, CardContent } from '@/components/ui/card';

interface ArtistsCelebritiesGalleryProps {
  service: Service;
}

const ArtistsCelebritiesGallery: React.FC<ArtistsCelebritiesGalleryProps> = ({ service }) => {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  
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

  return (
    <div className="p-4 md:p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        {service.icon}
        <span>{service.name}</span>
      </h2>
      
      {/* Featured hero image - larger and prominent */}
      <div className="mb-6 w-full overflow-hidden rounded-lg">
        <img 
          src={artistsImages[0]} 
          alt={`${service.name} featured`}
          className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => setEnlargedImage(artistsImages[0])}
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
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
      
      <h3 className="text-xl font-medium mb-3">Celebrity & Artist Portfolio Showcase</h3>
      
      {/* Main gallery grid - responsive with different sizes for visual interest */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
        {artistsImages.map((image, index) => (
          <div 
            key={index} 
            className={`
              overflow-hidden rounded-lg cursor-pointer bg-muted
              ${index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              ${index % 11 === 0 ? 'sm:col-span-2' : ''}
            `}
            onClick={() => setEnlargedImage(image)}
          >
            <img 
              src={image} 
              alt={`Artist/Celebrity ${index + 1}`} 
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
          <p className="bg-secondary/30 p-4 rounded-md inline-block">{service.pricing}</p>
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
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistsCelebritiesGallery;
