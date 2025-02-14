import { wrapper_style } from '@example/core-js/dom/toggle/ex1.css.ts'
import { button, div, h1, Toggle, useState } from '@rvjs/core'

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

const Content = () => {
  return h1({
    textContent: `Hello World!`,
  })
}

export default App
