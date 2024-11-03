import { resolve } from 'path'
import { defineConfig } from 'vite'
import vitePluginRvjs from 'vite-plugin-rvjs'

export default defineConfig({
  plugins: [vitePluginRvjs()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rvjs/core',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'entry.[format].js',
        chunkFileNames: 'chunk.[format].js',
      },
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: '@block',
        replacement: resolve(__dirname, 'src/block'),
      },
      {
        find: '@component',
        replacement: resolve(__dirname, 'src/component'),
      },
      {
        find: '@context',
        replacement: resolve(__dirname, 'src/context'),
      },
      {
        find: '@hook',
        replacement: resolve(__dirname, 'src/hook'),
      },
      {
        find: '@jsx',
        replacement: resolve(__dirname, 'src/jsx'),
      },
      {
        find: '@router',
        replacement: resolve(__dirname, 'src/router'),
      },
      {
        find: '@test',
        replacement: resolve(__dirname, 'src/test'),
      },
      {
        find: '@type',
        replacement: resolve(__dirname, 'src/type'),
      },
      {
        find: '@util',
        replacement: resolve(__dirname, 'src/util'),
      },
    ],
  },
})
