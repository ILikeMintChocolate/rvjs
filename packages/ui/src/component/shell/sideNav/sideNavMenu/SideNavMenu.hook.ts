import { defineProps, useState } from '@rvjs/core'
import { SideNavMenuProps } from '@shell/sideNav/sideNavMenu/SideNavMenu.props.ts'

export const useSideNavMenuProps = (props: SideNavMenuProps) => {
  const newProps = defineProps(props, {
    get ariaLabel() {
      return props.ariaLabel ?? null
    },
    get tabIndex() {
      return props.tabIndex ?? 0
    },
    get defaultShow() {
      return props.defaultShow ?? false
    },
  })

  return newProps
}

export const useSideNavMenuToggle = (props: SideNavMenuProps) => {
  const [showItems, setShowItems] = useState(props.defaultShow)

  const onClickHandler = (event: MouseEvent) => {
    setShowItems(!showItems())
    if (props.onClick) {
      props.onClick(event)
    }
  }

  const onBlurHandler = (event: FocusEvent) => {
    if (props.onBlur) {
      props.onBlur(event)
    }
  }

  return { onClickHandler, onBlurHandler }
}
