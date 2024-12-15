import { Component } from '@rvjs/core'

export interface HeaderNavigationProps {
  children: (Component | Node)[]
}

export const headerNavigationRenderProps = {
  children: (p: HeaderNavigationProps['children']) => p,
}
