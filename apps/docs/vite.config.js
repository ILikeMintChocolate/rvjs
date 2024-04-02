import { resolve } from 'path'

export default {
  resolve: {
    alias: {
      '@rvjs/core/*': resolve(__dirname, 'node_modules/@rvjs/core/*'),
    },
  },
}
