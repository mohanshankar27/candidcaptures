
// Map service names to appropriate images 
const serviceImages: Record<string, string> = {
  'Concept shoot': "/lovable-uploads/fb13bae7-33ad-4972-b884-47d4f113d139.png", // Updated to new goddess concept image
  'Corporate & Short Videos': "/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png", // Updated to new corporate team image
  'Corporate Headshots': "/lovable-uploads/c61284f0-f6ce-4fe3-a1a0-c41bcc09469e.png", // Updated to new professional headshot image
  'E-Commerce & Catalogues': "/lovable-uploads/3346c7fa-c327-4873-a6e2-35da082a7f6e.png",
  'Event Photography': "/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png",
  'Family Portraits': "/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png",
  'Fashion Photography': "/lovable-uploads/702c4c46-bfdd-4ecf-a98c-37ccd7b5f7b4.png", // Updated to new image
  'Food Photography': "/lovable-uploads/9c986aa2-6da0-4710-b9f7-c6195506ba38.png", // Updated to new curry dish image
  'Makeup shoot': "/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png", // Updated to new bridal makeup image
  'Maternity Photography': "/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png", // Updated to new family maternity image
  'Matrimonial Portfolios': "/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png", // Updated to new matrimonial portrait image
  'New Born Baby Shoot': "/lovable-uploads/6b3d57da-a4b7-4ab6-8282-a666fc5400b4.png", // Updated to new baby chef image
  'Product Photography': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  'Product shoot': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Toddler & Children': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Wedding Photography': "/lovable-uploads/d3ea53b8-be87-48d7-bfab-5846b813948e.png" // Updated to new mandap image
};

export const getServiceImage = (serviceName: string): string => {
  return serviceImages[serviceName] || "/placeholder.svg";
};

export default serviceImages;
