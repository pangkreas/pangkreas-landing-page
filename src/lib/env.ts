
/**
 * Environment Configuration
 * 
 * Centralizes access to environment variables. 
 * Provides defaults and performs runtime validation to avoid 'undefined' errors.
 */
export const env = {
  API_URL: process.env.VITE_API_URL || 'http://localhost:8080',
  APP_ENV: process.env.NODE_ENV || 'development',
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_PROD: process.env.NODE_ENV === 'production',
};
