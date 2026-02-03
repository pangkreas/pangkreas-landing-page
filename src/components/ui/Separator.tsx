
import React from 'react';

export function Separator({ className = '', orientation = 'horizontal' }: { className?: string; orientation?: 'horizontal' | 'vertical' }) {
  return (
    <div 
      className={`bg-gray-200 shrink-0 ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full'} ${className}`} 
      role="separator" 
    />
  );
}
