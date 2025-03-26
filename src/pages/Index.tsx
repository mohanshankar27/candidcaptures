
import { lazy, Suspense, useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { preloadCriticalImages, deferNonCriticalJS } from '@/utils/performanceOptimizer';
import { criticalImages } from '@/components/slideshow/serviceImages';

// Lazily load non-critical components
const PhotoSlideshow = lazy(() => import('@/components/PhotoSlideshow'));
const ServiceSlider = lazy(() => import('@/components/ServiceSlider'));
const About = lazy(() => import('@/components/About'));
const Contact = lazy(() => import('@/components/Contact'));

// Optimized loading fallback
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-8">
    <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  // Track visibility for delayed loading
  const [loadComplete, setLoadComplete] = useState(false);
  const [secondaryContent, setSecondaryContent] = useState(false);

  useEffect(() => {
    // Start performance measurement
    const startTime = performance.now();
    
    // Preload critical images
    preloadCriticalImages(criticalImages);
    
    // Mark critical content as loaded
    const markLoadComplete = () => {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setLoadComplete(true);
        document.removeEventListener('readystatechange', markLoadComplete);
        
        if (process.env.NODE_ENV === 'development') {
          const loadTime = performance.now() - startTime;
          console.info(`Index critical content loaded: ${loadTime.toFixed(0)}ms`);
        }
      }
    };

    // Check if document is already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setLoadComplete(true);
    } else {
      document.addEventListener('readystatechange', markLoadComplete);
    }
    
    // Defer loading of secondary content with reduced delay
    deferNonCriticalJS(() => {
      setSecondaryContent(true);
    }, 75); // Reduced from 100ms to 75ms for faster perceived performance

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
      {loadComplete && (
        <Suspense fallback={<LoadingFallback />}>
          <PhotoSlideshow />
        </Suspense>
      )}
      
      <CTA />
      
      {/* Only load these components when initial page load is complete and user has scrolled down */}
      {secondaryContent && (
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
