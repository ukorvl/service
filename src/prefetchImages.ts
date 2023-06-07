/**
 * Prefetches images for temporary hidden pages to load them from cache when needed.
 *
 * @param srcArray Array of sources to load.
 */
export const prefetchImages = async (srcArray: string[]) => {
  const promises = srcArray.map(src => {
    return new Promise((res, rej) => {
      const img = new Image();

      img.src = src;
      img.onload = res;
      img.onerror = rej;
    });
  });

  await Promise.all(promises);
};
