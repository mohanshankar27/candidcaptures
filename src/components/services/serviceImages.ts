
import { galleryImagesWithCategories } from "../InViewGallery";

// Map service names to appropriate images 
const serviceImages: Record<string, string> = {
  'Concept shoot': galleryImagesWithCategories.find(i => i.category === 'Concept shoot')?.src || "/lovable-uploads/fb13bae7-33ad-4972-b884-47d4f113d139.png",
  'Corporate & Short Videos': "/lovable-uploads/9bc16cc2-a103-4803-a922-903bd674693c.png",
  'Corporate Headshots': "/lovable-uploads/c61284f0-f6ce-4fe3-a1a0-c41bcc09469e.png",
  'E-Commerce & Catalogues': "/lovable-uploads/432982f3-f8c4-40d8-b5da-0c55198c9d7b.png",
  'Event Photography': galleryImagesWithCategories.find(i => i.category === 'Event Photography')?.src || "/lovable-uploads/365286f1-0e48-4fbc-99df-71eae1704b72.png",
  'Family Portraits': galleryImagesWithCategories.find(i => i.category === 'Family Portraits')?.src || "/lovable-uploads/9a29c088-c19b-4147-bb38-58aaafa0d9f7.png",
  'Fashion Photography': galleryImagesWithCategories.find(i => i.category === 'Fashion Photography')?.src || "/lovable-uploads/702c4c46-bfdd-4ecf-a98c-37ccd7b5f7b4.png",
  'Food Photography': galleryImagesWithCategories.find(i => i.category === 'Food Photography')?.src || "/lovable-uploads/9c986aa2-6da0-4710-b9f7-c6195506ba38.png",
  'Makeup shoot': "/lovable-uploads/cad21907-840a-459a-8e84-261e5dd02084.png",
  'Maternity Photography': galleryImagesWithCategories.find(i => i.category === 'Maternity Photography')?.src || "/lovable-uploads/8b3e3260-20a8-4a51-ac28-59e1f1b41bb2.png",
  'Matrimonial Portfolios': galleryImagesWithCategories.find(i => i.category === 'Matrimonial Portfolios')?.src || "/lovable-uploads/0ef8c636-5a0e-4fe4-aedb-03f82bc3c8d4.png",
  'New Born Baby Shoot': galleryImagesWithCategories.find(i => i.category === 'New Born Baby Shoot')?.src || "/lovable-uploads/6066b255-5f3a-4f05-b2b7-f144098189da.png",
  'Product Photography': galleryImagesWithCategories.find(i => i.category === 'Product Photography')?.src || "/lovable-uploads/fd7df534-2749-42ba-bfa7-6188fb3daf76.png",
  'Special Services': galleryImagesWithCategories.find(i => i.category === 'Special Services')?.src || "/lovable-uploads/43b3b2f5-3919-44f7-8575-f1e18682bf73.png",
  'Toddler & Children': galleryImagesWithCategories.find(i => i.category === 'Toddler & Children')?.src || "/lovable-uploads/fe26bc26-2a66-4dfb-aeb8-db5490eeaea9.png",
  'Wedding Photography': galleryImagesWithCategories.find(i => i.category === 'Wedding Photography')?.src || "/lovable-uploads/d3ea53b8-be87-48d7-bfab-5846b813948e.png"
};

export const getServiceImage = (serviceName: string): string => {
  return serviceImages[serviceName] || "/placeholder.svg";
};

export default serviceImages;
