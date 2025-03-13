
import { useState, useEffect } from 'react';
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

// Array of wedding photos for the slideshow
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

  // Set up autoplay
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

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Photography Collection</h2>
        
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

      {/* Enlarged Image View */}
      <Dialog open={enlargedImageIndex !== null} onOpenChange={closeImageView}>
        <DialogContent className="max-w-5xl p-0 border-4 border-[#1e40af] bg-black" onClick={(e) => e.stopPropagation()}>
          {enlargedImageIndex !== null && (
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
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoSlideshow;
