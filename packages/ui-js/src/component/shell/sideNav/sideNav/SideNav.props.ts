import { Children } from '@rvjs/core'
import { isChildren } from '@rvjs/is'

export interface SideNavProps {
  children: Children
}

export const sideNavType = {
  children: isChildren,
}

export const sideNavProps = {
  children: (p: Children) => p,
}
