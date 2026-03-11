/**
 * ATOM: Badge Component
 *
 * Small badge for displaying counts, status, or categories.
 * Used for cart item count, category labels, etc.
 *
 * Props:
 * - children: Badge content (usually text or number)
 * - variant: 'primary' | 'success' | 'warning' | 'danger'
 * - className: Additional CSS classes
 */

const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variantStyles = {
    primary: 'bg-primary-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-gray-900',
    danger: 'bg-red-500 text-white',
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold rounded-full ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
