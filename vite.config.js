import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// для mkcert сделать yarn add vite-plugin-mkcert
// import mkcert from 'vite-plugin-mkcert'

import path from 'path'

export default defineConfig({
  server: {
    host: true,
    port: 8088,
    // https: true,
    watch: {
      usePolling: true,
    },
  },

  define: {
    'process.env': process.env,
  },

  build: {
    minify: 'terser',
    // emptyOutDir: true,
    emptyOutDir: false,
    outDir: path.resolve(__dirname, './dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'vue_hall_scheme_view',
      fileName: format => `vue_hall_scheme_view.${format}.js`,
      formats: ['umd'],
    },
  },

  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue',
      },
    },
  },

  plugins: [
    vue(),
    // mkcert(),
    // splitVendorChunkPlugin(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import '@/assets/less/shared/_variables.less';
          @import '@/assets/less/shared/_mixins.less';
          @import '@/assets/less/shared/_fonts.less';
        `,
      },
    },
  },
})
