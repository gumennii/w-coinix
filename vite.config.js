import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: 'w-coinix',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        privacyPolicy: resolve(__dirname, 'src/privacy-policy.html'),
      }
    }
  },
});
