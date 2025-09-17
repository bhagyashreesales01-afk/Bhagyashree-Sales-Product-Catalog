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
    const preloadImages = async () => {
      // Get all unique image URLs
      const imageUrls = products.reduce((urls: string[], product) => {
        if (product.images && product.images.length > 0) {
          urls.push(...product.images);
        }
        return urls;
      }, []);

      const uniqueImageUrls = [...new Set(imageUrls)];

      if (uniqueImageUrls.length === 0) {
        // No images, just wait for min time
        setTimeout(() => setIsLoading(false), minLoadingTime);
        return;
      }

      let loadedCount = 0;
      const totalImages = uniqueImageUrls.length;

      // Create promises for each image
      const imagePromises = uniqueImageUrls.map((url) => {
        return new Promise<void>((resolve) => {
          const img = new Image();

          img.onload = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / totalImages) * 100);
            resolve();
          };

          img.onerror = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / totalImages) * 100);
            resolve(); // Continue even if failed
          };

          img.src = url;
        });
      });

      // Run timer alongside image loading
      const minTimePromise = new Promise<void>((resolve) => {
        setTimeout(resolve, minLoadingTime);
      });

      try {
        // Wait for both
        await Promise.allSettled(imagePromises);
        await minTimePromise;
      } catch (error) {
        console.warn('Image preload error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [products, minLoadingTime]);

  return { isLoading, loadingProgress };
};
