import { Children } from '@rvjs/core'

export interface SideNavItemsProps {
  children: Children
}

export const sideNavItemsProps = {
  children: (p: SideNavItemsProps['children']) => p,
}
