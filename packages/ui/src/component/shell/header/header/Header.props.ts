import { Component } from '@rvjs/core'

export interface HeaderProps {
  children?: (Component | Node)[]
}

export const headerRenderProps = {
  children: (p: HeaderProps['children']) => p,
}
