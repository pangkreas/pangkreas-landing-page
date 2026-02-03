
/**
 * Common Type Definitions
 * 
 * Shared interfaces and types used across multiple modules.
 */

export type ID = string | number;

export interface BaseEntity {
  id: ID;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export type ThemeMode = 'light' | 'dark' | 'system';
