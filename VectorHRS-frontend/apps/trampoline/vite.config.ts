import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'
import * as path from 'path'

export default defineConfig({
  plugins: [svgr(), react()],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': {}
  },
  server: {
    proxy: {
        //Focus here
        '/api': {
            target: 'http://localhost:4000',
            changeOrigin: true,
        },
        '/auth': {
          target: 'http://localhost:4000',
          changeOrigin: true,
        }
    }
  }
});
