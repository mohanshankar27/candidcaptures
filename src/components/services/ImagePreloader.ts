
// Helper for image preloading functionality
export const preloadImages = async (
  imageSources: string[],
  existingPreloaded?: Set<string>
): Promise<Set<string>> => {
  const preloadedImages = new Set(existingPreloaded || []);
  
  const imagePromises = imageSources.map((src) => {
    if (!preloadedImages.has(src)) {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          preloadedImages.add(src);
          resolve();
        };
        img.onerror = () => resolve();
      });
    }
    return Promise.resolve();
  });
  
  await Promise.all(imagePromises);
  return preloadedImages;
};
