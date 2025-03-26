
/**
 * Resource Loader
 * Utilities for prioritizing and optimizing resource loading
 */

/**
 * Prioritize loading of critical resources
 * @param resources Object containing resources to prioritize
 */
export function prioritizeResources(resources: {
  preconnect?: string[];
  prefetch?: string[];
  preload?: Array<{path: string; type: 'script' | 'style' | 'image' | 'font'}>
}): void {
  if (typeof window === 'undefined') return;
  
  const { preconnect = [], prefetch = [], preload = [] } = resources;
  
  // Create a document fragment to avoid reflow
  const fragment = document.createDocumentFragment();
  
  // Add preconnect links
  preconnect.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    link.crossOrigin = 'anonymous';
    fragment.appendChild(link);
  });
  
  // Add prefetch links
  prefetch.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    fragment.appendChild(link);
  });
  
  // Add preload links
  preload.forEach(({ path, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = path;
    link.as = type;
    fragment.appendChild(link);
  });
  
  // Append all links at once
  document.head.appendChild(fragment);
}

/**
 * Defer execution of non-critical JavaScript
 * @param callback Function to execute after a delay
 * @param delay Delay in milliseconds (default: 100)
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
