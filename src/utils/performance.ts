
// Performance optimization utilities
// Re-export all functions from the performance directory

import {
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
} from './performance/index';

// Re-export all functions
export {
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

/**
 * Preloads critical images in the background
 * @param imagePaths Array of image paths to preload
 */
export function preloadImages(imagePaths: string[]): void {
  // Delegate to the new implementation
  preloadCriticalImages(imagePaths);
}

/**
 * Defers non-critical resources
 * @param callback Function to execute after initial render
 */
export function deferNonCriticalResources(callback: () => void): void {
  // Delegate to the new implementation
  deferNonCriticalJS(callback, 200);
}

/**
 * Add IntersectionObserver to lazy-load elements when they come into view
 * @param selector The CSS selector for elements to observe
 * @param loadCallback Function to call when element is in view
 */
export function setupLazyLoading(
  selector: string, 
  loadCallback: (element: Element) => void
): void {
  // Delegate to the new implementation
  setupIntersectionObserver(selector, loadCallback);
}

// Default export for convenience
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
  preloadImages,
  deferNonCriticalResources,
  setupLazyLoading,
  setupOnlineStatus
};
