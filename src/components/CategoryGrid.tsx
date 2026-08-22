import React, { useMemo, useState } from 'react';
import {
  Package,
  Droplets,
  Sparkles,
  Box,
} from 'lucide-react';
import { getCategoryImage } from '../components/CategoryGridHelpers';

interface CategoryGridProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const getCategoryIcon = (category: string) => {
  const common =
    'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12';

  switch (category.toLowerCase()) {
    case 'floor cleaner':
      return (
        <Droplets
          className={`${common} text-blue-600`}
        />
      );

    case 'naphthalene balls':
      return (
        <Sparkles
          className={`${common} text-purple-600`}
        />
      );

    case 'floor wiper':
      return (
        <Droplets
          className={`${common} text-blue-600`}
        />
      );

    case 'cotton mops':
      return (
        <Sparkles
          className={`${common} text-purple-600`}
        />
      );

    case 'boric powder':
      return (
        <Box
          className={`${common} text-teal-600`}
        />
      );

    case 'dusters':
      return (
        <Sparkles
          className={`${common} text-pink-600`}
        />
      );

    case 'brooms':
      return (
        <Box
          className={`${common} text-green-600`}
        />
      );

    case 'other essentials':
      return (
        <Box
          className={`${common} text-orange-600`}
        />
      );

    case 'candles':
      return (
        <Sparkles
          className={`${common} text-yellow-600`}
        />
      );

    default:
      return (
        <Package
          className={`${common} text-gray-600`}
        />
      );
  }
};

interface CategoryTileProps {
  category: string;
  onClick: () => void;
}

const CategoryTile: React.FC<CategoryTileProps> = ({
  category,
  onClick,
}) => {
  const [imgOk, setImgOk] = useState(true);

  const imageSrc = useMemo(
    () => getCategoryImage(category),
    [category]
  );

  const handleImageError = () => {
    setImgOk(false);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${category} category`}
      className="
        group
        flex
        flex-col
        items-center
        rounded-lg
        transition-transform
        duration-200
        hover:scale-105
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400/40
      "
    >
      {/* Category Image */}
      <div
        className="
          mb-1.5
          flex
          h-12
          w-12
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          bg-gray-50
          md:mb-2
          md:h-16
          md:w-16
          lg:h-20
          lg:w-20
        "
      >
        {imgOk ? (
          <img
            src={imageSrc}
            alt=""
            aria-hidden="true"
            className="
              h-full
              w-full
              object-cover
              transition-opacity
              duration-200
              group-hover:opacity-80
            "
            onError={handleImageError}
            loading="lazy"
            decoding="async"
          />
        ) : (
          getCategoryIcon(category)
        )}
      </div>

      {/* Category Name */}
      <h3
        className="
          line-clamp-2
          text-center
          text-[10px]
          font-semibold
          leading-snug
          text-gray-800
          transition-colors
          group-hover:text-blue-600
          md:text-xs
          lg:text-sm
        "
      >
        {category}
      </h3>
    </button>
  );
};

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  onCategorySelect,
}) => {
  const sortedCategories = useMemo(() => {
    return [...categories]
      .filter(
        (category) =>
          category.toLowerCase() !== 'dish cleaner'
      )
      .sort((a, b) => {
        if (
          a.toLowerCase() === 'other essentials'
        ) {
          return 1;
        }

        if (
          b.toLowerCase() === 'other essentials'
        ) {
          return -1;
        }

        return 0;
      });
  }, [categories]);

  return (
    <div className="mb-4 md:mb-6">
      <div
        className="
          grid
          grid-cols-3
          gap-x-2
          gap-y-3
          md:grid-cols-5
          md:gap-x-3
          md:gap-y-4
          lg:grid-cols-6
        "
      >
        {sortedCategories.map((category) => (
          <CategoryTile
            key={category}
            category={category}
            onClick={() =>
              onCategorySelect(category)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
