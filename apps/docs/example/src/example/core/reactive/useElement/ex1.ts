import { div, p, useElement } from '@rvjs/core'

const App = () => {
  const text = Text()
  const textElement = useElement(text)

  console.log(textElement.toString())

  return div({
    children: [text],
  })
}

const Text = () => {
  return p({
    textContent: 'Hello World!',
  })
}

export default App
