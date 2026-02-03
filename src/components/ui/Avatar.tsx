
import React from 'react';

interface AvatarProps {
  src?: string;
  fallback: string;
  className?: string;
}

export function Avatar({ src, fallback, className = '' }: AvatarProps) {
  return (
    <div className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full border border-gray-200 ${className}`}>
      {src ? (
        <img className="w-full h-full object-cover" src={src} alt="Avatar" />
      ) : (
        <span className="font-medium text-gray-600 uppercase">{fallback.substring(0, 2)}</span>
      )}
    </div>
  );
}
