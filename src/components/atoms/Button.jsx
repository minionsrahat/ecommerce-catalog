/**
 * ATOM: Button Component
 *
 * Reusable button component with different variants and sizes.
 * This is a presentational component - it only renders UI.
 *
 * Props:
 * - children: Button text/content
 * - variant: 'primary' | 'secondary' | 'outline'
 * - size: 'sm' | 'md' | 'lg'
 * - onClick: Click handler function
 * - disabled: Boolean to disable button
 * - className: Additional CSS classes
 */

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  // Base styles that apply to all buttons
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 disabled:border-gray-300 disabled:text-gray-300',
  };

  // Size-specific styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} disabled:cursor-not-allowed disabled:opacity-60`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
