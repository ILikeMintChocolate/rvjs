import App from '@page/app/App.tsx'
import { root } from '@rvjs/core'
import '/node_modules/@rvjs/ui/dist/style.css'

window.addEventListener('beforeunload', () => {
  localStorage.clear()
})

root(document.getElementById('app'), <App />)
