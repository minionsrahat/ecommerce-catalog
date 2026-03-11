/**
 * ATOM: Card Component
 *
 * Basic card container for wrapping content.
 * Provides consistent styling for card-based layouts.
 *
 * Props:
 * - children: Card content
 * - className: Additional CSS classes
 * - hover: Enable hover effect
 * - onClick: Click handler (makes card clickable)
 */

const Card = ({ children, className = '', hover = false, onClick }) => {
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverStyles = hover ? 'transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
