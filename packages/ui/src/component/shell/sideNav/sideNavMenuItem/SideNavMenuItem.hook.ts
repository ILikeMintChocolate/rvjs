import { defineProps, useNavigate } from '@rvjs/core'
import { SideNavMenuItemProps } from '@shell//sideNav/sideNavMenuItem/SideNavMenuItem.props.ts'

export const useSideNavMenuItemProps = (props: SideNavMenuItemProps) => {
  const newProps = defineProps(props, {
    get isActive() {
      return props.isActive ?? true
    },
    get tabIndex() {
      return props.tabIndex ?? 0
    },
    get depth() {
      return props.depth ?? 0
    },
  })

  return newProps
}

export const useSideNavMenuItemNavigation = (props: SideNavMenuItemProps) => {
  const navigate = useNavigate()

  const onClickHandler = (event: Event) => {
    event.preventDefault()
    navigate(props.href, props.isExternal)
  }

  return onClickHandler
}
