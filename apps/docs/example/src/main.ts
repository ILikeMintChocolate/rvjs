import Browser from '@component/browser/Browser.ts'
import Iframe from '@component/iframe/Iframe.ts'
import LinkExample from '@example/ui-js/typography/Link/ex1.ts'
import { root } from '@rvjs/core'
import '/node_modules/@rvjs/ui/dist/style.css'

document.title = 'Link Ex1'

if (import.meta.env.MODE === 'development') {
  root(
    document.getElementById('app')!,
    Iframe({
      content: Browser({
        web: LinkExample(),
        showConsole: false,
      }),
    }),
  )
} else if (import.meta.env.MODE === 'production') {
  root(
    document.getElementById('app')!,
    Browser({
      web: LinkExample(),
      showConsole: false,
    }),
  )
}
