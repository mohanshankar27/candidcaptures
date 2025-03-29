
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import GalleryImage from "./GalleryImage";
import GalleryIndicators from "./GalleryIndicators";

interface GallerySlideshowProps {
  images: { url: string; alt: string }[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  onImageClick: (index: number) => void;
}

const GallerySlideshow = ({ 
  images, 
  activeSlide, 
  setActiveSlide, 
  onImageClick 
}: GallerySlideshowProps) => {
  return (
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
              <GalleryImage 
                url={image.url} 
                alt={image.alt} 
                index={index} 
                onClick={onImageClick} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static left-0 translate-y-0 mr-2 bg-white/80 hover:bg-white" />
          <CarouselNext className="relative static right-0 translate-y-0 ml-2 bg-white/80 hover:bg-white" />
        </div>
      </Carousel>
      
      <GalleryIndicators 
        count={images.length} 
        activeIndex={activeSlide} 
        onIndicatorClick={setActiveSlide} 
      />
    </div>
  );
};

export default GallerySlideshow;
