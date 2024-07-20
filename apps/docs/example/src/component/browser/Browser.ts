import { browser_style } from '@component/browser/Browser.css.ts'
import Console from '@component/console/Console.ts'
import Web from '@component/web/Web.ts'
import { Child, component, div } from '@rvjs/core/dom'
import { overrideConsoleLog } from '@util/console.ts'

interface BrowserProps {
  web: Child
}

const Browser = component<BrowserProps>((props) => {
  const { web } = props

  overrideConsoleLog()

  return div({
    classes: [browser_style],
    children: [
      Web({
        web,
      }),
      Console(),
    ],
  })
})

export default Browser
