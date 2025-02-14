import { button, dynamic, prop, Prop } from '@rvjs/core'

const App = () => {
  return Button({
    text: prop(() => 'Click me'),
    onclick: () => alert('Hello world!'),
  })
}

interface ButtonProps {
  text: Prop<string>
  bgColor?: Prop<'white' | 'red' | 'blue'>
  onclick: GlobalEventHandlers['onclick']
}

const Button = (props: ButtonProps) => {
  const { text, bgColor = prop(() => 'white'), onclick } = props

  return button({
    textContent: dynamic(() => text()),
    style: {
      backgroundColor: dynamic(() => bgColor()),
    },
    onclick,
  })
}

export default App
