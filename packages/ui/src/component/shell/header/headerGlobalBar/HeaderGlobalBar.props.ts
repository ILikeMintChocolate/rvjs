import { Children } from '@rvjs/core'

export interface HeaderGlobalBarProps {
  children: Children
}

export const headerGlobalRenderProps = {
  children: (p: HeaderGlobalBarProps['children']) => p,
}
