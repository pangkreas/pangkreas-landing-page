import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Vite Configuration
 * Configures the build system to support React, HMR, and path aliases.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Vite targets modern browsers, all of which support modulepreload. Avoid
    // shipping the legacy runtime polyfill in the critical entry chunk.
    modulePreload: { polyfill: false },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
