import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// Made children optional to fix erroneous "missing property" reports in parent components.
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * Accessible Modal Dialog component.
 */
export function Dialog({ isOpen, onClose, title, description, children }: DialogProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      
      {/* Content */}
      <div 
        className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          {title && <h2 className="text-lg font-semibold text-gray-900">{title}</h2>}
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
        <div className="mt-4">
          {children}
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>,
    document.body
  );
}