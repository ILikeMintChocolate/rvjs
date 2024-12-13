import { sideNavItems_style } from '@shell/sideNav/sideNavItems/SideNavItems.css.ts'
import { SideNavItemsProps } from '@shell/sideNav/sideNavItems/SideNavItems.props.ts'

const SideNavItems = (props: SideNavItemsProps) => {
  return <ul className={sideNavItems_style}>{props.children}</ul>
}

export default SideNavItems
