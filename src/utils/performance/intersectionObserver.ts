
/**
 * Intersection Observer Utility
 * Utilities for lazy loading elements when they come into view
 */

/**
 * Setup lazy loading for both images and components
 * using IntersectionObserver
 */
export function setupIntersectionObserver(
  selector: string,
  loadCallback: (element: Element) => void,
  options = { rootMargin: '200px', threshold: 0.1 }
): void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadCallback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  elements.forEach(element => {
    observer.observe(element);
  });
}
