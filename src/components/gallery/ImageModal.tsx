
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { url: string; alt: string }[];
  selectedIndex: number | null;
  onNavigate: (direction: "prev" | "next") => void;
  onSelectImage: (index: number) => void;
}

const ImageModal = ({
  isOpen,
  onClose,
  images,
  selectedIndex,
  onNavigate,
  onSelectImage,
}: ImageModalProps) => {
  // Return early if selectedIndex is null or images array is empty
  if (selectedIndex === null || images.length === 0) return null;
  
  // Ensure selectedIndex is within bounds of the images array
  const validIndex = Math.max(0, Math.min(selectedIndex, images.length - 1));
  const currentImage = images[validIndex];

  // Ensure we have a valid image before rendering
  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[90vw] w-[90vw] p-0 border-none bg-black/95 rounded-xl shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[85vh] flex items-center justify-center">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            src={currentImage.url} 
            alt={currentImage.alt} 
            className="max-w-full max-h-full object-contain shadow-xl"
          />
          
          <button 
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          
          <motion.button 
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            onClick={() => onNavigate("prev")}
          >
            <ChevronLeft className="w-7 h-7" />
          </motion.button>
          
          <motion.button 
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            onClick={() => onNavigate("next")}
          >
            <ChevronRight className="w-7 h-7" />
          </motion.button>
          
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 px-4">
            <div className="bg-black/60 py-3 px-5 rounded-full backdrop-blur-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onSelectImage(index)}
                  className={`w-2.5 h-2.5 mx-1 rounded-full transition-all ${
                    index === validIndex ? "bg-orange-400 w-5" : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-16 left-0 right-0 text-center">
            <p className="text-white/90 font-medium px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm mx-auto max-w-max">
              {currentImage.alt}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
