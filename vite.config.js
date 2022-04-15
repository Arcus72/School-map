/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  manifest: true,
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  server: {
    host: true,
    port: 80,
  },
  resolve: {
    alias: [
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
      { find: '@comp', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@data', replacement: path.resolve(__dirname, 'src/data') },
    ],
  },
});
