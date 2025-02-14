import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import importSvg from 'vite-plugin-import-svg'
import vitePluginRvjs from 'vite-plugin-rvjs'

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [importSvg(), vanillaExtractPlugin(), vitePluginRvjs()],
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
