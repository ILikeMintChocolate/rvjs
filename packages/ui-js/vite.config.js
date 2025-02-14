import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path.js'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import importSvg from 'vite-plugin-import-svg'

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    importSvg(),
    dts({
      outDir: 'dist/type',
      exclude: ['src/main.ts', 'src/example'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rvjs/ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `rvjs-ui.${format}.js`,
    },
    rollupOptions: {
      external: (id) => id === '@rvjs/core' || id === '@rvjs/is',
      output: {
        entryFileNames: 'entry.[format].js',
        chunkFileNames: 'chunk/[name].[format].js',
      },
    },
  },
  optimizeDeps: {
    exclude: ['@rvjs/core', '@rvjs/is'],
  },
  resolve: {
    alias: [
      {
        find: '@icon',
        replacement: resolve(__dirname, 'src/asset/icon'),
      },
      {
        find: '@content',
        replacement: resolve(__dirname, 'src/component/content'),
      },
      {
        find: '@form',
        replacement: resolve(__dirname, 'src/component/form'),
      },
      {
        find: '@layout',
        replacement: resolve(__dirname, 'src/component/layout'),
      },
      {
        find: '@overlay',
        replacement: resolve(__dirname, 'src/component/overlay'),
      },
      {
        find: '@shell',
        replacement: resolve(__dirname, 'src/component/shell'),
      },
      {
        find: '@typography',
        replacement: resolve(__dirname, 'src/component/typography'),
      },
      {
        find: '@system',
        replacement: resolve(__dirname, 'src/system'),
      },
      {
        find: '@theme',
        replacement: resolve(__dirname, 'src/theme'),
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
