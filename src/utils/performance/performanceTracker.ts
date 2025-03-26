
/**
 * Performance Tracker
 * Utilities for tracking and measuring performance metrics
 */

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
