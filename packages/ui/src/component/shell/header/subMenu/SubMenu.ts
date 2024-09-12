import { ChevronDownIcon } from '@content/icon/Icons.ts'
import Flex from '@layout/flex/Flex.ts'
import { button, component, dynamic, prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  subMenu_dropDown_style,
  subMenu_iconWrapper_style,
  subMenu_recipe,
  subMenu_text_style,
} from '@shell/header/subMenu/SubMenu.css.ts'
import useSubMenu from '@shell/header/subMenu/SubMenu.hook.ts'
import {
  SubMenuProps,
  subMenuPropsType,
} from '@shell/header/subMenu/SubMenu.props.ts'
import { noDrag_style } from '@theme/util/util.css.ts'
import Text from '@typography/text/Text.ts'

const SubMenu = component<SubMenuProps>((props) => {
  const {
    menuName,
    children,
    ariaLabel = prop(() => null),
    focusRef,
    onBlur,
    onClick,
    tabIndex = prop(() => 0),
  } = checkProps(props, subMenuPropsType)
  const { showItems, subMenuRef, onClickHandler, onBlurHandler } = useSubMenu({
    onClick,
    onBlur,
  })

  return Flex({
    ref: subMenuRef,
    ariaLabel: dynamic(() => ariaLabel()),
    children: [
      button({
        ref: focusRef,
        classes: [dynamic(() => subMenu_recipe({ isSelected: showItems() }))],
        onclick: onClickHandler,
        onblur: onBlurHandler,
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
            children: [ChevronDownIcon()],
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
