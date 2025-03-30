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
  '/lovable-uploads/63234086-83f0-42c2-89ed-b8f4bfd7512e.png',
  '/lovable-uploads/5652a952-5189-439e-919e-a3ae22826386.png',
  '/lovable-uploads/c564d2e1-cf57-4560-aedd-4c9d12a5ba2b.png',
  '/lovable-uploads/335052c1-47b5-40f4-88c9-f69b5ae52ebb.png',
  '/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png',
  '/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png',
  '/lovable-uploads/d5af9480-02f6-4601-98cd-5bd10840f0c8.png',
  '/lovable-uploads/702c4c46-bfdd-4ecf-a98c-37ccd7b5f7b4.png',
  '/lovable-uploads/9c986aa2-6da0-4710-b9f7-c6195506ba38.png',
  '/lovable-uploads/d3ea53b8-be87-48d7-bfab-5846b813948e.png',
  '/lovable-uploads/fb13bae7-33ad-4972-b884-47d4f113d139.png',
  '/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png',
  '/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png',
  '/lovable-uploads/6b1e5df0-9fb9-4289-835f-ee80acf9fdfa.png',
  '/lovable-uploads/c61284f0-f6ce-4fe3-a1a0-c41bcc09469e.png',
  '/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png',
  '/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png',
  '/lovable-uploads/6b3d57da-a4b7-4ab6-8282-a666fc5400b4.png'
];

// Map of service names to 6 unique images per service using indices from allAvailableImages
const serviceImageIndices = {
  'Artists / Celebrities': [0, 1, 2, 3, 4, 5],
  'Concept shoot': [16, 17, 18, 19, 20, 15],
  'Corporate & Short Videos': [12, 13, 0, 1, 2, 3],
  'E-Commerce & Catalogues': [15, 10, 11, 13, 0, 1],
  'Event Photography': [34, 5, 6, 7, 10, 2],
  'Family Portraits': [39, 8, 10, 11, 12, 13],
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
  'Wedding Photography': [3, 5, 7, 9, 11, 13],
  'New Born Baby Shoot': [29, 30, 31, 32, 33, 34]
};

// Convert indices to actual image URLs
const serviceImages = Object.entries(serviceImageIndices).reduce((acc, [serviceName, indices]) => {
  acc[serviceName] = indices.map(index => allAvailableImages[index]);
  return acc;
}, {} as Record<string, string[]>);

export const getServiceImages = (service: Service): string[] => {
  // For Fashion Photography, use specific working images including the new image
  if (service.name === 'Fashion Photography') {
    return [
      '/lovable-uploads/702c4c46-bfdd-4ecf-a98c-37ccd7b5f7b4.png',
      '/lovable-uploads/38c938f6-27b6-4b7c-80c8-02a42c8cf9d3.png',
      '/lovable-uploads/84376a5b-2662-4bb5-9e37-8e83ca5c09c8.png',
      '/lovable-uploads/4c8884df-c0c2-4516-8e86-d559a104323b.png',
      '/lovable-uploads/6d4124cf-49f7-422e-a39a-0fc50e817f81.png',
      '/lovable-uploads/63234086-83f0-42c2-89ed-b8f4bfd7512e.png'
    ];
  }
  
  // For Event Photography, use specific working images including the family photo
  if (service.name === 'Event Photography') {
    return [
      '/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png',
      '/lovable-uploads/5652a952-5189-439e-919e-a3ae22826386.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png'
    ];
  }
  
  // For Family Portraits, use specific working images including the new family photo
  if (service.name === 'Family Portraits') {
    return [
      '/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
      '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png'
    ];
  }
  
  // For Food Photography, use specific working images including the new curry dish image
  if (service.name === 'Food Photography') {
    return [
      '/lovable-uploads/9c986aa2-6da0-4710-b9f7-c6195506ba38.png',
      '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
      '/lovable-uploads/5faf55b4-c582-4816-aa3b-99e8faa9a73d.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png'
    ];
  }
  
  // For Wedding Photography, use specific working images including the new mandap image
  if (service.name === 'Wedding Photography') {
    return [
      '/lovable-uploads/d3ea53b8-be87-48d7-bfab-5846b813948e.png',
      '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
      '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png'
    ];
  }
  
  // For Concept shoot, use specific working images including the new goddess concept image
  if (service.name === 'Concept shoot') {
    return [
      '/lovable-uploads/fb13bae7-33ad-4972-b884-47d4f113d139.png',
      '/lovable-uploads/4a67f538-ecc9-41af-87e5-08ddea7ba4f6.png',
      '/lovable-uploads/6401c725-7910-476d-b26c-898ff561ccaf.png',
      '/lovable-uploads/507c487a-ec87-4401-ace4-4b27d7bcd2e0.png',
      '/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png',
      '/lovable-uploads/fb019637-e8cb-4a43-9303-075fd194e2b8.png'
    ];
  }
  
  // For Corporate & Short Videos, use specific working images including the new corporate team image
  if (service.name === 'Corporate & Short Videos') {
    return [
      '/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png',
      '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
      '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png'
    ];
  }
  
  // For Makeup shoot, use specific working images including the new bridal makeup image
  if (service.name === 'Makeup shoot') {
    return [
      '/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png',
      '/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png',
      '/lovable-uploads/507c487a-ec87-4401-ace4-4b27d7bcd2e0.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png'
    ];
  }
  
  // For Special Services, use specific working images including the new decorative horse image
  if (service.name === 'Special Services') {
    return [
      '/lovable-uploads/6b1e5df0-9fb9-4289-835f-ee80acf9fdfa.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png',
      '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png'
    ];
  }
  
  // For Corporate Headshots, use specific working images including the new professional headshot image
  if (service.name === 'Corporate Headshots') {
    return [
      '/lovable-uploads/c61284f0-f6ce-4fe3-a1a0-c41bcc09469e.png',
      '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
      '/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png'
    ];
  }
  
  // For Maternity Photography, use specific working images including the new family maternity image
  if (service.name === 'Maternity Photography') {
    return [
      '/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png',
      '/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png',
      '/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png',
      '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
      '/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png',
      '/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png'
    ];
  }
  
  // For Matrimonial Portfolios, use specific working images including the new portrait image
  if (service.name === 'Matrimonial Portfolios') {
    return [
      '/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png',
      '/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png',
      '/lovable-uploads/3b0c013d-b9fb-40c8-b991-7781c698945e.png',
      '/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png',
      '/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png',
      '/lovable-uploads/d5af9480-02f6-4601-98cd-5bd10840f0c8.png'
    ];
  }
  
  // For New Born Baby Shoot, use specific working images including the new baby chef image
  if (service.name === 'New Born Baby Shoot') {
    return [
      '/lovable-uploads/6b3d57da-a4b7-4ab6-8282-a666fc5400b4.png',
      '/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png',
      '/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png',
      '/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png',
      '/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png',
      '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png'
    ];
  }
  
  // Return the service-specific images or default to a generic set
  return serviceImages[service.name] || Array(6).fill('/placeholder.svg');
};
