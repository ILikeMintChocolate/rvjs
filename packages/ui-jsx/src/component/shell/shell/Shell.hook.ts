import { defineProps } from '@rvjs/core'
import { ShellProps } from '@shell/shell/Shell.props.ts'

export const useShellProps = (props: ShellProps) => {
  return defineProps(props, {
    get deviceType() {
      return props.deviceType ?? 'desktop'
    },
  })
}
