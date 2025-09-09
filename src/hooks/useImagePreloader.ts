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
      // Get all unique image URLs from products
      const imageUrls = products.reduce((urls: string[], product) => {
        if (product.images && product.images.length > 0) {
          urls.push(...product.images);
        }
        return urls;
      }, []);

      // Remove duplicates
      const uniqueImageUrls = [...new Set(imageUrls)];
      
      if (uniqueImageUrls.length === 0) {
        // If no images to preload, just wait for minimum time
        setTimeout(() => {
          setIsLoading(false);
        }, minLoadingTime);
        return;
      }

      let loadedCount = 0;
      const totalImages = uniqueImageUrls.length;

      // Create promises for each image
      const imagePromises = uniqueImageUrls.map((url) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          
          img.onload = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / totalImages) * 100);
            resolve();
          };
          
          img.onerror = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / totalImages) * 100);
            resolve(); // Resolve even on error to continue loading
          };
          
          img.src = url;
        });
      });

      // Start minimum loading time timer
      const minTimePromise = new Promise<void>((resolve) => {
        setTimeout(resolve, minLoadingTime);
      });

      try {
        // Wait for both image preloading and minimum time
        await Promise.all([
          Promise.all(imagePromises),
          minTimePromise
        ]);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [products, minLoadingTime]);

  return { isLoading, loadingProgress };
};