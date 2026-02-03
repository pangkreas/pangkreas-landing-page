import React from 'react';

// Added explicit className to satisfy destructuring requirements.
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

/**
 * Standard UI Checkbox component.
 * Custom styled checkbox with an optional label.
 */
export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return (
    <label className={`flex items-center gap-2 cursor-pointer select-none ${className}`}>
      <input
        type="checkbox"
        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition-colors"
        {...props}
      />
      {label && (
        <span className="text-sm text-gray-700 font-medium">
          {label}
        </span>
      )}
    </label>
  );
}