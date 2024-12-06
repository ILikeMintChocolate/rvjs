import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import rvjsPlugin from 'vite-plugin-rvjs'

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist/type',
      exclude: ['src/test'],
    }),
    rvjsPlugin(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rvjs/is',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: (id) => id === '@rvjs/core' || id.includes('@rvjs/core/'),
      output: {
        entryFileNames: 'entry/[name].[format].js',
        chunkFileNames: 'chunk/[name].[format].js',
      },
    },
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
})
