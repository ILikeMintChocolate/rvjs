import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  build: {
    minify: 'terser',
    lib: {
      entry: {
        component: resolve(__dirname, 'src/component'),
        element: resolve(__dirname, 'src/element'),
        children: resolve(__dirname, 'src/reactive/children'),
        hook: resolve(__dirname, 'src/reactive/hook'),
        lifecycle: resolve(__dirname, 'src/reactive/lifecycle'),
      },
      formats: ['cjs', 'es'],
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
