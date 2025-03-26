
/**
 * Performance Initializer
 * Main entry point for initializing all performance optimizations
 */

import { preloadCriticalImages } from './imageOptimizer';
import { prioritizeResources, deferNonCriticalJS } from './resourceLoader';
import { optimizeCSSDelivery } from './cssOptimizer';
import { setupIntersectionObserver } from './intersectionObserver';
import { setupRoutePerformanceTracking } from './performanceTracker';

/**
 * Initialize performance optimizations for the application
 */
export function initializePerformanceOptimizations(options = {
  monitorRoutes: ['/services', '/packages', '/packages/corporate', '/packages/wedding'],
  criticalImages: [
    '/lovable-uploads/bd4be06c-5fbf-4f77-81a2-aef9e161d516.png',
    '/lovable-uploads/71dc637a-2ed8-42fe-b045-b78301739a30.png',
    '/lovable-uploads/615d3ac6-4345-48d6-9ed9-b794c68b0307.png'
  ],
  priorityResources: {
    preconnect: ['https://cdn.gpteng.co', 'https://images.unsplash.com'],
    prefetch: ['/services', '/packages'],
    preload: [
      {path: '/src/components/Navbar.tsx', type: 'script' as const},
      {path: '/src/components/Footer.tsx', type: 'script' as const}
    ]
  }
}): void {
  if (typeof window === 'undefined') return;
  
  // Initialize performance tracking
  setupRoutePerformanceTracking(options.monitorRoutes);
  
  // Preload critical images
  preloadCriticalImages(options.criticalImages);
  
  // Set up resource priorities
  prioritizeResources(options.priorityResources);
  
  // Optimize CSS delivery
  deferNonCriticalJS(() => {
    optimizeCSSDelivery();
  }, 500);
  
  // Initialize intersection observers for different elements
  setupIntersectionObserver('.lazy-component', (element) => {
    element.classList.add('loaded');
  });
  
  // Log initialization complete
  if (process.env.NODE_ENV === 'development') {
    console.info('Performance optimizations initialized');
  }
}
