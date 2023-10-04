import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
  base: '/LOSANGELES-MOUNTAINS',
});
