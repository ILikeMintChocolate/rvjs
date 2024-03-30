import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: ['src/main.ts', 'src/example', 'src/test'],
    }),
  ],
  build: {
    minify: 'terser',
    lib: {
      entry: {
        dom: resolve(__dirname, 'src/dom/index.ts'),
        reactive: resolve(__dirname, 'src/reactive/index.ts'),
      },
      name: '@rvjs/core',
      fileName: (format, entryName) => `${entryName}/${entryName}.${format}.js`,
    },
    rollupOptions: {
      output: {
        globals: {},
      },
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
  },
  sourcemap: true,
  emptyOutDir: true,
  resolve: {
    alias: [
      {
        find: '@children',
        replacement: resolve(__dirname, 'src/dom/children'),
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
        find: '@type',
        replacement: resolve(__dirname, 'src/type'),
      },
      {
        find: '@util',
        replacement: resolve(__dirname, 'src/util'),
      },
      {
        find: '@dom',
        replacement: resolve(__dirname, 'src/dom'),
      },
      {
        find: '@reactive',
        replacement: resolve(__dirname, 'src/reactive'),
      },
      {
        find: '@router',
        replacement: resolve(__dirname, 'src/router'),
      },
    ],
  },
})
