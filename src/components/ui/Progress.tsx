
import React from 'react';

export function Progress({ value = 0, className = '' }: { value?: number; className?: string }) {
  return (
    <div className={`relative h-4 w-full overflow-hidden rounded-full bg-gray-100 ${className}`}>
      <div
        className="h-full w-full flex-1 bg-indigo-600 transition-all duration-300"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
}
