
import React from 'react';

export type ToastType = 'info' | 'success' | 'error';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
}

interface ToasterProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

/**
 * Toaster component that displays a stack of active toast messages.
 */
export function Toaster({ toasts, onRemove }: ToasterProps) {
  return (
    <div className="fixed bottom-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto relative mb-2 flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all animate-in slide-in-from-right-full ${
            toast.type === 'success' ? 'bg-white border-green-200 text-green-800' :
            toast.type === 'error' ? 'bg-white border-red-200 text-red-800' :
            'bg-white border-gray-200'
          }`}
        >
          <div className="grid gap-1">
            <div className="text-sm font-semibold">{toast.title}</div>
            {toast.description && (
              <div className="text-sm opacity-90">{toast.description}</div>
            )}
          </div>
          <button
            onClick={() => onRemove(toast.id)}
            className="absolute right-2 top-2 rounded-md p-1 text-gray-500 opacity-50 transition-opacity hover:opacity-100"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
