import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getTextSizeClass = (text: string) => {
    const length = text.length;

    if (length <= 50) {
      return 'text-sm lg:text-base';
    }

    if (length <= 70) {
      return 'text-xs lg:text-sm';
    }

    return 'text-xs';
  };

  // Use the first product image or fallback to placeholder
  const productImage =
    product.images?.length > 0
      ? product.images[0]
      : '/assets/placeholder.png';

  // Products where Selling Rate should be displayed instead of MRP
  const showSellingRate =
    (product.category === 'Floor Wiper' &&
      (product.id === 54 || product.id === 55)) ||
    (product.category === 'Dusters' &&
      product.id >= 90 &&
      product.id <= 98) ||
    (product.category === 'Other Essentials' &&
      (product.id === 115 || product.id === 64));

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const image = event.currentTarget;

    // Prevent an infinite fallback loop
    if (!image.src.endsWith('/assets/placeholder.png')) {
      image.src = '/assets/placeholder.png';
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="
        block
        w-full
        overflow-hidden
        rounded-lg
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-lg
        cursor-pointer
        group
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
      "
    >
      {/* Product Image */}
      <div
        className="
          flex
          w-full
          h-40
          sm:h-44
          lg:h-52
          items-center
          justify-center
          overflow-hidden
          bg-gradient-to-br
          from-gray-50
          to-gray-100
        "
      >
        <img
          src={productImage}
          alt={product.name || 'Product'}
          className="
            block
            w-full
            h-full
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
          loading="lazy"
          decoding="async"
          onError={handleImageError}
        />
      </div>

      {/* Product Information */}
      <div
        className="
          flex
          min-h-[120px]
          flex-col
          gap-2
          p-3
          lg:min-h-[140px]
          lg:p-4
        "
      >
        {/* Category */}
        {product.category && (
          <span
            className="
              inline-block
              w-fit
              rounded-full
              bg-blue-100
              px-2
              py-1
              text-xs
              font-medium
              text-blue-800
            "
          >
            {product.category}
          </span>
        )}

        {/* Product Name */}
        <h3
          className={`
            ${getTextSizeClass(product.name || '')}
            flex-grow
            line-clamp-2
            font-semibold
            leading-tight
            text-gray-800
          `}
        >
          {product.name || 'Unnamed Product'}
        </h3>

        {/* Price / Packaging */}
        <div
          className="
            mt-auto
            flex
            flex-col
            gap-2
            border-t
            border-gray-100
            pt-2
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* MRP / Selling Rate */}
          {showSellingRate ? (
            product['Selling rate'] ? (
              <span
                className="
                  text-sm
                  font-bold
                  text-blue-600
                  lg:text-base
                "
              >
                Selling Rate: ₹{product['Selling rate']}
              </span>
            ) : null
          ) : product.MRP ? (
            <span
              className="
                text-sm
                font-bold
                text-blue-600
                lg:text-base
              "
            >
              MRP: ₹{product.MRP}
            </span>
          ) : null}

          {/* Packaging Size */}
          {product.category !== 'Floor Wiper' &&
            product.category !== 'Candles' &&
            product.category !== 'Dusters' &&
            product.Packaging_Size && (
              <span
                className="
                  inline-block
                  w-fit
                  rounded-md
                  bg-green-100
                  px-2
                  py-1
                  text-xs
                  font-medium
                  text-gray-600
                  lg:text-sm
                "
              >
                {product.Packaging_Size}
              </span>
            )}

          {/* Candle Size */}
          {product.category === 'Candles' &&
            product.candle_size && (
              <span
                className="
                  inline-block
                  w-fit
                  rounded-md
                  bg-yellow-100
                  px-2
                  py-1
                  text-xs
                  font-medium
                  text-gray-600
                  lg:text-sm
                "
              >
                {product.candle_size}
              </span>
            )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
