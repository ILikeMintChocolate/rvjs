import { root } from '@rvjs/core/dom'
import { startRvjsUI } from '@rvjs/ui/system'
import App from './page/App.ts'
import '../node_modules/@rvjs/ui/dist/style.css'

startRvjsUI({
  environment: 'development',
})

window.addEventListener('beforeunload', () => {
  localStorage.clear()
})

root(document.getElementById('app')!, App())
