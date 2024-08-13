import {
  buttonWrapper_style,
  errorText_style,
  loadedText_style,
  loadingText_style,
  statusText_style,
} from '@example/core/switch/ex1.css.ts'
import { button, div, p, Switch } from '@rvjs/core'
import { useState } from '@rvjs/core'

const App = () => {
  const [status, setStatus] = useState('Loading')

  return div({
    children: [
      div({
        classes: [buttonWrapper_style],
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
        ],
      }),
      Switch(status, () => {
        switch (status()) {
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
  return p({
    classes: [statusText_style, loadingText_style],
    textContent: `Loading`,
  })
}

const Loaded = () => {
  return p({
    classes: [statusText_style, loadedText_style],
    textContent: `Loaded`,
  })
}

const Error = () => {
  return p({
    classes: [statusText_style, errorText_style],
    textContent: `Error`,
  })
}

export default App
