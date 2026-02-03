import React from 'react';

type BadgeVariant = 'default' | 'secondary' | 'outline' | 'destructive' | 'success';

// Made children optional to fix "missing children" TS error during JSX parsing.
interface BadgeProps {
  children?: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-indigo-600 text-white border-transparent',
    secondary: 'bg-gray-100 text-gray-800 border-transparent',
    outline: 'bg-transparent text-gray-600 border-gray-200',
    destructive: 'bg-red-100 text-red-700 border-transparent',
    success: 'bg-emerald-100 text-emerald-700 border-transparent',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}