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
    minify: 'esbuild',
    emptyOutDir: true,
    outDir: path.resolve(__dirname, './dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      formats: ['es', 'cjs'],
      name: 'VueHallSchemeView',
      // fileName: 'vue_hall_scheme_view', // дефолт - name из package.json
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
