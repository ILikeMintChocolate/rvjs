import { defineProps } from '@rvjs/core'
import { HeaderProps } from '@shell/header/header/Header.props.ts'

export const useHeaderProps = (props: HeaderProps) => {
  return defineProps(props, {
    get deviceType() {
      return props.deviceType ?? 'desktop'
    },
  })
}
