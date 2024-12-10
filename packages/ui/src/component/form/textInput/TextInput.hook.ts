import { TextInputProps } from '@form/textInput/TextInput.props.ts'
import { defineProps } from '@rvjs/core'
import { isDefined } from '@type/guard.ts'

export const useTextInputProps = (props: TextInputProps): TextInputProps => {
  const newProps = defineProps(props, {
    get size() {
      return props.size ?? 'md'
    },
    get disabled() {
      return props.disabled ?? false
    },
    get placeholder() {
      return props.placeholder ?? ''
    },
    get readOnly() {
      return props.readOnly ?? false
    },
    get type() {
      return props.type ?? 'text'
    },
  })

  return newProps
}

export const useTextInputValue = (props: TextInputProps) => {
  const onInputHandler = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (isDefined(props.maxCount) && target.value.length > props.maxCount) {
      target.value = target.value.slice(0, props.maxCount)
    } else {
      props.setValue(target.value)
    }
    if (props.onChange) {
      props.onChange(event)
    }
  }
  
  return onInputHandler
}
