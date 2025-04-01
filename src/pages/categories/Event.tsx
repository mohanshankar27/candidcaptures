
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { ParticleButton } from '@/components/ui/particle-button';
import { useNavigate } from 'react-router-dom';
import RunningScrawl from '@/components/gallery/RunningScrawl';
import { eventGalleryItems } from '@/data/gallery-data';

const Event = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <RunningScrawl message="Event Photography • Corporate Events • Birthday Parties • Concerts • Special Occasions" />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Event Photography</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our event photography services capture the atmosphere, emotions, and key moments of your
              special occasions, from corporate gatherings to private celebrations.
            </p>
          </div>

          <InteractiveBentoGallery
            mediaItems={eventGalleryItems}
            title="Event Photography Collection"
            description="Explore our event photography portfolio — drag to rearrange, click to view"
          />

          <div className="mt-12 text-center">
            <ParticleButton 
              variant="default" 
              size="lg"
              className="mx-auto"
              successDuration={800}
              onSuccess={() => navigate('/packages/event')}
            >
              View Event Packages
            </ParticleButton>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Event;
