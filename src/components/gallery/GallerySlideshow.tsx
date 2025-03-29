
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface GallerySlideshowProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  images: string[];
  serviceName: string;
  onNavigate: (direction: 'prev' | 'next', e: React.MouseEvent) => void;
}

const GallerySlideshow: React.FC<GallerySlideshowProps> = ({
  isOpen,
  onClose,
  currentIndex,
  images,
  serviceName,
  onNavigate
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-5xl p-0 border-4 border-orange-400 bg-black" 
        onClick={e => e.stopPropagation()}
      >
        {/* Fixed accessibility by adding proper DialogTitle and DialogDescription */}
        <DialogTitle className="sr-only">
          {serviceName} Image Gallery
        </DialogTitle>
        <DialogDescription id="gallery-description" className="sr-only">
          Navigate through {serviceName} images using left and right arrows
        </DialogDescription>
        
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          <img 
            src={images[currentIndex]} 
            alt={`${serviceName} image ${currentIndex + 1}`} 
            className="max-w-full max-h-full object-contain"
          />
          
          <button 
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={(e) => onNavigate('prev', e)}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={(e) => onNavigate('next', e)}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-orange-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GallerySlideshow;
