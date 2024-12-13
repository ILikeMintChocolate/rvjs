import { Component } from '@rvjs/core'

export interface SideNavItemsProps {
  children: (Component | Node)[]
}

export const sideNavItemsProps = {
  children: (p: SideNavItemsProps['children']) => p,
}
