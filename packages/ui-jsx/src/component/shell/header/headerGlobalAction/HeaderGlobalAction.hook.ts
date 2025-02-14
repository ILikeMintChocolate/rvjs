import { defineProps } from '@rvjs/core'
import { HeaderGlobalActionProps } from '@shell/header/headerGlobalAction/HeaderGlobalAction.props.ts'

export const useHeaderGlobalActionProps = (props: HeaderGlobalActionProps) => {
  const newProps = defineProps(props, {
    get className() {
      return props.className ?? ''
    },
    get isActive() {
      return props.isActive ?? false
    },
  })

  return newProps
}
