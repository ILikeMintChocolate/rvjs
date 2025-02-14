import { p, span, textNode } from '@rvjs/core'

const Text = () => {
  return p({
    children: [
      span({
        style: {
          fontWeight: 'bold',
        },
        textContent: 'Hello ',
      }),
      textNode('World!'),
    ],
  })
}

export default Text
