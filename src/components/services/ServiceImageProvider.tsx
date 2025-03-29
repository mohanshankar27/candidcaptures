
import { Service } from '@/data/services';
import { getServiceImage } from './serviceImages';

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
  '/lovable-uploads/4a67f538-ecc9-41af-87e5-08ddea7ba4f6.png',
  '/lovable-uploads/6401c725-7910-476d-b26c-898ff561ccaf.png',
  '/lovable-uploads/507c487a-ec87-4401-ace4-4b27d7bcd2e0.png',
  '/lovable-uploads/fb019637-e8cb-4a43-9303-075fd194e2b8.png',
  '/lovable-uploads/0abd204c-da72-4a05-87ae-39929aeedd9f.png',
  '/lovable-uploads/712d4c19-063a-497c-999e-ae3cffcbbf74.png',
  '/lovable-uploads/4c8884df-c0c2-4516-8e86-d559a104323b.png',
  '/lovable-uploads/03f657a2-cad6-4dd8-9d1f-1438954294dd.png',
  '/lovable-uploads/96435422-8cf4-471d-a984-f6a25491973b.png',
  '/lovable-uploads/303ac396-1d2b-4063-9a34-2b8b4aeaf389.png',
  '/lovable-uploads/f12b1de3-4046-4f12-9356-1a42efab959a.png',
  '/lovable-uploads/2a120d28-a47c-45a6-ad27-4f52aaf8ef7d.png',
  '/lovable-uploads/cc9a7822-da60-4d41-8c97-94aca630e4bb.png',
  '/lovable-uploads/6d4124cf-49f7-422e-a39a-0fc50e817f81.png',
  '/lovable-uploads/92b87e5e-0ec2-44ab-8160-c7335b0d66a0.png',
  '/lovable-uploads/84376a5b-2662-4bb5-9e37-8e83ca5c09c8.png',
  '/lovable-uploads/38c938f6-27b6-4b7c-80c8-02a42c8cf9d3.png',
  '/lovable-uploads/63234086-83f0-42c2-89ed-b8f4bfd7512e.png'
];

// Map of service names to 6 unique images per service using indices from allAvailableImages
const serviceImageIndices = {
  'Artists / Celebrities': [0, 1, 2, 3, 4, 5],
  'Concept shoot': [16, 17, 18, 19, 20, 15],
  'Corporate & Short Videos': [12, 13, 0, 1, 2, 3],
  'E-Commerce & Catalogues': [15, 10, 11, 13, 0, 1],
  'Event Photography': [2, 3, 4, 5, 6, 7],
  'Family Portraits': [8, 9, 10, 11, 12, 13],
  'Fashion Photography': [30, 31, 21, 22, 23, 28],
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

export const getServiceImages = (service: Service): string[] => {
  // For Fashion Photography, use verified working images
  if (service.name === 'Fashion Photography') {
    return [
      '/lovable-uploads/92b87e5e-0ec2-44ab-8160-c7335b0d66a0.png', // Burgundy background model
      '/lovable-uploads/38c938f6-27b6-4b7c-80c8-02a42c8cf9d3.png', // Fitness fashion 
      '/lovable-uploads/84376a5b-2662-4bb5-9e37-8e83ca5c09c8.png', // Yellow traditional outfit
      '/lovable-uploads/4c8884df-c0c2-4516-8e86-d559a104323b.png', // Fourth image
      '/lovable-uploads/6d4124cf-49f7-422e-a39a-0fc50e817f81.png', // Fifth image
      '/lovable-uploads/63234086-83f0-42c2-89ed-b8f4bfd7512e.png'  // Sixth image - fashion image
    ];
  }
  
  // Return the service-specific images or default to a generic set
  return serviceImages[service.name] || Array(6).fill(getServiceImage('Concept shoot'));
};
