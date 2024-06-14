import Flex from '@layout/flex/Flex.ts'
import { Children } from '@rvjs/core/dom'
import { prop } from '@rvjs/core/reactive'
import { sideNavItems_style } from '@shell/sideNav/sideNavItems/SideNavItems.css.ts'

interface SideNavItemsProps {
  children: Children
}

const SideNavItems = (props: SideNavItemsProps) => {
  const { children } = props

  return Flex({
    as: 'ul',
    direction: 'column',
    classes: [prop(() => sideNavItems_style)],
    children,
  })
}

export default SideNavItems
