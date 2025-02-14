// @ts-nocheck

import { component, div, h1 } from '@rvjs/core'
import { checkProps, isNumber, isString, startCheckProps } from '@rvjs/is'

startCheckProps({
  environment: 'development',
})

const App = component(() => {
  return div({
    children: [
      Text({
        text: 'Hello World!',
        count: '123',
      }),
    ],
  })
})

interface TextProps {
  text: string
  count: number
}

const textPropsType = {
  text: isString,
  count: isNumber,
}

const Text = (props: TextProps) => {
  const { text, count } = checkProps(props, textPropsType)

  return h1({
    textContent: `${text} - ${count}`,
  })
}

export default App
