import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
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
      entry: {
        content: resolve(__dirname, 'src/component/content/index.ts'),
        form: resolve(__dirname, 'src/component/form/index.ts'),
        layout: resolve(__dirname, 'src/component/layout/index.ts'),
        overlay: resolve(__dirname, 'src/component/overlay/index.ts'),
        shell: resolve(__dirname, 'src/component/shell/index.ts'),
        typography: resolve(__dirname, 'src/component/typography/index.ts'),
        system: resolve(__dirname, 'src/system/index.ts'),
        util: resolve(__dirname, 'src/util/index.ts'),
      },
      name: '@rvjs/ui',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: (id) =>
        id === '@rvjs/core' ||
        id.includes('@rvjs/core/') ||
        id === '@rvjs/is' ||
        id.includes('@rvjs/is'),
      output: {
        entryFileNames: 'entry/[name].[format].js',
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
