import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'reactive-vanilla-js-ui',
      fileName: (format) => `index.${format}.js`,
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
})
