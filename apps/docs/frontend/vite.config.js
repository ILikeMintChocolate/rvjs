import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import importSvg from 'vite-plugin-import-svg'

export default defineConfig({
  plugins: [importSvg(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      {
        find: '@layout',
        replacement: resolve(__dirname, 'src/component/layout'),
      },
      {
        find: '@util',
        replacement: resolve(__dirname, 'src/util'),
      },
      {
        find: '@icon',
        replacement: resolve(__dirname, 'src/asset/icon'),
      },
      {
        find: '@asset',
        replacement: resolve(__dirname, 'src/asset'),
      },
    ],
  },
})
