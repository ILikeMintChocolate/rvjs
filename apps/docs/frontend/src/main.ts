import App from '@page/App.ts'
import { root } from '@rvjs/core'
import { startRvjsUI } from '@rvjs/ui'
import '/node_modules/@rvjs/ui/dist/style.css'

startRvjsUI({
  environment: 'development',
})

window.addEventListener('beforeunload', () => {
  localStorage.clear()
})

root(document.getElementById('app')!, App())
