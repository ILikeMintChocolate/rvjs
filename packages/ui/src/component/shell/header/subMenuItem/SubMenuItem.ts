import Flex from '@layout/flex/Flex.ts'
import {
  a,
  component,
  ComponentFn,
  dynamic,
  Prop,
  prop,
  useNavigate,
} from '@rvjs/core'
import { subMenuContext } from '@shell/header/subMenu/SubMenu.ts'
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

const SubMenuItem: ComponentFn = component<SubMenuItemProps>((props) => {
  const {
    href,
    text,
    isActive = prop(() => false),
    tabIndex = prop(() => 0),
  } = props
  const { setShowItems } = subMenuContext.getContext()
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
