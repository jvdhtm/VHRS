import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    rollupOptions: {
     external: ['react', 'react/jsx-runtime','@mui/icons-material','@mui/material', '@mui/styled-engine-sc'],
     },
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
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
