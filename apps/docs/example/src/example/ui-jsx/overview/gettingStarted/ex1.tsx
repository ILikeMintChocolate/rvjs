import { root } from '@rvjs/core'
import { RvjsUIProvider } from '@rvjs/ui'
import '/node_modules/@rvjs/ui/dist/style.css'

const App = () => {
  // @ts-ignore
  return <RvjsUIProvider>...</RvjsUIProvider>
}

root(document.getElementById('app'), App())
