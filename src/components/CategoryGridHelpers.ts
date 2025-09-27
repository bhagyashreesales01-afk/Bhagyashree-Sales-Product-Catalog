// src/components/CategoryGridHelpers.ts
export const getCategoryImage = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'floor cleaner':
      return '/assets/category/floor-cleaner.png';
    case 'naphthalene balls':
      return '/assets/category/napthaline-balls.png';
    case 'floor wiper':
      return '/assets/category/floor-wiper.png';
    case 'cotton mops':
      return '/assets/category/cotton-mops.png';
    case 'boric powder':
      return '/assets/category/boric-powder.png';
    case 'dusters':
      return '/assets/category/dusters.png';
    case 'brooms':
      return '/assets/category/broom.webp';
    case 'other essentials':
      return '/assets/category/others-essentials.png';
    case 'candles':
      return '/assets/category/candles.png';
    default:
      return '/assets/category/floor-cleaner.png';
  }
};
