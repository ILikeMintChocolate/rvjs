import { useState } from '@rvjs/core'
import { TextInput } from '@rvjs/ui'

const TextInputExample = () => {
  const [text, setText] = useState('')

  return (
    <div>
      <h4 style={{ height: '1rem' }}>{text()}</h4>
      <TextInput
        value={value()}
        setValue={setText}
        labelText="TextInput"
        placeholder="아무거나 입력해보세요"
        maxCount={10}
      />
    </div>
  )
}

export default TextInputExample
