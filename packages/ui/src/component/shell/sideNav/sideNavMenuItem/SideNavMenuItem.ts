import Flex from '@layout/flex/Flex.ts'
import { a, dynamic, prop, useNavigate } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  sideNavMenuItem_anchor_recipe,
  sideNavMenuItem_style,
  sideNavMenuItem_text_recipe,
} from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.css.ts'
import {
  SideNavMenuItemProps,
  sideNavMenuItemPropsType,
} from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.props.ts'
import Text from '@typography/text/Text.ts'

const SideNavMenuItem = (props: SideNavMenuItemProps) => {
  const {
    text,
    href,
    isActive = prop(() => true),
    tabIndex = prop(() => 0),
  } = checkProps(props, sideNavMenuItemPropsType)
  const navigate = useNavigate()

  return Flex({
    as: 'li',
    classes: [prop(() => sideNavMenuItem_style)],
    tabIndex: -1,
    children: [
      a({
        href,
        classes: [
          dynamic(() =>
            sideNavMenuItem_anchor_recipe({ isActive: isActive() }),
          ),
        ],
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
              prop(() => sideNavMenuItem_text_recipe({ isActive: isActive() })),
            ],
          }),
        ],
      }),
    ],
  })
}

export default SideNavMenuItem
