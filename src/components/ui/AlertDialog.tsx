import React from 'react';
import { Dialog } from './Dialog';
import { Button } from './Button';

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
}

/**
 * AlertDialog component.
 * Specialized Dialog for confirmations, preventing accidental critical actions.
 */
export function AlertDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}: AlertDialogProps) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={title} description={description}>
      <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <Button variant="outline" onClick={onClose} className="mt-2 sm:mt-0">
          {cancelText}
        </Button>
        <Button onClick={onConfirm} variant="destructive">
          {confirmText}
        </Button>
      </div>
    </Dialog>
  );
}
