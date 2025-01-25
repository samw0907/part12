import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Accept connections from the Docker network
    port: 5173,
    strictPort: true, // Prevent fallback to another port
    watch: {
      usePolling: true, // Enable polling to watch for file changes
    },
    allowedHosts: ['todo-frontend', 'localhost', '127.0.0.1'], // Allow connections from the frontend container and localhost
  },
  test: {
    environment: 'jsdom',  // Ensure Vitest uses jsdom for testing
    setupFiles: ['./src/setupTests.js'],  // Ensure setup file is run before tests
    globals: true,
  },
});
