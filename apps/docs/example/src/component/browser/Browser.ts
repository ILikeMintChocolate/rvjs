import { browser_style } from '@component/browser/Browser.css.ts'
import Console from '@component/console/Console.ts'
import Web from '@component/web/Web.ts'
import { Child, component, div } from '@rvjs/core'
import { ifIs } from '@rvjs/ui'
import { overrideConsoleLog } from '@util/console.ts'

interface BrowserProps {
  showConsole: boolean
  web: Child
}

const Browser = component<BrowserProps>((props) => {
  const { showConsole, web } = props

  if (showConsole) {
    overrideConsoleLog()
  }
  document.querySelector('body').style.margin = '0'

  return div({
    classes: [browser_style],
    style: {
      height: import.meta.env.MODE === 'development' ? '100%' : '100vh',
    },
    children: [
      Web({
        web,
      }),
      ...ifIs(showConsole, () => Console()),
    ],
  })
})

export default Browser
