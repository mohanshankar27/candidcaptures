
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import servicesList from '@/data/servicesList';

// Map service names to appropriate images
const serviceImages = {
  'Concept shoot': "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png",
  'Corporate & Short Videos': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'Corporate Headshots': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'E-Commerce & Catalogues': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
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

// Create service thumbnails with proper image mapping
const serviceThumbnails = servicesList.map(service => ({
  name: service.name,
  image: serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png"
}));

const PhotoSlideshow = () => {
  const navigate = useNavigate();

  const navigateToServices = (serviceName: string) => {
    navigate('/services');
    
    const matchingService = servicesList.find(service => service.name === serviceName);
    
    if (matchingService) {
      console.log(`Navigating to service: ${serviceName}`);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Photography Collection</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {serviceThumbnails.map((service, index) => (
            <div 
              key={index}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden bg-white"
              onClick={() => navigateToServices(service.name)}
            >
              <div className="h-32 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-3 text-center bg-primary/5 border-t border-primary/10">
                <h3 className="text-sm font-medium text-primary font-serif italic">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PhotoSlideshow);
