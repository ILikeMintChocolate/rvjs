import { wrapper_style } from '@example/core/reactive/onDestroy/ex1.css.ts'
import {
  button,
  component,
  div,
  h1,
  onDestroy,
  Toggle,
  useState,
} from '@rvjs/core'

const App = () => {
  const [show, setShow] = useState(false)

  return div({
    classes: [wrapper_style],
    children: [
      button({
        textContent: 'Toggle',
        onclick: () => setShow(!show()),
      }),
      Toggle(show, () => {
        return Content()
      }),
    ],
  })
}

const Content = component(() => {
  onDestroy(() => {
    console.log('Content 컴포넌트 삭제됨')
  })

  return h1({
    textContent: `Hello World!`,
  })
})

export default App
