import Flex from '@layout/flex/Flex.ts'
import { a, component } from '@rvjs/core/dom'
import { dynamic, Prop, prop, useGlobalState } from '@rvjs/core/reactive'
import { useNavigate } from '@rvjs/core/router'
import {
  subMenuItem_anchor_recipe,
  subMenuItem_li_style,
  subMenuItem_text_recipe,
} from '@shell/header/subMenuItem/SubMenuItem.css.ts'
import Text from '@typography/text/Text.ts'

interface SubMenuItemProps {
  id: string
  href: Prop<string>
  text: Prop<string>
  isActive?: Prop<boolean>
  tabIndex?: Prop<number>
}

const SubMenuItem = component<SubMenuItemProps>((props) => {
  const {
    id,
    href,
    text,
    isActive = prop(() => false),
    tabIndex = prop(() => 0),
  } = props
  const [_, setShowItems] = useGlobalState(`SUB_MENU_SHOW_ITEMS_${id}`, false)
  const navigate = useNavigate()

  return Flex({
    as: 'li',
    classes: [prop(() => subMenuItem_li_style)],
    tabIndex: -1,
    children: [
      a({
        classes: [subMenuItem_anchor_recipe({ isActive: isActive() })],
        href,
        tabIndex: dynamic(() => tabIndex()),
        onclick: (event: Event) => {
          event.preventDefault()
          navigate(href())
          setShowItems(false)
        },
        children: [
          Text({
            text,
            kind: prop(() => 'body-compact-01'),
            color: prop(() => 'textSecondary'),
            classes: [
              prop(() => subMenuItem_text_recipe({ isActive: isActive() })),
            ],
          }),
        ],
      }),
    ],
  })
})

export default SubMenuItem
