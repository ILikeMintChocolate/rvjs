import chevronDownSvg from '@icon/chevron--down.svg?element'
import Flex from '@layout/flex/Flex.ts'
import { button, Children, component, ComponentFn, svg } from '@rvjs/core/dom'
import {
  dynamic,
  onDestroy,
  onMount,
  Prop,
  prop,
  RefObject,
  useGlobalState,
  useRef,
} from '@rvjs/core/reactive'
import {
  subMenu_dropDown_style,
  subMenu_icon_style,
  subMenu_iconWrapper_style,
  subMenu_recipe,
  subMenu_text_style,
} from '@shell/header/subMenu/SubMenu.css.ts'
import { noDrag_style } from '@theme/util/util.css.ts'
import Text from '@typography/text/Text.ts'

interface SubMenuProps {
  id: string
  menuName: Prop<string>
  children: Children
  ariaLabel?: Prop<number>
  focusRef?: RefObject<HTMLButtonElement>
  onBlur?: GlobalEventHandlers['onblur']
  onClick?: GlobalEventHandlers['onclick']
  tabIndex?: Prop<number>
}

const SubMenu: ComponentFn = component<SubMenuProps>((props) => {
  const {
    id,
    menuName,
    children,
    ariaLabel = prop(() => undefined),
    focusRef,
    onBlur,
    onClick,
    tabIndex = prop(() => 0),
  } = props
  const [showItems, setShowItems] = useGlobalState(
    `SUB_MENU_SHOW_ITEMS_${id}`,
    false,
  )
  const subMenuRef = useRef<HTMLDivElement>()

  const handleClickOutside = (event: MouseEvent) => {
    if (subMenuRef.current && event.target) {
      if (!subMenuRef.current.contains(event.target as Node)) {
        setShowItems(false)
      }
    }
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onDestroy(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })

  return Flex({
    ref: subMenuRef,
    ariaLabel: dynamic(() => ariaLabel()),
    children: [
      button({
        ref: focusRef,
        classes: [
          // SubMenuItem_Li_Style,
          dynamic(() => subMenu_recipe({ isSelected: showItems() })),
        ],
        onclick: (event: MouseEvent) => {
          setShowItems(!showItems())
          if (onClick) {
            // @ts-ignore
            onClick(event)
          }
        },
        onblur: (event: FocusEvent) => {
          if (onBlur) {
            // @ts-ignore
            onBlur(event)
          }
        },
        tabIndex,
        children: [
          Text({
            text: menuName,
            kind: prop(() => 'body-compact-01'),
            color: prop(() => 'textSecondary'),
            classes: [prop(() => subMenu_text_style), prop(() => noDrag_style)],
          }),
          Flex({
            classes: [prop(() => subMenu_iconWrapper_style)],
            direction: 'column',
            justify: 'center',
            children: [
              svg(chevronDownSvg, {
                classes: [subMenu_icon_style],
                style: {
                  transform: dynamic(() =>
                    showItems() ? 'rotate(180deg)' : '',
                  ),
                },
              }),
            ],
          }),
        ],
      }),
      Flex({
        as: 'ul',
        direction: 'column',
        style: {
          display: dynamic(() => (showItems() ? 'flex' : 'none')),
        },
        classes: [prop(() => subMenu_dropDown_style)],
        children: children,
      }),
    ],
  })
})

export default SubMenu
