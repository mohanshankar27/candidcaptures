
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery"
import { demoGalleryItems } from "@/data/gallery-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function BentoGridGalleryDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 overflow-y-auto">
        <InteractiveBentoGallery
          mediaItems={demoGalleryItems}
          title="Gallery Shots Collection"
          description="Drag and explore our curated collection of shots"
        />
      </div>
      
      <Footer />
    </div>
  )
}
