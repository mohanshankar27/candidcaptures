
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
    {
      url: "/lovable-uploads/9f2ac349-a655-4b65-aeee-a9025b3d7b17.png",
      alt: "Studio portrait with dramatic lighting against dark background",
    },
    {
      url: "/lovable-uploads/a6d35b17-76d1-4a77-89b4-5760943e213b.png",
      alt: "Black and white portrait with dramatic lighting",
    },
    {
      url: "/lovable-uploads/44fdad37-1724-4cad-a878-bb2baf05b83b.png",
      alt: "Artistic bridal preparation photoshoot with dramatic lighting",
    },
    {
      url: "/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png",
      alt: "Romantic beach bonfire photoshoot with fairy lights and colorful flags",
    },
    {
      url: "/lovable-uploads/8d5e6443-143d-4c94-be94-b1e0b3cc76b2.png",
      alt: "Traditional ceremony with floral garlands and festive lighting",
    },
    {
      url: "/lovable-uploads/53584cdb-e83c-4e6f-8b99-37ba6c8fc6b8.png",
      alt: "Elegant portrait with traditional jewelry and attire in dramatic lighting",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, images.length]);
  
  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setAutoplay(false); // Pause autoplay when modal is open
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
    setAutoplay(true); // Resume autoplay when modal is closed
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return;
    
    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex - 1 + images.length) % images.length;
      });
    } else {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex + 1) % images.length;
      });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Work</h2>
        
        {/* Horizontal Slideshow */}
        <div className="max-w-5xl mx-auto mb-8">
          <Carousel 
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
            setApi={(api) => {
              if (api) {
                api.on("select", () => {
                  const selectedSlide = api.selectedScrollSnap();
                  setActiveSlide(selectedSlide);
                });
              }
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[16/9] w-full cursor-pointer"
                    onClick={() => openImageModal(index)}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 rounded-lg opacity-50" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-sm">{image.alt}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="relative static right-0 translate-y-0 ml-2 bg-white/80 hover:bg-white" />
            </div>
          </Carousel>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeSlide === index ? "bg-orange-500 w-4" : "bg-gray-300"
                }`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnails Row */}
        <div className="flex justify-center gap-2 overflow-x-auto pb-4 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-20 h-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-all ${
                activeSlide === index ? "border-orange-500" : "border-transparent"
              }`}
              onClick={() => setActiveSlide(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal/Dialog */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={closeImageModal}>
        <DialogContent className="max-w-5xl p-0 border-4 border-orange-400 bg-black" onClick={(e) => e.stopPropagation()}>
          {selectedImageIndex !== null && (
            <div className="relative w-full h-[80vh]">
              <img 
                src={images[selectedImageIndex].url} 
                alt={images[selectedImageIndex].alt} 
                className="w-full h-full object-contain"
              />
              
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={closeImageModal}
              >
                <X className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === selectedImageIndex ? "bg-orange-400" : "bg-white/50"
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

export default Gallery;
