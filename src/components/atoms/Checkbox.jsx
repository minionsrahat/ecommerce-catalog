/**
 * ATOM: Checkbox Component
 *
 * Reusable checkbox component with label support.
 * Used for "Remember me", "Accept terms", etc.
 *
 * Props:
 * - label: Checkbox label text
 * - checked: Boolean - whether checked or not
 * - onChange: Change handler function
 * - id: Unique identifier for the checkbox
 * - className: Additional CSS classes
 */

const Checkbox = ({
  label,
  checked = false,
  onChange,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="ml-2 text-sm text-gray-700 cursor-pointer select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
