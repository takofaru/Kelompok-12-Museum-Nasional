import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    base: "/Kelompok-12-Museum-Nasional",
  root: './src',
  build: {
    outDir: '../dist' // ⬅️ jadi hasil build akan berada di ./dist
  }
});
