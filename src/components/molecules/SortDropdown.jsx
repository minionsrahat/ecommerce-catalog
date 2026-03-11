/**
 * MOLECULE: SortDropdown Component
 *
 * Dropdown for sorting products by different criteria.
 *
 * Props:
 * - value: Current sort option
 * - onChange: Function to handle sort option change
 */

import { Sort } from '@mui/icons-material';

const SortDropdown = ({ value, onChange }) => {
  const sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'price-asc', label: 'Price (Low to High)' },
    { value: 'price-desc', label: 'Price (High to Low)' },
    { value: 'rating-desc', label: 'Rating (High to Low)' },
  ];

  return (
    <div className="flex items-center gap-2">
      <Sort className="text-gray-600" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white cursor-pointer"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;
