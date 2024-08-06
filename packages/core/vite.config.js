import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist/type',
      exclude: ['src/main.ts', 'src/example', 'src/test'],
    }),
  ],
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
        find: '@block',
        replacement: resolve(__dirname, 'src/dom/block'),
      },
      {
        find: '@component',
        replacement: resolve(__dirname, 'src/dom/component'),
      },
      {
        find: '@element',
        replacement: resolve(__dirname, 'src/dom/element'),
      },
      {
        find: '@flow',
        replacement: resolve(__dirname, 'src/dom/flow'),
      },
      {
        find: '@context',
        replacement: resolve(__dirname, 'src/reactive/context'),
      },
      {
        find: '@hook',
        replacement: resolve(__dirname, 'src/reactive/hook'),
      },
      {
        find: '@lifecycle',
        replacement: resolve(__dirname, 'src/reactive/lifecycle'),
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
