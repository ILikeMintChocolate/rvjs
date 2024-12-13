import { defineProps, useNavigate } from '@rvjs/core'
import { SideNavLinkProps } from '@shell/sideNav/sideNavLink/SideNavLink.props.ts'

export const useSideNavLinkProps = (
  props: SideNavLinkProps,
): SideNavLinkProps => {
  const newProps = defineProps(props, {
    get isActive() {
      return props.isActive ?? true
    },
    get tabIndex() {
      return props.tabIndex ?? 0
    },
  })

  return newProps
}

export const useSideNavLinkNavigation = (props: SideNavLinkProps) => {
  const navigate = useNavigate()

  const onClickHandler = (event: Event) => {
    event.preventDefault()
    navigate(props.href)
  }

  return onClickHandler
}
