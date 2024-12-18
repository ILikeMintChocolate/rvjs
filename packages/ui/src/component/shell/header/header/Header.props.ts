import { Children } from '@rvjs/core'

export interface HeaderProps {
  children?: Children
}

export const headerRenderProps = {
  children: (p: HeaderProps['children']) => p,
}
