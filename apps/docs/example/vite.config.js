import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import importSvg from 'vite-plugin-import-svg'

export default defineConfig({
  plugins: [vanillaExtractPlugin(), importSvg()],
  resolve: {
    alias: [
      {
        find: '@theme',
        replacement: resolve(__dirname, 'src/theme'),
      },
      {
        find: '@component',
        replacement: resolve(__dirname, 'src/component'),
      },
      {
        find: '@example',
        replacement: resolve(__dirname, 'src/example'),
      },
      {
        find: '@util',
        replacement: resolve(__dirname, 'src/util'),
      },
      {
        find: '@icon',
        replacement: resolve(__dirname, 'src/asset/icon'),
      },
    ],
  },
})
