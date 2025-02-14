import { defineProps, useNavigate } from '@rvjs/core'
import { HeaderMenuItemProps } from '@shell/header/headerMenuItem/HeaderMenuItem.props.ts'

export const useHeaderMenuItemProps = (props: HeaderMenuItemProps) => {
  const newProps = defineProps(props, {
    get isActive() {
      return props.isActive ?? false
    },
    get tabIndex() {
      return props.tabIndex ?? 0
    },
  })

  return newProps
}

export const useHeaderMenuItemNavigation = (props: HeaderMenuItemProps) => {
  const navigate = useNavigate()

  const onAnchorClickHandler = (event: MouseEvent) => {
    event.preventDefault()
    navigate(props.href, props.isExternal)
  }

  return onAnchorClickHandler
}
