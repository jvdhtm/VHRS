import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [ react()],
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
