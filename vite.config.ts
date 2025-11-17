import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [
    dts({ 
      tsconfigPath: './tsconfig.app.json',
      exclude: ['**/*.stories.ts']
    }),
    react(),
  ],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});

