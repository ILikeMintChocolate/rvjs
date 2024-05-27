import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import importSvg from 'vite-plugin-import-svg'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    importSvg(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      exclude: ['src/main.ts', 'src/example'],
    }),
  ],
  build: {
    minify: 'terser',
    lib: {
      entry: {
        component: resolve(__dirname, 'src/component/index.ts'),
        util: resolve(__dirname, 'src/util/index.ts'),
      },
      name: '@rvjs/ui',
      fileName: (format, entryName) => `${entryName}/${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: (id) => id === '@rvjs/core' || id.includes('@rvjs/core/'),
      output: {
        globals: {
          '@rvjs/core': '@rvjs/core',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['@rvjs/core'],
  },
  sourcemap: true,
  emptyOutDir: true,
  resolve: {
    alias: [
      {
        find: '@util',
        replacement: resolve(__dirname, 'src/util'),
      },
      {
        find: '@type',
        replacement: resolve(__dirname, 'src/type'),
      },
      {
        find: '@style',
        replacement: resolve(__dirname, 'src/style'),
      },
      {
        find: '@layout',
        replacement: resolve(__dirname, 'src/component/layout'),
      },
      {
        find: '@typography',
        replacement: resolve(__dirname, 'src/component/typography'),
      },
      {
        find: '@media',
        replacement: resolve(__dirname, 'src/component/media'),
      },
      {
        find: '@system',
        replacement: resolve(__dirname, 'src/system'),
      },
      {
        find: '@form',
        replacement: resolve(__dirname, 'src/component/form'),
      },
      {
        find: '@style',
        replacement: resolve(__dirname, 'src/style'),
      },
      {
        find: '@source',
        replacement: resolve(__dirname, 'src/source'),
      },
      {
        find: '@component',
        replacement: resolve(__dirname, 'src/component'),
      },
    ],
  },
})
