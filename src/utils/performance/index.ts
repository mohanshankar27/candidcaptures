
// Main export file for performance utilities
// Re-exports all performance optimization functions for backward compatibility

import { preloadCriticalImages, optimizePageImages } from './imageOptimizer';
import { deferNonCriticalJS, prioritizeResources } from './resourceLoader';
import { optimizeCSSDelivery } from './cssOptimizer';
import { setupIntersectionObserver } from './intersectionObserver';
import { setupRoutePerformanceTracking } from './performanceTracker';
import { initializePerformanceOptimizations } from './performanceInitializer';

// Re-export all functions to maintain the same API
export {
  preloadCriticalImages,
  optimizePageImages,
  deferNonCriticalJS,
  prioritizeResources,
  optimizeCSSDelivery,
  setupIntersectionObserver,
  setupRoutePerformanceTracking,
  initializePerformanceOptimizations
};

// Export a default object with all functions for convenience
export default {
  preloadCriticalImages,
  optimizePageImages,
  deferNonCriticalJS,
  prioritizeResources,
  optimizeCSSDelivery,
  setupIntersectionObserver,
  setupRoutePerformanceTracking,
  initializePerformanceOptimizations
};
