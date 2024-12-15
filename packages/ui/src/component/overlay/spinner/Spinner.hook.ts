import { SpinnerProps } from '@overlay/spinner/Spinner.props.ts'
import { defineProps } from '@rvjs/core'

export const useSpinnerProps = (props: SpinnerProps): SpinnerProps => {
  const newProps = defineProps(props, {
    get size() {
      return props.size ?? 'sm'
    },
  })

  return newProps
}
