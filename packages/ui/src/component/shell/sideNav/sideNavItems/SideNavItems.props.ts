import { Children } from '@rvjs/core'
import { isChildren } from '@rvjs/is'

export interface SideNavItemsProps {
  children: Children
}

export const sideNavItemsType = {
  children: isChildren,
}

export const sideNavItemsProps = {
  children: (p: Children) => p,
}
