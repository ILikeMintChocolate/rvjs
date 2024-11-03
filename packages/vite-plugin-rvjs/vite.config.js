import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vite-plugin-rvjs',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'path',
        'fs',
        '@babel/core',
        '@babel/preset-typescript',
        'babel-plugin-jsx-dom-expressions',
      ],
      output: {
        globals: {
          '@babel/core': 'BabelCore',
          '@babel/preset-typescript': 'BabelPresetTypescript',
          'babel-plugin-jsx-dom-expressions': 'BabelPluginJSXDOMExpressions',
        },
      },
    },
  },
})
