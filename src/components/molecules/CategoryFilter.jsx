/**
 * MOLECULE: CategoryFilter Component
 *
 * Horizontal list of category buttons for filtering products.
 * Combines multiple Button atoms.
 *
 * Props:
 * - categories: Array of category objects
 * - activeCategory: Currently selected category ID
 * - onCategoryChange: Function to handle category selection
 */

import { Button } from '../atoms';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? 'primary' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name} ({category.count})
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
