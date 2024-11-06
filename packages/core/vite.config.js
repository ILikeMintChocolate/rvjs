import { resolve } from 'path'
import { defineConfig } from 'vite'
import circleDependency from 'vite-plugin-circular-dependency'
import dtsPlugin from 'vite-plugin-dts'
import vitePluginRvjs from 'vite-plugin-rvjs'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      dtsPlugin({
        outDir: 'dist/type',
        exclude: ['src/main.ts', 'src/example'],
      }),
      circleDependency({
        outputFilePath: './circleDep',
      }),
      mode !== 'production' && vitePluginRvjs(),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: '@rvjs/core',
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[format].js',
          chunkFileNames: 'chunk.[format].js',
        },
      },
    },
    test: {
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul',
      },
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
        {
          find: '@block',
          replacement: resolve(__dirname, 'src/block'),
        },
        {
          find: '@component',
          replacement: resolve(__dirname, 'src/component'),
        },
        {
          find: '@context',
          replacement: resolve(__dirname, 'src/context'),
        },
        {
          find: '@hook',
          replacement: resolve(__dirname, 'src/hook'),
        },
        {
          find: '@jsx',
          replacement: resolve(__dirname, 'src/jsx'),
        },
        {
          find: '@router',
          replacement: resolve(__dirname, 'src/router'),
        },
        {
          find: '@test',
          replacement: resolve(__dirname, 'src/test'),
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
  }
})
