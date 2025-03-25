
// Centralized image management file

// Primary service images (used in services grid and as featured images)
const serviceImages = {
  'Concept shoot': "/lovable-uploads/5faf55b4-c582-4816-aa3b-99e8faa9a73d.png", // Cultural outfit photo
  'Corporate & Short Videos': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'Corporate Headshots': "/lovable-uploads/5d90fcb0-8d52-441c-92d9-ab63b40d0b9c.png", // Laptop portrait
  'E-Commerce & Catalogues': "/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png", // Catalogue image
  'Event Photography': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Family Portraits': "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  'Fashion Photography': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Food Photography': "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
  'Makeup shoot': "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
  'Maternity Photography': "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
  'Matrimonial Portfolios': "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
  'Naming Ceremony': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'New Born Baby Shoot': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'Product Photography': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  'Product shoot': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Special Services': "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  'Toddler & Children': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Wedding Photography': "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png"
};

// Gallery collections for each service
export const serviceGalleries = {
  'Corporate Headshots': [
    '/lovable-uploads/5d90fcb0-8d52-441c-92d9-ab63b40d0b9c.png', // Laptop portrait
    '/lovable-uploads/078c0e85-a4b3-4252-b5f0-9dd955da69fc.png', // Document portrait
    '/lovable-uploads/36ad88c2-1413-4c51-bb6b-9a73ef010452.png',
    '/lovable-uploads/27587b05-9077-48f3-84a4-728a9e38855a.png',
    '/lovable-uploads/caea3e9d-d65d-4d4a-a6e8-9cfa1219b0d3.png',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
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
  // You can add other services as needed
};

// Package-specific images
export const packageImages = {
  'Corporate': {
    carousel: [
      '/lovable-uploads/5d90fcb0-8d52-441c-92d9-ab63b40d0b9c.png', // Laptop portrait
      '/lovable-uploads/078c0e85-a4b3-4252-b5f0-9dd955da69fc.png', // Document portrait
      '/lovable-uploads/36ad88c2-1413-4c51-bb6b-9a73ef010452.png',
      '/lovable-uploads/27587b05-9077-48f3-84a4-728a9e38855a.png',
      '/lovable-uploads/caea3e9d-d65d-4d4a-a6e8-9cfa1219b0d3.png',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
    ],
    gallery: [
      '/lovable-uploads/5d90fcb0-8d52-441c-92d9-ab63b40d0b9c.png', // Laptop portrait
      '/lovable-uploads/078c0e85-a4b3-4252-b5f0-9dd955da69fc.png', // Document portrait
      '/lovable-uploads/36ad88c2-1413-4c51-bb6b-9a73ef010452.png',
      '/lovable-uploads/27587b05-9077-48f3-84a4-728a9e38855a.png'
    ]
  },
  // Add other packages as needed
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

export default serviceImages;
