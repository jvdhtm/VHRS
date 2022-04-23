import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'
import vitePluginImp from 'vite-plugin-imp'
import * as path from 'path';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
      }
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve:{
    alias: {
    '@': pathResolve('./src'),
    '~': pathResolve('./node_modules/'),
    }
  }
})
