
import { useState, useCallback } from 'react';

/**
 * useToggle Hook
 * 
 * Provides a boolean state and a memoized function to toggle it.
 * Useful for modals, dropdowns, and switch components.
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, { toggle, setTrue, setFalse }] as const;
}
