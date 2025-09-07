import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getTextSizeClass = (text: string) => {
    const length = text.length;
    if (length <= 30) return 'text-sm lg:text-base';
    if (length <= 50) return 'text-sm lg:text-base';
    if (length <= 70) return 'text-xs lg:text-sm';
    return 'text-xs';
  };

  // Safe image fallback
  const productImage =
    product.images && product.images.length > 0
      ? product.images[0]
      : '/assets/placeholder.png'; // fallback placeholder image

  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white rounded-lg lg:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden w-full block cursor-pointer hover:scale-[1.02] group"
    >
      {/* Product Image */}
      <div className="w-full h-40 sm:h-44 lg:h-52 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={productImage}
          alt={product.name || 'Product'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/placeholder.png';
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-3 lg:p-4 flex flex-col gap-2 min-h-[120px] lg:min-h-[140px]">
        {product.category && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs lg:text-xs font-medium px-2 py-1 rounded-full w-fit">
            {product.category}
          </span>
        )}

        <h3
          className={`${getTextSizeClass(
            product.name || ''
          )} font-semibold text-gray-800 line-clamp-2 flex-grow leading-tight`}
        >
          {product.name || 'Unnamed Product'}
        </h3>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-auto pt-2 border-t border-gray-100">
          {product.MRP && (
            <span className="font-bold text-blue-600 text-sm lg:text-base">
              MRP: ₹{product.MRP}
            </span>
          )}

          {product.category !== 'Floor Wiper' &&
            product.Packaging_Size && (
              <span className="text-xs lg:text-sm text-gray-600 bg-green-100 px-2 py-1 rounded-md font-medium">
                {product.Packaging_Size}
              </span>
            )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
