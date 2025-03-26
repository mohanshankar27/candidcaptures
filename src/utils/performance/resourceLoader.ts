
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

/**
 * Track online status of users
 * @returns Object with methods to track online status
 */
export function setupOnlineStatus() {
  if (typeof window === 'undefined') return {
    isOnline: true,
    startTracking: () => {},
    stopTracking: () => {},
  };
  
  const onlineUsers = new Set<string>();
  let isTracking = false;
  
  // Update online status every 30 seconds
  const updateInterval = 30 * 1000;
  let intervalId: number | null = null;
  
  const updateOnlineStatus = () => {
    // In a real app, this would sync with the server
    const currentTime = new Date().toISOString();
    console.log(`Online status updated at ${currentTime}`);
    
    // Display online badge in UI
    const onlineBadge = document.getElementById('online-status-badge');
    if (onlineBadge) {
      onlineBadge.classList.remove('hidden');
      onlineBadge.setAttribute('title', `Last seen: ${currentTime}`);
    }
  };
  
  const startTracking = () => {
    if (isTracking) return;
    
    isTracking = true;
    updateOnlineStatus();
    
    // Set up interval for periodic updates
    intervalId = window.setInterval(updateOnlineStatus, updateInterval);
    
    // Listen for online/offline events
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', () => {
      console.log('User went offline');
      const onlineBadge = document.getElementById('online-status-badge');
      if (onlineBadge) {
        onlineBadge.classList.add('hidden');
      }
    });
  };
  
  const stopTracking = () => {
    if (!isTracking) return;
    
    isTracking = false;
    
    // Clear interval
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
    
    // Remove event listeners
    window.removeEventListener('online', updateOnlineStatus);
    window.removeEventListener('offline', updateOnlineStatus);
  };
  
  return {
    isOnline: navigator?.onLine ?? true,
    startTracking,
    stopTracking,
  };
}
