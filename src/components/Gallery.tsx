
import { useState, useEffect } from "react";
import GallerySlideshow from "./gallery/GallerySlideshow";
import GalleryThumbnails from "./gallery/GalleryThumbnails";
import ImageModal from "./gallery/ImageModal";
import { galleryImages } from "./gallery/GalleryData";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, galleryImages.length]);
  
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
        return (prevIndex - 1 + galleryImages.length) % galleryImages.length;
      });
    } else {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return null;
        return (prevIndex + 1) % galleryImages.length;
      });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Work</h2>
        
        {/* Horizontal Slideshow */}
        <GallerySlideshow 
          images={galleryImages}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          onImageClick={openImageModal}
        />
        
        {/* Thumbnails Row */}
        <GalleryThumbnails 
          images={galleryImages}
          activeSlide={activeSlide}
          onThumbnailClick={setActiveSlide}
        />
      </div>

      {/* Enhanced Image Modal/Dialog */}
      <ImageModal 
        isOpen={selectedImageIndex !== null}
        onClose={closeImageModal}
        images={galleryImages}
        selectedIndex={selectedImageIndex}
        onNavigate={navigateImage}
        onSelectImage={setSelectedImageIndex}
      />
    </section>
  );
};

export default Gallery;
