import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,               // allows conditional base for GH Pages vs Vercel
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
