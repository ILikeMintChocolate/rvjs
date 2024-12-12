import { Component } from '@rvjs/core'

export interface SideNavProps {
  children: (Component | Node)[]
}

export const sideNavProps = {
  children: (p: SideNavProps['children']) => p,
}
