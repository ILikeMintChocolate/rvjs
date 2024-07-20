import { copyFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcPath = resolve(__dirname, './index.d.ts')
const destPath = resolve(__dirname, '../dist/index.d.ts')

copyFileSync(srcPath, destPath)
