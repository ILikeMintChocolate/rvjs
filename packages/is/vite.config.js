import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: 'terser',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rvjs/is',
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
  },
  optimizeDeps: {
    exclude: ['@rvjs/core'],
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
  },
  sourcemap: true,
  emptyOutDir: true,
})
