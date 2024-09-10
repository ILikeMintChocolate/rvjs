import {
  createContext,
  GetState,
  onDestroy,
  onMount,
  SetState,
  useRef,
  useState,
} from '@rvjs/core'
import { SubMenuProps } from '@shell/header/subMenu/SubMenu.props.ts'

interface SubMenuContext {
  showItems: GetState<boolean>
  setShowItems: SetState<boolean>
}

export const subMenuContext = createContext<SubMenuContext>()

interface UseSubMenuProps {
  onClick: SubMenuProps['onClick']
  onBlur: SubMenuProps['onBlur']
}

const useSubMenu = (props: UseSubMenuProps) => {
  const { onClick, onBlur } = props
  const [showItems, setShowItems] = useState(false)
  const subMenuRef = useRef<HTMLDivElement>()
  subMenuContext.setContext({ showItems, setShowItems })

  const handleClickOutside = (event: MouseEvent) => {
    if (subMenuRef.current && event.target) {
      if (!subMenuRef.current.contains(event.target as Node)) {
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

  return { showItems, subMenuRef, onClickHandler, onBlurHandler }
}

export default useSubMenu
