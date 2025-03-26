
// Performance optimization utilities

/**
 * Preloads critical images in the background
 * @param imagePaths Array of image paths to preload
 */
export function preloadImages(imagePaths: string[]): void {
  if (typeof window === 'undefined') return;
  
  // Create a document fragment to avoid reflow
  const fragment = document.createDocumentFragment();
  
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = path;
    link.as = 'image';
    link.fetchPriority = 'high';
    
    fragment.appendChild(link);
  });
  
  // Append all preload links at once
  document.head.appendChild(fragment);
}

/**
 * Defers non-critical resources
 * @param callback Function to execute after initial render
 */
export function deferNonCriticalResources(callback: () => void): void {
  if (typeof window === 'undefined') return;
  
  if (document.readyState === 'complete') {
    setTimeout(callback, 200); // Small delay after load
  } else {
    window.addEventListener('load', () => {
      setTimeout(callback, 200);
    });
  }
}

/**
 * Measures and logs performance metrics
 */
export function measurePerformance(): void {
  if (typeof window === 'undefined' || !window.performance) return;
  
  // Wait for the page to be fully loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
      
      console.log(`Page load time: ${pageLoadTime}ms`);
      console.log(`DOM ready time: ${domReadyTime}ms`);
      
      // Log performance entry data
      const paintMetrics = performance.getEntriesByType('paint');
      paintMetrics.forEach(metric => {
        console.log(`${metric.name}: ${metric.startTime}ms`);
      });
      
      // Get LCP from PerformanceObserver if available
      if ('PerformanceObserver' in window) {
        try {
          new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`Largest Contentful Paint: ${lastEntry.startTime}ms`);
          }).observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {
          console.error('LCP measurement error:', e);
        }
      }
    }, 0);
  });
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
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  
  const elements = document.querySelectorAll(selector);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadCallback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '200px', // Load when within 200px of viewport
    threshold: 0.1
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Apply optimized image loading strategy across the site
 */
export function optimizeImageLoading(): void {
  // Add fetchpriority attribute to critical images
  document.querySelectorAll('img[data-priority="high"]').forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.fetchPriority = 'high';
      img.loading = 'eager';
    }
  });
  
  // Apply lazy loading to non-critical images
  document.querySelectorAll('img:not([data-priority="high"])').forEach(img => {
    if (img instanceof HTMLImageElement && !img.hasAttribute('loading')) {
      img.loading = 'lazy';
      img.decoding = 'async';
    }
  });
}
