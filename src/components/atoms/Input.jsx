/**
 * ATOM: Input Component
 *
 * Reusable input field component with label support.
 * Can be used for text, email, number, etc.
 *
 * Props:
 * - label: Input label text
 * - type: Input type (text, email, number, etc.)
 * - value: Input value
 * - onChange: Change handler function
 * - placeholder: Placeholder text
 * - className: Additional CSS classes
 * - error: Error message to display
 */

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
  error = '',
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
