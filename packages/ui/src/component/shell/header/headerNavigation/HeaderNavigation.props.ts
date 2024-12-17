import { Children } from '@rvjs/core'

export interface HeaderNavigationProps {
  children: Children
}

export const headerNavigationRenderProps = {
  children: (p: HeaderNavigationProps['children']) => p,
}
