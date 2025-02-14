import { defineProps } from '@rvjs/core'
import { BodyProps } from '@shell/body/Body.props.ts'

export const useBodyProps = (props: BodyProps): BodyProps => {
  const newProps = defineProps(props, {
    get as() {
      return props.as ?? 'div'
    },
  })

  return newProps
}
