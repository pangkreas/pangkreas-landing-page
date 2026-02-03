import React from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  title?: string;
  className?: string;
}

/**
 * Standard UI Alert component.
 * Used for communicating important status messages to the user.
 */
export function Alert({ 
  children, 
  variant = 'info', 
  title, 
  className = '' 
}: AlertProps) {
  const variants = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200',
  };

  return (
    <div className={`p-4 rounded-lg border flex flex-col gap-1 ${variants[variant]} ${className}`} role="alert">
      {title && (
        <span className="font-bold text-sm uppercase tracking-wide">
          {title}
        </span>
      )}
      <div className="text-sm">
        {children}
      </div>
    </div>
  );
}
