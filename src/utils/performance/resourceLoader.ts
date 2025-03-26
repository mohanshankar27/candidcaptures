
/**
 * Resource Loader
 * Utilities for optimizing resource loading and prioritization
 */

/**
 * Defer non-critical JavaScript execution
 * @param callback Function to execute
 * @param delay Optional delay in milliseconds
 */
export function deferNonCriticalJS(callback: () => void, delay = 100): void {
  if (typeof window === 'undefined') return;
  
  if (document.readyState === 'complete') {
    setTimeout(callback, delay);
  } else {
    window.addEventListener('load', () => {
      setTimeout(callback, delay);
    });
  }
}

/**
 * Immediately invoke high-priority resource loading
 * @param resources Resources to preload/prefetch
 */
export function prioritizeResources(resources: {
  preconnect?: string[],
  prefetch?: string[],
  preload?: Array<{path: string, type: "script" | "style" | "image" | "font"}>
}): void {
  if (typeof window === 'undefined') return;
  
  const fragment = document.createDocumentFragment();
  
  // Add preconnect links
  if (resources.preconnect) {
    resources.preconnect.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      fragment.appendChild(link);
    });
  }
  
  // Add prefetch links for routes
  if (resources.prefetch) {
    resources.prefetch.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      fragment.appendChild(link);
    });
  }
  
  // Add preload links for critical resources
  if (resources.preload) {
    resources.preload.forEach(item => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = item.path;
      link.as = item.type;
      
      if (item.type === 'font') {
        link.crossOrigin = 'anonymous';
      }
      
      fragment.appendChild(link);
    });
  }
  
  // Append to head
  document.head.appendChild(fragment);
}
