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
      entry: {
        dom: resolve(__dirname, 'src/dom/index.ts'),
        reactive: resolve(__dirname, 'src/reactive/index.ts'),
        router: resolve(__dirname, 'src/router/index.ts'),
        util: resolve(__dirname, 'src/util/index.ts'),
      },
      name: '@rvjs/core',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      output: {
        entryFileNames: 'entry/[name].[format].js',
        chunkFileNames: 'chunk/[name].[format].js',
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
        find: '@children',
        replacement: resolve(__dirname, 'src/dom/children'),
      },
      {
        find: '@block',
        replacement: resolve(__dirname, 'src/dom/block'),
      },
      {
        find: '@component',
        replacement: resolve(__dirname, 'src/dom/block/component'),
      },
      {
        find: '@element',
        replacement: resolve(__dirname, 'src/dom/block/element'),
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
