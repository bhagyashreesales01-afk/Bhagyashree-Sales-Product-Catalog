import { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { getCategoryImage } from '../components/CategoryGridHelpers';

interface UseImagePreloaderProps {
  products: Product[];
  categories: string[];
  minLoadingTime?: number;
}

interface UseImagePreloaderReturn {
  isLoading: boolean;
  loadingProgress: number;
  preloadedImages: Record<string, HTMLImageElement>;
}

export const useImagePreloader = ({
  products,
  categories,
  minLoadingTime = 5000
}: UseImagePreloaderProps): UseImagePreloaderReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    let isCancelled = false;

    const preloadImages = async () => {
      const productUrls = products.flatMap(p => p.images ?? []);
      const categoryUrls = categories.map(c => getCategoryImage(c));
      const allUrls = [...new Set([...productUrls, ...categoryUrls])];
      const loadedImages: Record<string, HTMLImageElement> = {};

      if (allUrls.length === 0) {
        setTimeout(() => !isCancelled && setIsLoading(false), minLoadingTime);
        return;
      }

      let loadedCount = 0;
      const total = allUrls.length;

      const promises = allUrls.map((url) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.loading = 'eager';
          img.decoding = 'async';

          const handleLoad = () => {
            loadedCount++;
            if (!isCancelled) {
              setLoadingProgress(Math.round((loadedCount / total) * 100));
              loadedImages[url] = img;
            }
            cleanup();
            resolve();
          };

          const handleError = () => {
            loadedCount++;
            if (!isCancelled) setLoadingProgress(Math.round((loadedCount / total) * 100));
            cleanup();
            resolve();
          };

          const cleanup = () => {
            img.onload = null;
            img.onerror = null;
          };

          img.onload = handleLoad;
          img.onerror = handleError;
          img.src = url;
        });
      });

      const minTimePromise = new Promise<void>((resolve) => setTimeout(resolve, minLoadingTime));
      await Promise.allSettled(promises);
      await minTimePromise;

      if (!isCancelled) {
        setPreloadedImages(loadedImages);
        setIsLoading(false);
      }
    };

    preloadImages();

    return () => {
      isCancelled = true;
    };
  }, [products, categories, minLoadingTime]);

  return { isLoading, loadingProgress, preloadedImages };
};
