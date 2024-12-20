import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist/type',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rvjs/localizer',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: (id) => id === '@rvjs/core',
      output: {
        entryFileNames: 'entry.[format].js',
        chunkFileNames: 'chunk.[format].js',
      },
    },
  },
})
