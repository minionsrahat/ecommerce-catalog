/**
 * ATOM: Link Component
 *
 * Reusable link component for navigation.
 * Can be used for internal routing or external links.
 *
 * Props:
 * - to: Destination URL (for React Router Link)
 * - href: Destination URL (for regular anchor)
 * - children: Link text/content
 * - variant: 'primary' | 'secondary' | 'text'
 * - className: Additional CSS classes
 * - external: Boolean - opens in new tab if true
 */

import { Link as RouterLink } from 'react-router-dom';

const Link = ({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'text-primary-600 hover:text-primary-700 font-medium',
    secondary: 'text-gray-600 hover:text-gray-800',
    text: 'text-gray-700 hover:underline',
  };

  const baseStyles = 'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // If 'to' prop is provided, use React Router Link
  if (to) {
    return (
      <RouterLink
        to={to}
        className={combinedClassName}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }

  // Otherwise, use regular anchor tag
  return (
    <a
      href={href}
      className={combinedClassName}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
