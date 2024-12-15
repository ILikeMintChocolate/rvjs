import { Component } from '@rvjs/core'

export interface HeaderGlobalBarProps {
  children: (Component | Node)[]
}

export const headerGlobalRenderProps = {
  children: (p: HeaderGlobalBarProps['children']) => p,
}
