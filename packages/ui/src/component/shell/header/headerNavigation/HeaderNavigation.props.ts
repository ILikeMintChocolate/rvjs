import { Children } from '@rvjs/core'
import { isChildren } from '@rvjs/is'

export interface HeaderNavigationProps {
  children: Children
}

export const headerNavigationPropsType = {
  children: isChildren,
}

export const headerNavigationRenderProps = {
  children: (p: Children) => p,
}
