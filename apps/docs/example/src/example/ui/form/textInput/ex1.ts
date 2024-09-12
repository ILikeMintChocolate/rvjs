import { div, dynamic, h4, prop, useState } from '@rvjs/core'
import { TextInput } from '@rvjs/ui'

const TextInputExample = () => {
  const [text, setText] = useState('')

  return div({
    children: [
      h4({
        style: { height: '1rem' },
        textContent: dynamic(() => text()),
      }),
      TextInput({
        value: text,
        setValue: setText,
        labelText: prop(() => 'TextInput'),
        placeholder: prop(() => '아무거나 입력해보세요'),
        maxCount: prop(() => 10),
      }),
    ],
  })
}

export default TextInputExample
