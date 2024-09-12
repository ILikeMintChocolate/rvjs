import { span } from '@rvjs/core'
import { Highlight } from '@rvjs/ui'

const HighlightExample = () => {
  return Highlight({
    children: [
      span({
        textContent: 'Hello World!',
      }),
    ],
  })
}

export default HighlightExample
