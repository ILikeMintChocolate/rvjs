import { defineConfig } from 'vite'
import rvjsPlugin from 'vite-plugin-rvjs'

export default defineConfig({
  plugins: [rvjsPlugin()],
  esbuild: false,
})
