import Flex from '@layout/flex/Flex.ts'
import { a } from '@rvjs/core/dom'
import { dynamic, Prop, prop } from '@rvjs/core/reactive'
import { useNavigate } from '@rvjs/core/router'
import {
  sideNavLink_anchor_style,
  sideNavLink_style,
  sideNavLink_text_recipe,
} from '@shell/sideNav/sideNavLink/SideNavLink.css.ts'
import Text from '@typography/text/Text.ts'

interface SideNavLinkProps {
  text: Prop<string>
  href: Prop<string>
  isActive?: Prop<boolean>
  tabIndex?: Prop<number>
}

const SideNavLink = (props: SideNavLinkProps) => {
  const {
    text,
    href,
    isActive = prop(() => true),
    tabIndex = prop(() => 0),
  } = props
  const navigate = useNavigate()

  return Flex({
    as: 'li',
    classes: [prop(() => sideNavLink_style)],
    tabIndex: -1,
    children: [
      a({
        href: prop(() => href()),
        tabIndex: dynamic(() => tabIndex()),
        classes: [
          dynamic(() => sideNavLink_anchor_style({ isActive: isActive() })),
        ],
        onclick: (event: Event) => {
          event.preventDefault()
          navigate(href())
        },
        children: [
          Text({
            text,
            kind: prop(() => 'heading-compact-01'),
            color: prop(() => 'textSecondary'),
            classes: [
              prop(() => sideNavLink_text_recipe({ isActive: isActive() })),
            ],
          }),
        ],
      }),
    ],
  })
}

export default SideNavLink
