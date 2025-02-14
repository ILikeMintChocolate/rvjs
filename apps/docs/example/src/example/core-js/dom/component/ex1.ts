import {
  content_style,
  contentWrapper_style,
  wrapper_style,
} from '@example/core-js/dom/component/ex1.css.ts'
import {
  button,
  component,
  div,
  h1,
  onDestroy,
  onMount,
  Toggle,
  useState,
} from '@rvjs/core'

const App = component(() => {
  const [show, setShow] = useState(true)

  return div({
    classes: [wrapper_style],
    children: [
      button({
        textContent: 'Toggle',
        onclick: () => setShow(!show()),
      }),
      div({
        classes: [contentWrapper_style],
        children: [
          Toggle(show, () => {
            return Content()
          }),
        ],
      }),
    ],
  })
})

const Content = component(() => {
  onMount(() => {
    console.log('Content mounted')
  })

  onDestroy(() => {
    console.log('Content destroyed')
  })

  return h1({
    classes: [content_style],
    textContent: 'Hello World!',
  })
})

export default App
