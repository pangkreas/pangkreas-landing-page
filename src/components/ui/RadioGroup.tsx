
import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

/**
 * RadioGroup component for choosing one value among many.
 */
export function RadioGroup({ options, value, onChange, label, className = '' }: RadioGroupProps) {
  return (
    <div className={`space-y-3 ${className}`} role="radiogroup">
      {label && <legend className="text-sm font-medium text-gray-700 mb-2">{label}</legend>}
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input
                type="radio"
                className="sr-only"
                name={label || 'radiogroup'}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
              />
              <div className={`h-4 w-4 rounded-full border border-gray-300 bg-white transition-all ring-offset-2 ${
                value === option.value ? 'border-indigo-600 ring-2 ring-indigo-500' : 'group-hover:border-gray-400'
              }`}>
                {value === option.value && (
                  <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-indigo-600" />
                )}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
