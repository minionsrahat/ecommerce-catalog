/**
 * MOLECULE: Divider Component
 *
 * Horizontal divider with optional text in the middle.
 * Used to separate sections (e.g., "OR" between social and email login).
 *
 * Props:
 * - text: Optional text to display in the middle
 * - className: Additional CSS classes
 */

const Divider = ({ text, className = '' }) => {
  if (!text) {
    return <hr className={`border-gray-300 ${className}`} />;
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-white text-gray-500 font-medium">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Divider;
