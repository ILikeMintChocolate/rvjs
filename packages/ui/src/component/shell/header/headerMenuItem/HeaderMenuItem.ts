import Flex from '@layout/flex/Flex.ts'
import { a } from '@rvjs/core/dom'
import { dynamic, prop, Prop } from '@rvjs/core/reactive'
import { useNavigate } from '@rvjs/core/router'
import {
  headerMenuItem_anchor_recipe,
  headerMenuItem_li_style,
  headerMenuItem_text_recipe,
} from '@shell/header/headerMenuItem/HeaderMenuItem.css.ts'
import Text from '@typography/text/Text.ts'

interface HeaderMenuItemProps {
  text: Prop<string>
  href: Prop<string>
  isActive?: Prop<boolean>
  tabIndex?: Prop<number>
}

const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  const {
    text,
    href,
    isActive = prop(() => false),
    tabIndex = prop(() => 0),
  } = props
  const navigate = useNavigate()

  return Flex({
    as: 'li',
    classes: [prop(() => headerMenuItem_li_style)],
    tabIndex: -1,
    children: [
      a({
        classes: [
          dynamic(() => headerMenuItem_anchor_recipe({ isActive: isActive() })),
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
              prop(() => headerMenuItem_text_recipe({ isActive: isActive() })),
            ],
          }),
        ],
      }),
    ],
  })
}

export default HeaderMenuItem
