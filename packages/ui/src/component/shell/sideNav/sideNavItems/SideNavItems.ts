import Flex from '@layout/flex/Flex.ts'
import { prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import { sideNavItems_style } from '@shell/sideNav/sideNavItems/SideNavItems.css.ts'
import {
  SideNavItemsProps,
  sideNavItemsType,
} from '@shell/sideNav/sideNavItems/SideNavItems.props.ts'

const SideNavItems = (props: SideNavItemsProps) => {
  const { children } = checkProps(props, sideNavItemsType)

  return Flex({
    as: 'ul',
    direction: 'column',
    classes: [prop(() => sideNavItems_style)],
    children,
  })
}

export default SideNavItems
