
// Helper for image preloading functionality with optimized loading
export const preloadImages = async (
  imageSources: string[],
  existingPreloaded?: Set<string>
): Promise<Set<string>> => {
  const preloadedImages = new Set(existingPreloaded || []);
  
  // Use Promise.allSettled instead of Promise.all for better error handling
  // This prevents one failing image from blocking the entire batch
  const imagePromises = imageSources.map((src) => {
    if (!preloadedImages.has(src)) {
      return new Promise<void>((resolve) => {
        const img = new Image();
        // Add loading priority hint
        img.fetchPriority = "high";
        img.src = src;
        img.onload = () => {
          preloadedImages.add(src);
          resolve();
        };
        img.onerror = () => resolve(); // Don't block on error
        
        // Add timeout to prevent hanging on slow images
        setTimeout(resolve, 2000);
      });
    }
    return Promise.resolve();
  });
  
  // Use a timeout of 2 seconds to ensure we don't block rendering
  const timeoutPromise = new Promise<void>(resolve => setTimeout(resolve, 2000));
  
  // Race between image loading and timeout
  await Promise.race([
    Promise.allSettled(imagePromises),
    timeoutPromise
  ]);
  
  return preloadedImages;
};

// Helper to preload critical images immediately
export const preloadCriticalImages = (imageSources: string[]) => {
  imageSources.slice(0, 3).forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
