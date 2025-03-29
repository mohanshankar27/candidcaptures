
import { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

// Array of unique wedding photos for the slideshow - removed any duplicate of the woman in traditional attire
const weddingPhotos = [
  "/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png",
  "/lovable-uploads/a3bc1529-edae-4409-8b04-c96378625e25.png", 
  "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
  "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
  "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
  "/lovable-uploads/2d3cd7f7-c670-4f54-9c52-629af45c0f3e.png",
  "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
  "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
  "/lovable-uploads/e612e8f7-3f32-4c0d-a920-b83e95752820.png",
  "/lovable-uploads/f046c9be-865f-4636-94e3-1ddf71ca3039.png",
  "/lovable-uploads/932908b8-c3eb-4a8c-b97a-7948d2de4bce.png",
  "/lovable-uploads/1e8e3b73-0675-48f7-a578-9f204a21062c.png",
  "/lovable-uploads/f981f530-98b4-46e6-8063-68406ae598e1.png",
  "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png",
  // Removed duplicate image at the end
];

interface WeddingSlideshowProps {
  autoplay?: boolean;
  interval?: number;
}

const WeddingSlideshow = ({ autoplay = true, interval = 3000 }: WeddingSlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Set up autoplay functionality
  useEffect(() => {
    if (!autoplay || !api) return;
    
    const timer = setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [api, autoplay, interval, isPaused]);

  return (
    <div 
      className="w-full max-w-5xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Wedding Photoshoot Gallery</h2>
      
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {weddingPhotos.map((photo, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-lg aspect-[16/9] bg-muted">
                  <img 
                    src={photo} 
                    alt={`Wedding photo ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6">
          <CarouselPrevious className="mr-2 relative static left-0 translate-y-0" />
          <CarouselNext className="ml-2 relative static right-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default WeddingSlideshow;
