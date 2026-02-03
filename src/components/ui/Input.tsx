import React from 'react';

// Added explicit className to satisfy destructuring requirements when extending HTML attributes.
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

/**
 * Standard UI Input component.
 * Features consistent borders, focus states, and optional label/error text.
 */
export function Input({ label, error, className = '', ...props }: InputProps) {
  const baseInputStyles = 'w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all';
  const errorStyles = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`${baseInputStyles} ${errorStyles} ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-600 mt-1">{error}</span>
      )}
    </div>
  );
}