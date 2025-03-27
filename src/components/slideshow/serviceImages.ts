// Centralized image management file

// Primary service images (used in services grid and as featured images)
const serviceImages = {
  'Concept shoot': "/lovable-uploads/a97ae0b1-6394-488d-a9f4-d17321650970.png", // Updated with new traditional deity costume image
  'Corporate & Short Videos': "/lovable-uploads/28516f95-c696-478a-a1ca-2643222d0648.png", // Updated corporate event image with people taking selfie
  'Corporate Headshots': "/lovable-uploads/71dc637a-2ed8-42fe-b045-b78301739a30.png", // Updated corporate headshot image
  'E-Commerce & Catalogues': "/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png", // Catalogue image
  'Event Photography': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Family Portraits': "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  'Fashion Photography': "/lovable-uploads/1f924edb-9819-4bbc-91ac-8bdb224ff48e.png", // Updated with new fashion photo showing traditional attire and jewelry
  'Food Photography': "/lovable-uploads/e330db14-6a26-4ead-b79f-e9aed137fc84.png", // Updated with new Indian curry dish image
  'Makeup shoot': "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
  'Maternity Photography': "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
  'Matrimonial Portfolios': "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
  'Naming Ceremony': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'New Born Baby Shoot': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'Product Photography': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  'Product shoot': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png", // Changed to avoid duplicate
  'Special Services': "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png", // Changed to avoid duplicate
  'Toddler & Children': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Wedding Photography': "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png"
};

// Define critical images that should be preloaded (keep this small - only truly critical)
export const criticalImages = [
  '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png', // Hero image
  '/lovable-uploads/71dc637a-2ed8-42fe-b045-b78301739a30.png', // Corporate headshots
  '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',  // Wedding photo
  '/lovable-uploads/a97ae0b1-6394-488d-a9f4-d17321650970.png', // Concept shoot image
  '/lovable-uploads/e330db14-6a26-4ead-b79f-e9aed137fc84.png',  // Food Photography image added to critical
  '/lovable-uploads/1f924edb-9819-4bbc-91ac-8bdb224ff48e.png',  // Fashion Photography image added to critical
  '/lovable-uploads/28516f95-c696-478a-a1ca-2643222d0648.png'  // Corporate & Short Videos image added to critical
];

// Gallery collections for each service - organized to prioritize images
export const serviceGalleries = {
  'Corporate Headshots': [
    '/lovable-uploads/71dc637a-2ed8-42fe-b045-b78301739a30.png', // Updated primary corporate headshot
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=600'
  ],
  'Concept shoot': [
    '/lovable-uploads/a97ae0b1-6394-488d-a9f4-d17321650970.png', // New traditional deity costume image
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600'
  ],
  'Food Photography': [
    '/lovable-uploads/e330db14-6a26-4ead-b79f-e9aed137fc84.png', // New Indian curry dish image
    'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800&h=600',
    'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=800&h=600'
  ],
  'Fashion Photography': [
    '/lovable-uploads/1f924edb-9819-4bbc-91ac-8bdb224ff48e.png', // New Fashion Photography image with traditional attire
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800&h=600',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600'
  ],
  'Corporate & Short Videos': [
    '/lovable-uploads/28516f95-c696-478a-a1ca-2643222d0648.png', // New corporate event image with people taking selfie
    'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=800&h=600',
    'https://images.unsplash.com/photo-1581091877018-dac6a371d50f?auto=format&fit=crop&q=80&w=800&h=600'
  ],
  'Wedding Photography': [
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png'
  ],
  'Artists / Celebrities': [
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png',
    '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
    '/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png',
    '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png'
  ],
};

// Package-specific images - optimized for performance
export const packageImages = {
  'Corporate': {
    carousel: [
      '/lovable-uploads/71dc637a-2ed8-42fe-b045-b78301739a30.png', // Updated carousel image
      '/lovable-uploads/28516f95-c696-478a-a1ca-2643222d0648.png', // Added new corporate event image to carousel
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600'
    ],
    gallery: [
      '/lovable-uploads/71dc637a-2ed8-42fe-b045-b78301739a30.png', // Updated gallery image
      '/lovable-uploads/28516f95-c696-478a-a1ca-2643222d0648.png', // Added new corporate event image to gallery
    ]
  },
};

// Helper function to get gallery images for a service
export const getServiceGallery = (serviceName: string): string[] => {
  // Return specific gallery if it exists
  if (serviceGalleries[serviceName]) {
    return serviceGalleries[serviceName];
  }
  
  // Return default gallery with main service image as the first image
  const mainImage = serviceImages[serviceName] || '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png';
  return [
    mainImage,
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
    '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
    '/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png',
    '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png'
  ];
};

// Helper function to get package images
export const getPackageImages = (packageName: string, type: 'carousel' | 'gallery'): string[] => {
  if (packageImages[packageName] && packageImages[packageName][type]) {
    return packageImages[packageName][type];
  }
  
  // Return some default images if the specified package/type doesn't exist
  return [
    '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
    '/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png',
    '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png'
  ];
};

// Helper to check if an image is critical (should be eager loaded)
export const isImageCritical = (imagePath: string): boolean => {
  return criticalImages.includes(imagePath);
};

export default serviceImages;
