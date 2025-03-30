
// Map service names to appropriate images 
const serviceImages: Record<string, string> = {
  'Concept shoot': "/lovable-uploads/fb13bae7-33ad-4972-b884-47d4f113d139.png", // Updated to new goddess concept image
  'Corporate & Short Videos': "/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png", // Updated to new corporate team image
  'Corporate Headshots': "/lovable-uploads/c61284f0-f6ce-4fe3-a1a0-c41bcc09469e.png", // Updated to new professional headshot image
  'E-Commerce & Catalogues': "/lovable-uploads/432982f3-f8c4-40d8-b5da-0c55198c9d7b.png", // Updated to new red blouse image
  'Event Photography': "/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png",
  'Family Portraits': "/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png",
  'Fashion Photography': "/lovable-uploads/702c4c46-bfdd-4ecf-a98c-37ccd7b5f7b4.png", // Updated to new image
  'Food Photography': "/lovable-uploads/9c986aa2-6da0-4710-b9f7-c6195506ba38.png", // Updated to new curry dish image
  'Makeup shoot': "/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png", // Updated to new bridal makeup image
  'Maternity Photography': "/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png", // Updated to new family maternity image
  'Matrimonial Portfolios': "/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png", // Updated to new matrimonial portrait image
  'New Born Baby Shoot': "/lovable-uploads/6066b255-5f3a-4f05-b2b7-f144098189da.png", // Updated to new baby image in red wrap
  'Product Photography': "/lovable-uploads/fd7df534-2749-42ba-bfa7-6188fb3daf76.png", // Updated to new pharmaceutical product image
  'Special Services': "/lovable-uploads/6b3d57da-a4b7-4ab6-8282-a666fc5400b4.png", // Updated to new creative photography services image
  'Toddler & Children': "/lovable-uploads/fe26bc26-2a66-4dfb-aeb8-db5490eeaea9.png", // Updated to new girl in blue dress image
  'Wedding Photography': "/lovable-uploads/d3ea53b8-be87-48d7-bfab-5846b813948e.png" // Updated to new mandap image
};

export const getServiceImage = (serviceName: string): string => {
  return serviceImages[serviceName] || "/placeholder.svg";
};

export default serviceImages;
