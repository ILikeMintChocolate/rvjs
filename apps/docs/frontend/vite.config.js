import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import importSvg from 'vite-plugin-import-svg'

export default defineConfig({
  plugins: [importSvg(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      {
        find: '@component',
        replacement: resolve(__dirname, 'src/component'),
      },
      {
        find: '@hook',
        replacement: resolve(__dirname, 'src/hook'),
      },
      {
        find: '@page',
        replacement: resolve(__dirname, 'src/page'),
      },
      {
        find: '@style',
        replacement: resolve(__dirname, 'src/style'),
      },
      {
        find: '@util',
        replacement: resolve(__dirname, 'src/util'),
      },
      {
        find: '@asset',
        replacement: resolve(__dirname, 'src/asset'),
      },
      {
        find: '@icon',
        replacement: resolve(__dirname, 'src/asset/icon'),
      },
    ],
  },
})
