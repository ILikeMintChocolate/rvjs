import { div, element } from '@rvjs/core'

const App = () => {
  return div({
    children: [
      Text({
        as: 'h1',
        text: 'Hello World',
      }),
    ],
  })
}

interface TextProps {
  as: 'p' | 'span' | 'h1'
  text: string
}

const Text = (props: TextProps) => {
  const { as, text } = props

  return element(as, {
    textContent: text,
  })
}

export default App
