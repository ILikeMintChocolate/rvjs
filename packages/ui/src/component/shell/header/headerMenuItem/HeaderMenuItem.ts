import Flex from '@layout/flex/Flex.ts'
import { a, dynamic, prop, useNavigate } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  headerMenuItem_anchor_recipe,
  headerMenuItem_li_style,
  headerMenuItem_text_recipe,
} from '@shell/header/headerMenuItem/HeaderMenuItem.css.ts'
import {
  HeaderMenuItemProps,
  headerMenuItemPropsType,
} from '@shell/header/headerMenuItem/HeaderMenuItem.props.ts'
import Text from '@typography/text/Text.ts'

const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  const {
    text,
    href,
    isActive = prop(() => false),
    tabIndex = prop(() => 0),
  } = checkProps(props, headerMenuItemPropsType)
  const navigate = useNavigate()

  return Flex({
    as: 'li',
    classes: [prop(() => headerMenuItem_li_style)],
    tabIndex: -1,
    children: [
      a({
        classes: [
          dynamic(() =>
            headerMenuItem_anchor_recipe({ isActive: isActive() }).split(' '),
          ),
        ],
        href,
        tabIndex: dynamic(() => tabIndex()),
        onclick: (event: Event) => {
          event.preventDefault()
          navigate(href())
        },
        children: [
          Text({
            text,
            kind: prop(() => 'body-compact-01'),
            color: prop(() => 'textSecondary'),
            classes: [
              prop(() =>
                headerMenuItem_text_recipe({ isActive: isActive() }).split(' '),
              ),
            ],
          }),
        ],
      }),
    ],
  })
}

export default HeaderMenuItem
