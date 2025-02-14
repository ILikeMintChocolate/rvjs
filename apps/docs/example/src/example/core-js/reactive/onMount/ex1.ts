import { wrapper_style } from '@example/core-js/reactive/onMount/ex1.css.ts'
import {
  button,
  component,
  div,
  h1,
  onMount,
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
  onMount(() => {
    console.log('Content 컴포넌트 생성됨')
  })

  return h1({
    textContent: `Hello World!`,
  })
})

export default App
