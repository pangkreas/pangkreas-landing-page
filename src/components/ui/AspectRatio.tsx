
import React from 'react';

interface AspectRatioProps {
  ratio: number;
  children: React.ReactNode;
  className?: string;
}

/**
 * AspectRatio component ensures that children maintain a specific ratio (e.g., 16/9).
 */
export function AspectRatio({ ratio, children, className = '' }: AspectRatioProps) {
  return (
    <div 
      className={`relative w-full ${className}`} 
      style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}
