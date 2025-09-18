import { useState, useEffect } from 'react';
import { Product } from '../types/Product';

interface UseImagePreloaderProps {
  products: Product[];
  minLoadingTime?: number;
}

interface UseImagePreloaderReturn {
  isLoading: boolean;
  loadingProgress: number;
}

export const useImagePreloader = ({ 
  products, 
  minLoadingTime = 3500 
}: UseImagePreloaderProps): UseImagePreloaderReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let isCancelled = false; // ✅ prevent memory leaks

    const preloadImages = async () => {
      // Collect all unique image URLs
      const imageUrls = products.flatMap(p => p.images ?? []);
      const uniqueImageUrls = [...new Set(imageUrls)];

      if (uniqueImageUrls.length === 0) {
        setTimeout(() => {
          if (!isCancelled) setIsLoading(false);
        }, minLoadingTime);
        return;
      }

      let loadedCount = 0;
      const totalImages = uniqueImageUrls.length;

      const imagePromises = uniqueImageUrls.map((url) => {
        return new Promise<void>((resolve) => {
          const img = new Image();

          const handleLoad = () => {
            loadedCount++;
            if (!isCancelled) {
              setLoadingProgress(Math.round((loadedCount / totalImages) * 100));
            }
            resolve();
          };

          img.onload = handleLoad;
          img.onerror = handleLoad;
          img.src = url;
        });
      });

      const minTimePromise = new Promise<void>((resolve) => {
        setTimeout(resolve, minLoadingTime);
      });

      try {
        await Promise.allSettled(imagePromises);
        await minTimePromise;
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    };

    preloadImages();

    return () => {
      isCancelled = true; // ✅ cleanup
    };
  }, [products, minLoadingTime]);

  return { isLoading, loadingProgress };
};
