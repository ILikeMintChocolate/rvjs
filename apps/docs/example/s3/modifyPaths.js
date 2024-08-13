import { readFile, writeFile } from 'fs'
import { join } from 'path'

const filePath = join(import.meta.dirname, '../', 'dist', 'index.html')

readFile(filePath, 'utf8', (_, data) => {
  const result = data.replaceAll(/\/assets\//g, 'assets/')
  writeFile(filePath, result, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing the file: ${err}`)
    }
  })
})
