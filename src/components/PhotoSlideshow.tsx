
import { useState, useEffect, memo } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import servicesList from '@/data/servicesList';

// Map service names to appropriate images
const serviceImages = {
  'Concept shoot': "/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png",
  'Corporate & Short Videos': "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png",
  'Corporate Headshots': "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  'E-Commerce & Catalogues': "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  'Event Photography': "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  'Family Portraits': "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  'Fashion Photography': "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  'Food Photography': "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
  'Makeup shoot': "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
  'Maternity Photography': "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
  'Matrimonial Portfolios': "/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png",
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
  image: serviceImages[service.name] || "/lovable-uploads/0e3af22f-eb15-463b-80be-159d6b53f595.png" // Fallback image
}));

const slideshowPhotos = [
  "/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png",
  "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png", 
  "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
  "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
  "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png"
];

const PhotoSlideshow = () => {
  const [enlargedImageIndex, setEnlargedImageIndex] = useState<number | null>(null);
  const [api, setApi] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [api]);

  const openImageView = (index: number) => {
    setEnlargedImageIndex(index);
  };

  const closeImageView = () => {
    setEnlargedImageIndex(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (enlargedImageIndex === null) return;
    
    if (direction === 'prev') {
      setEnlargedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex - 1 + slideshowPhotos.length) % slideshowPhotos.length;
      });
    } else {
      setEnlargedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex + 1) % slideshowPhotos.length;
      });
    }
  };

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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
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
        
        <Carousel 
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            loop: true,
            align: "start"
          }}
        >
          <CarouselContent>
            {slideshowPhotos.map((photo, index) => (
              <CarouselItem 
                key={index} 
                className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
                onClick={() => openImageView(index)}
              >
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl aspect-[4/3] relative group">
                    <img 
                      src={photo} 
                      alt={`Photography collection ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static left-0 translate-y-0 h-10 w-10 bg-white/80 hover:bg-white shadow-md" />
            <CarouselNext className="relative static right-0 translate-y-0 h-10 w-10 bg-white/80 hover:bg-white shadow-md" />
          </div>
        </Carousel>
      </div>

      {enlargedImageIndex !== null && (
        <Dialog open={enlargedImageIndex !== null} onOpenChange={closeImageView}>
          <DialogContent className="max-w-5xl p-0 border-4 border-[#1e40af] bg-black" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[80vh]">
              <img 
                src={slideshowPhotos[enlargedImageIndex]} 
                alt={`Photography collection ${enlargedImageIndex + 1}`} 
                className="w-full h-full object-contain"
              />
              
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeImageView}
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {slideshowPhotos.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === enlargedImageIndex ? 'bg-[#1e40af]' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default memo(PhotoSlideshow);
