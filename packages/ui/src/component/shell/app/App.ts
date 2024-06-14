import Flex from '@layout/flex/Flex.ts'
import { Child, component } from '@rvjs/core/dom'
import { prop } from '@rvjs/core/reactive'
import { app_sideNavBodyWrapper_style, app_style } from '@shell/app/App.css.ts'
import { ifIs } from '@util/array.ts'

interface AppProps {
  header: Child
  body: Child
  panel?: Child
}

const App = component<AppProps>((props) => {
  const { header, body, panel } = props

  return Flex({
    classes: [prop(() => app_style)],
    direction: 'column',
    children: [
      header,
      Flex({
        direction: 'row',
        classes: [prop(() => app_sideNavBodyWrapper_style)],
        children: [...ifIs(panel !== undefined, () => panel!), body],
      }),
    ],
  })
})

export default App
