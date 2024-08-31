import { content_style } from '@example/core/dom/switch/ex1.css.ts'
import { button, div, h1, Switch, useState } from '@rvjs/core'

const App = () => {
  const [status, setStatus] = useState('Loading')

  return div({
    children: [
      button({
        textContent: 'loading',
        onclick: () => setStatus('Loading'),
      }),
      button({
        textContent: 'loaded',
        onclick: () => setStatus('Loaded'),
      }),
      button({
        textContent: 'error',
        onclick: () => setStatus('Error'),
      }),
      Switch(status, (status) => {
        switch (status) {
          case 'Loading':
            return Loading()
          case 'Loaded':
            return Loaded()
          case 'Error':
            return Error()
          default:
            return null
        }
      }),
    ],
  })
}

const Loading = () => {
  return h1({
    classes: [content_style],
    textContent: `Loading`,
  })
}

const Loaded = () => {
  return h1({
    classes: [content_style],
    textContent: `Loaded`,
  })
}

const Error = () => {
  return h1({
    classes: [content_style],
    textContent: `Error`,
  })
}

export default App
