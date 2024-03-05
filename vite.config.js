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
    emptyOutDir: true,
    outDir: path.resolve(__dirname, './dist'),
    // outDir: path.resolve(__dirname, './../public/css_js/admin/hall_scheme_app'),
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'vue_hall_scheme_app',
      fileName: format => `vue_hall_scheme_app.${format}.js`,
      formats: ['umd'],
    },
  },
  // base: './',

  plugins: [
    vue(),
    // mkcert(),
    // splitVendorChunkPlugin(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // vue: 'vue/dist/vue.esm-bundler.js',
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
