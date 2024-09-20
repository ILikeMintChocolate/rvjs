import Browser from '@component/browser/Browser.ts'
import Iframe from '@component/iframe/Iframe.ts'
import SuspenseExample from '@example/core/dom/suspense/ex1.ts'
import { root } from '@rvjs/core'
import '/node_modules/@rvjs/ui/dist/style.css'

document.title = 'Suspense Ex1'

if (import.meta.env.MODE === 'development') {
  root(
    document.getElementById('app')!,
    Iframe({
      content: Browser({
        web: SuspenseExample(),
        showConsole: false,
      }),
    }),
  )
} else if (import.meta.env.MODE === 'production') {
  root(
    document.getElementById('app')!,
    Browser({
      web: SuspenseExample(),
      showConsole: false,
    }),
  )
}
