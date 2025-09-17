import React from 'react';
import { Package, Droplets, Sparkles, Box } from 'lucide-react';

interface CategoryGridProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

// Helpers kept outside to avoid re-creation on each render
const getCategoryIcon = (category: string) => {
  const common = 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12';
  switch (category.toLowerCase()) {
    case 'floor cleaner':
      return <Droplets className={`${common} text-blue-600`} />;
    case 'naphthalene balls':
      return <Sparkles className={`${common} text-purple-600`} />;
    case 'floor wiper':
      return <Droplets className={`${common} text-blue-600`} />;
    case 'cotton mops':
      return <Sparkles className={`${common} text-purple-600`} />;
    case 'boric powder': // ✅ new category
      return <Box className={`${common} text-teal-600`} />;
    case 'dusters': // ✅ new category
      return <Sparkles className={`${common} text-pink-600`} />;
    case 'other essentials':
      return <Box className={`${common} text-orange-600`} />;
    case 'candles':
      return <Sparkles className={`${common} text-yellow-600`} />;
    default:
      return <Package className={`${common} text-gray-600`} />;
  }
};

const getCategoryImage = (category: string) => {
  switch (category.toLowerCase()) {
    case 'floor cleaner':
      return '/assets/category/floor-cleaner.png';
    case 'naphthalene balls':
      return '/assets/category/napthaline-balls.png';
    case 'floor wiper':
      return '/assets/category/floor-wiper.png';
    case 'cotton mops':
      return '/assets/category/cotton-mops.png';
    case 'boric powder': // ✅ new category
      return '/assets/category/boric-powder.png';
    case 'dusters': // ✅ new category
      return '/assets/category/dusters.png';
    case 'other essentials':
      return '/assets/category/others-essentials.png';
    case 'candles':
      return '/assets/category/candles.png';
    default:
      return '/assets/category/floor-cleaner.png';
  }
};

// Single-tile component so each tile manages its own image fallback state
const CategoryTile: React.FC<{
  category: string;
  onClick: () => void;
}> = ({ category, onClick }) => {
  const [imgOk, setImgOk] = React.useState(true);

  return (
    <button
      onClick={onClick}
      aria-label={`${category} category`}
      className="group flex flex-col items-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400/40 rounded-lg"
    >
      {/* Visual */}
      <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-1.5 md:mb-2 overflow-hidden flex items-center justify-center bg-gray-50 rounded-lg">
        {imgOk ? (
          <img
            src={getCategoryImage(category)}
            alt={category}
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
            onError={() => setImgOk(false)}
            loading="lazy"
            decoding="async"
          />
        ) : (
          getCategoryIcon(category)
        )}
      </div>

      {/* Label */}
      <h3 className="text-[10px] md:text-xs lg:text-sm font-semibold text-gray-800 text-center leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
        {category}
      </h3>
    </button>
  );
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onCategorySelect }) => {
  // ✅ Ensure "Other Essentials" always comes last
  const sortedCategories = [...categories]
    .filter((category) => category.toLowerCase() !== 'dish cleaner') // remove dish cleaner
    .sort((a, b) => {
      if (a.toLowerCase() === 'other essentials') return 1;
      if (b.toLowerCase() === 'other essentials') return -1;
      return 0;
    });

  return (
    <div className="mb-4 md:mb-6">
      {/* Compact 3-up on mobile, scales up on larger screens */}
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-y-3 md:gap-y-4 gap-x-2 md:gap-x-3">
        {sortedCategories.map((category) => (
          <CategoryTile
            key={category}
            category={category}
            onClick={() => onCategorySelect(category)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
