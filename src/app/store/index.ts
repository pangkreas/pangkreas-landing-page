
import { create } from 'zustand';

/**
 * Global application state definition.
 */
interface AppState {
  isInitialized: boolean;
  setInitialized: (value: boolean) => void;
}

/**
 * Main application store hook.
 * Follows the external store pattern, providing a reactive hook for components
 * and a subscription-based model for non-react logic.
 */
export const useAppStore = create<AppState>((set) => ({
  isInitialized: false,
  setInitialized: (value) => set({ isInitialized: value }),
}));
