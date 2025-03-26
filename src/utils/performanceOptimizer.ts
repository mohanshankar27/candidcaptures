
/**
 * Performance Optimizer
 * Focused script to optimize loading times across the application
 * with special attention to Services and Packages pages
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

/**
 * Remove unused CSS and inline critical CSS
 */
export function optimizeCSSDelivery(): void {
  if (typeof window === 'undefined' || !document.querySelectorAll) return;
  
  // Identify and disable unused CSS (demonstration)
  const unusedSelectors = [];
  const styleSheets = Array.from(document.styleSheets);
  
  try {
    styleSheets.forEach(sheet => {
      try {
        const rules = sheet.cssRules || sheet.rules;
        for (let i = 0; i < rules.length; i++) {
          const rule = rules[i];
          if (rule.type === 1) { // CSSStyleRule
            // Fixed: Safely access selectorText
            const selectorText = (rule as CSSStyleRule).selectorText;
            try {
              if (selectorText && document.querySelector(selectorText) === null) {
                unusedSelectors.push(selectorText);
              }
            } catch (e) {
              // Skip invalid selectors
            }
          }
        }
      } catch (e) {
        // Skip cross-origin stylesheets
      }
    });
  } catch (e) {
    console.error('CSS optimization error:', e);
  }
  
  // Log for development insights (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.info(`Detected ${unusedSelectors.length} potentially unused CSS selectors`);
  }
}

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

/**
 * Setup performance monitoring for specific routes
 */
export function setupRoutePerformanceTracking(routesToMonitor: string[] = []): void {
  if (typeof window === 'undefined' || !window.performance) return;
  
  // Performance metrics buffer
  const metrics: Record<string, number[]> = {};
  
  // Track route changes and measure
  const trackRoute = (route: string) => {
    const now = performance.now();
    
    if (!metrics[route]) {
      metrics[route] = [];
    }
    
    // Start timing
    performance.mark(`route_start_${route}`);
    
    // Wait for page to become interactive
    setTimeout(() => {
      performance.mark(`route_end_${route}`);
      
      try {
        // Measure
        performance.measure(
          `route_timing_${route}`,
          `route_start_${route}`,
          `route_end_${route}`
        );
        
        const entries = performance.getEntriesByName(`route_timing_${route}`);
        if (entries.length > 0) {
          const timing = entries[0].duration;
          metrics[route].push(timing);
          
          // Log performance info (only in development)
          if (process.env.NODE_ENV === 'development') {
            const avg = metrics[route].reduce((sum, val) => sum + val, 0) / metrics[route].length;
            console.info(`Route "${route}" loaded in ${timing.toFixed(0)}ms (avg: ${avg.toFixed(0)}ms)`);
            
            if (timing > 3000) {
              console.warn(`Route "${route}" load time exceeds 3 second target (${timing.toFixed(0)}ms)`);
            }
          }
        }
      } catch (e) {
        console.error('Error measuring route performance:', e);
      }
    }, 100);
  };
  
  // Setup route tracking
  if (routesToMonitor.length > 0) {
    // Track initial route
    const currentPath = window.location.pathname;
    if (routesToMonitor.includes(currentPath)) {
      trackRoute(currentPath);
    }
    
    // Setup history listener for future navigation
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      
      // Extract the route from the URL
      const url = args[2] as string;
      if (typeof url === 'string') {
        const route = new URL(url, window.location.origin).pathname;
        if (routesToMonitor.includes(route)) {
          trackRoute(route);
        }
      }
    };
  }
}

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
  
  // Optimize existing images on the page
  optimizePageImages();
  
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
