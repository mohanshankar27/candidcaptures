
// Map service names to appropriate images 
const serviceImages: Record<string, string> = {
  'Concept shoot': "/lovable-uploads/fb13bae7-33ad-4972-b884-47d4f113d139.png", // Updated to new goddess concept image
  'Corporate & Short Videos': "/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png", // Updated to new corporate team image
  'Corporate Headshots': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'E-Commerce & Catalogues': "/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png",
  'Event Photography': "/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png",
  'Family Portraits': "/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png",
  'Fashion Photography': "/lovable-uploads/702c4c46-bfdd-4ecf-a98c-37ccd7b5f7b4.png", // Updated to new image
  'Food Photography': "/lovable-uploads/9c986aa2-6da0-4710-b9f7-c6195506ba38.png", // Updated to new curry dish image
  'Makeup shoot': "/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png", // Updated to new bridal makeup image
  'Maternity Photography': "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
  'Matrimonial Portfolios': "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
  'Naming Ceremony': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'New Born Baby Shoot': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'Product Photography': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  'Product shoot': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Special Services': "/lovable-uploads/6b1e5df0-9fb9-4289-835f-ee80acf9fdfa.png", // Updated to new decorative horse image
  'Toddler & Children': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Wedding Photography': "/lovable-uploads/d3ea53b8-be87-48d7-bfab-5846b813948e.png" // Updated to new mandap image
};

export const getServiceImage = (serviceName: string): string => {
  return serviceImages[serviceName] || "/placeholder.svg";
};

export default serviceImages;
