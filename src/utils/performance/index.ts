
// Main export file for performance utilities
// Re-exports all performance optimization functions for backward compatibility

import { preloadCriticalImages, optimizePageImages } from './imageOptimizer';
import { deferNonCriticalJS, prioritizeResources, setupOnlineStatus } from './resourceLoader';
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
  initializePerformanceOptimizations,
  setupOnlineStatus
};

// Legacy exports for backward compatibility
export function measurePerformance(): void {
  if (typeof window === 'undefined' || !window.performance) return;
  
  // Wait for the page to be fully loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      const paintMetrics = performance.getEntriesByType('paint');
      paintMetrics.forEach(metric => {
        console.log(`${metric.name}: ${metric.startTime}ms`);
      });
    }, 0);
  });
}

export function optimizeImageLoading(): void {
  // Use the new implementation internally
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      optimizePageImages();
    }, 100);
  }
}

// Export a default object with all functions for convenience
export default {
  preloadCriticalImages,
  optimizePageImages,
  deferNonCriticalJS,
  prioritizeResources,
  optimizeCSSDelivery,
  setupIntersectionObserver,
  setupRoutePerformanceTracking,
  initializePerformanceOptimizations,
  measurePerformance,
  optimizeImageLoading,
  setupOnlineStatus
};
