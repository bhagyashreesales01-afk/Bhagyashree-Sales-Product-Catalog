import React, { useMemo } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // Sort only when the products array changes
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => a.id - b.id);
  }, [products]);

  return (
    <div className="overflow-y-auto px-2 py-2 lg:px-4 lg:py-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
