import Flex from '@layout/flex/Flex.ts'
import { a, dynamic, prop, useNavigate } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  sideNavLink_anchor_recipe,
  sideNavLink_style,
  sideNavLink_text_recipe,
} from '@shell/sideNav/sideNavLink/SideNavLink.css.ts'
import {
  SideNavLinkProps,
  sideNavLinkPropsType,
} from '@shell/sideNav/sideNavLink/SideNavLink.props.ts'
import Text from '@typography/text/Text.ts'

const SideNavLink = (props: SideNavLinkProps) => {
  const {
    text,
    href,
    isActive = prop(() => true),
    tabIndex = prop(() => 0),
  } = checkProps(props, sideNavLinkPropsType)
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
          dynamic(() =>
            sideNavLink_anchor_recipe({ isActive: isActive() }).split(' '),
          ),
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
              prop(() =>
                sideNavLink_text_recipe({ isActive: isActive() }).split(' '),
              ),
            ],
          }),
        ],
      }),
    ],
  })
}

export default SideNavLink
