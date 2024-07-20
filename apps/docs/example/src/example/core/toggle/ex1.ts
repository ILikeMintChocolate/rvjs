import { content_style, wrapper_style } from '@example/core/toggle/ex1.css.ts'
import { button, div, p, Toggle } from '@rvjs/core/dom'
import { useState } from '@rvjs/core/reactive'

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
  return p({
    classes: [content_style],
    textContent: `Hello World!`,
  })
}

export default App
