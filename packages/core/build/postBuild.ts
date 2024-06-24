const { copyFileSync } = require('fs')
const { resolve } = require('path')

const srcPath = resolve(__dirname, './index.d.ts')
const destPath = resolve(__dirname, '../dist/index.d.ts')

copyFileSync(srcPath, destPath)
