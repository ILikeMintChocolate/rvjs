import { ChevronDownIcon } from '@content/icon/Icons.ts'
import Flex from '@layout/flex/Flex.ts'
import { button, dynamic, prop, useState } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  sideNavMenu_style,
  sideNavMenu_text_style,
  subMenu_icon_style,
  subMenu_ul_style,
} from '@shell/sideNav/sideNavMenu/SideNavMenu.css.ts'
import {
  SideNavMenuProps,
  sideNavMenuPropsType,
} from '@shell/sideNav/sideNavMenu/SideNavMenu.props.ts'
import { noDrag_style } from '@theme/util/util.css.ts'
import Text from '@typography/text/Text.ts'

const SideNavMenu = (props: SideNavMenuProps) => {
  const {
    menuName,
    children,
    ariaLabel = prop(() => null),
    focusRef,
    onBlur,
    onClick,
    tabIndex = prop(() => 0),
    defaultShow = prop(() => false),
  } = checkProps(props, sideNavMenuPropsType)
  const [showItems, setShowItems] = useState(defaultShow())

  return Flex({
    ariaLabel: dynamic(() => ariaLabel()),
    direction: 'column',
    children: [
      button({
        ref: focusRef,
        classes: [dynamic(() => sideNavMenu_style)],
        onclick: (event: MouseEvent) => {
          setShowItems(!showItems())
          if (onClick) {
            onClick(event)
          }
        },
        onblur: (event: FocusEvent) => {
          if (onBlur) {
            onBlur(event)
          }
        },
        tabIndex,
        children: [
          Text({
            text: menuName,
            kind: prop(() => 'heading-compact-01'),
            color: prop(() => 'textSecondary'),
            classes: [
              prop(() => sideNavMenu_text_style),
              prop(() => noDrag_style),
            ],
          }),
          Flex({
            direction: 'column',
            justify: 'center',
            children: [
              ChevronDownIcon({
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
        classes: [prop(() => subMenu_ul_style)],
        children: children,
      }),
    ],
  })
}

export default SideNavMenu
