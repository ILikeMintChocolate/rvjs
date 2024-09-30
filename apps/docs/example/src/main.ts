import Browser from '@component/browser/Browser.ts'
import Iframe from '@component/iframe/Iframe.ts'
import ColorChipExample from '@example/ui/content/ColorChip/ex1.ts'
import { root } from '@rvjs/core'
import '/node_modules/@rvjs/ui/dist/style.css'

document.title = 'ColorChip Ex1'

if (import.meta.env.MODE === 'development') {
  root(
    document.getElementById('app')!,
    Iframe({
      content: Browser({
        web: ColorChipExample(),
        showConsole: false,
      }),
    }),
  )
} else if (import.meta.env.MODE === 'production') {
  root(
    document.getElementById('app')!,
    Browser({
      web: ColorChipExample(),
      showConsole: false,
    }),
  )
}
