import { Children } from '@rvjs/core'

export interface SideNavProps {
  children: Children
}

export const sideNavProps = {
  children: (p: SideNavProps['children']) => p,
}
