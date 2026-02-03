
import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

/**
 * Standard UI Slider component.
 */
export function Slider({ min, max, step = 1, value, onChange, className = '' }: SliderProps) {
  return (
    <div className={`relative flex w-full touch-none select-none items-center ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-indigo-600"
      />
    </div>
  );
}
