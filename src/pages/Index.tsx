
import { lazy, Suspense, useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Lazily load non-critical components
const PhotoSlideshow = lazy(() => import('@/components/PhotoSlideshow'));
const ServiceSlider = lazy(() => import('@/components/ServiceSlider'));
const About = lazy(() => import('@/components/About'));
const Contact = lazy(() => import('@/components/Contact'));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-16">
    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  // Track visibility for delayed loading
  const [loadComplete, setLoadComplete] = useState(false);

  useEffect(() => {
    // Mark critical content as loaded
    const markLoadComplete = () => {
      if (document.readyState === 'complete') {
        setLoadComplete(true);
        document.removeEventListener('readystatechange', markLoadComplete);
      }
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      setLoadComplete(true);
    } else {
      document.addEventListener('readystatechange', markLoadComplete);
    }

    return () => {
      document.removeEventListener('readystatechange', markLoadComplete);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Immediate load for Gallery (visible above the fold) */}
      <Gallery />
      
      {/* Lazy load additional components */}
      <Suspense fallback={<LoadingFallback />}>
        <PhotoSlideshow />
      </Suspense>
      
      <CTA />
      
      {/* Only load these components when initial page load is complete */}
      {loadComplete && (
        <>
          <Suspense fallback={<LoadingFallback />}>
            <ServiceSlider />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
