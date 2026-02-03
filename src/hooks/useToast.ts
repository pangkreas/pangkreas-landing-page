
import { useState, useCallback } from 'react';
import { ToastMessage, ToastType } from '../components/ui/Toast';

/**
 * useToast hook provides an interface to trigger notifications from anywhere.
 */
export function useToast() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const toast = useCallback(({ title, description, type = 'info', duration = 3000 }: {
    title: string;
    description?: string;
    type?: ToastType;
    duration?: number;
  }) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, toast, removeToast };
}
