import React from 'react';

// Added explicit interfaces with key support to satisfy strict TS checks on component lists.
export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  key?: React.Key;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardProps) {
  return <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: CardProps) {
  return <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: CardProps) {
  return <p className={`text-sm text-gray-500 mt-1 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = '' }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: CardProps) {
  return <div className={`p-6 border-t border-gray-100 bg-gray-50/50 ${className}`}>{children}</div>;
}