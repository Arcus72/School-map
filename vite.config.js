import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  manifest: true,
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  server: {
    host: true,
    port: 80,
  },
});
