import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link' | 'destructive';

// Added explicit properties to resolve TypeScript destructuring and assignment errors.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Professional UI Button component.
 * Features consistent spacing, focus states, and multiple visual variants.
 */
export function Button({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  variant = 'primary',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm text-sm';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 active:bg-indigo-800',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400 active:bg-gray-100 shadow-none',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-none',
    destructive: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800',
    link: 'bg-transparent text-indigo-600 hover:underline shadow-none px-0 py-0',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}