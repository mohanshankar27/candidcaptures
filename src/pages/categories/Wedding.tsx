
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { ParticleButton } from '@/components/ui/particle-button';
import { useNavigate } from 'react-router-dom';
import RunningScrawl from '@/components/gallery/RunningScrawl';
import { weddingGalleryItems } from '@/data/gallery-data';

const Wedding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <RunningScrawl message="Wedding Photography • Capturing Timeless Moments • Professional Wedding Photography Services" />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Wedding Photography</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our wedding photography captures the essence of your special day, from intimate moments to grand celebrations, 
              ensuring memories that last a lifetime.
            </p>
          </div>

          <InteractiveBentoGallery
            mediaItems={weddingGalleryItems}
            title="Wedding Photography Collection"
            description="Drag to rearrange and click to explore our wedding photography portfolio"
          />

          <div className="mt-12 text-center">
            <ParticleButton 
              variant="default" 
              size="lg"
              className="mx-auto"
              successDuration={800}
              onSuccess={() => navigate('/packages/wedding')}
            >
              View Wedding Packages
            </ParticleButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wedding;
