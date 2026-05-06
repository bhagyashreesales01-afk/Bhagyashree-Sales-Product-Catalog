import { useEffect } from 'react';
import { Product } from '../types/Product';
import { getCategoryImage } from '../components/CategoryGridHelpers';

interface UseImagePrefetcherProps {
  products: Product[];
  categories: string[];
}

export const useImagePrefetcher = ({ products, categories }: UseImagePrefetcherProps) => {
  useEffect(() => {
    const productUrls = products.flatMap(p => p.images ?? []);
    const categoryUrls = categories.map(c => getCategoryImage(c));
    const allUrls = [...new Set([...productUrls, ...categoryUrls])];

    allUrls.forEach((url) => {
      if (!url) return;

      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = 'image';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    return () => {
      const links = document.querySelectorAll('link[rel="prefetch"][as="image"]');
      links.forEach(link => {
        if (allUrls.includes(link.href)) {
          link.remove();
        }
      });
    };
  }, [products, categories]);
};
