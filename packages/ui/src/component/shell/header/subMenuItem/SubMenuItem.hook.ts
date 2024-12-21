import { defineProps, useNavigate } from '@rvjs/core'
import { subMenuContext } from '@shell/header/subMenu/SubMenu.hook.ts'
import { SubMenuItemProps } from '@shell/header/subMenuItem/SubMenuItem.props.ts'

export const useSubMenuItemProps = (props: SubMenuItemProps) => {
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

export const useSubMenuNavigation = (props: SubMenuItemProps) => {
  const { setShowItems } = subMenuContext.getContext()
  const navigate = useNavigate()

  const onClickHandler = (event: Event) => {
    event.preventDefault()
    navigate(props.href, props.isExternal)
    setShowItems(false)
  }

  return onClickHandler
}
