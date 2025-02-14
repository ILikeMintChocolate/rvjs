import {
  createContext,
  defineProps,
  GetState,
  onDestroy,
  onMount,
  SetState,
  useElement,
  useState,
} from '@rvjs/core'
import { SubMenuProps } from '@shell/header/subMenu/SubMenu.props.ts'

export const subMenuContext = createContext<{
  showItems: GetState<boolean>
  setShowItems: SetState<boolean>
}>()

export const useSubMenuProps = (props: SubMenuProps) => {
  const newProps = defineProps(props, {
    get ariaLabel() {
      return props.ariaLabel ?? null
    },
    get tabIndex() {
      return props.tabIndex ?? 0
    },
  })

  return newProps
}

export const useSubMenuToggle = (props: SubMenuProps) => {
  const { onClick, onBlur } = props
  const [showItems, setShowItems] = useState(false)
  const subMenuElement = useElement<HTMLDivElement>()
  subMenuContext.setContext({ showItems, setShowItems })

  const handleClickOutside = (event: MouseEvent) => {
    if (subMenuElement.current && event.target) {
      if (!subMenuElement.current.contains(event.target as Node)) {
        setShowItems(false)
      }
    }
  }

  const onClickHandler = (event: MouseEvent) => {
    setShowItems(!showItems())
    if (onClick) {
      onClick(event)
    }
  }

  const onBlurHandler = (event: FocusEvent) => {
    if (onBlur) {
      onBlur(event)
    }
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onDestroy(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })

  return { showItems, subMenuElement, onClickHandler, onBlurHandler }
}
