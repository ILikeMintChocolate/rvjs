// @ts-nocheck

import Browser from '@component/browser/Browser.ts'
import Iframe from '@component/iframe/Iframe.ts'
import App from '@example/core/gettingStarted/ex1.ts'
import { root } from '@rvjs/core'
// import '/node_modules/@rvjs/ui/dist/style.css'

document.title = 'gettingStarted Ex1'

if (import.meta.env.MODE === 'development') {
  root(
    document.getElementById('app')!,
    Iframe({
      content: Browser({
        web: App(),
        showConsole: true,
      }),
    }),
  )
} else if (import.meta.env.MODE === 'production') {
  root(
    document.getElementById('app')!,
    Browser({
      web: App(),
      showConsole: true,
    }),
  )
}
