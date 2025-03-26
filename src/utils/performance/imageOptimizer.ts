
/**
 * Image Optimizer
 * Utilities for optimizing image loading and performance
 */

// Cache for preloaded images to avoid duplicate requests
const preloadedImageCache = new Set<string>();

/**
 * Preload critical images with high priority
 * @param imagePaths Array of image paths to preload
 */
export function preloadCriticalImages(imagePaths: string[]): void {
  if (typeof window === 'undefined') return;
  
  // Skip if already preloaded
  const filteredPaths = imagePaths.filter(path => !preloadedImageCache.has(path));
  if (filteredPaths.length === 0) return;
  
  // Create a document fragment to avoid reflow
  const fragment = document.createDocumentFragment();
  
  filteredPaths.forEach(path => {
    // Add to cache
    preloadedImageCache.add(path);
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = path;
    link.as = 'image';
    link.fetchPriority = 'high';
    
    fragment.appendChild(link);
  });
  
  // Append all preload links at once to minimize DOM operations
  document.head.appendChild(fragment);
}

/**
 * Optimizes image elements on the page by setting appropriate loading attributes
 * based on visibility and importance
 */
export function optimizePageImages(): void {
  if (typeof window === 'undefined') return;
  
  // Prioritize above-the-fold images
  const viewportHeight = window.innerHeight;
  
  document.querySelectorAll('img').forEach((img) => {
    const rect = img.getBoundingClientRect();
    const isAboveTheFold = rect.top < viewportHeight;
    
    // Set loading strategy based on visibility
    if (isAboveTheFold) {
      img.loading = 'eager';
      if ('fetchPriority' in HTMLImageElement.prototype) {
        (img as any).fetchPriority = 'high';
      }
      img.decoding = 'sync';
    } else {
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }
      if (!img.hasAttribute('decoding')) {
        img.decoding = 'async';
      }
    }
  });
}
