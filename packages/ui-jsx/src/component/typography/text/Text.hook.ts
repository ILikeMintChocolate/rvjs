import { defineProps } from '@rvjs/core'
import { TextProps } from '@typography/text/Text.props.ts'

export const useTextProps = (props: TextProps): TextProps => {
  const newProps = defineProps(props, {
    get as() {
      return props.as ?? 'p'
    },
    get kind() {
      return props.kind ?? 'body-01'
    },
    get color() {
      return props.color ?? 'textPrimary'
    },
    get className() {
      return props.className ?? ''
    },
  })

  return newProps
}
