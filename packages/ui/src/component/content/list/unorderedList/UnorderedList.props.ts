import { Component } from '@rvjs/core'

export interface UnorderedListProps {
  children: (Component | Node)[]
  type?: 'disc' | 'square'
}

export const unorderedListRenderProps = {
  children: (p: UnorderedListProps['children']) => p,
  type: (p: UnorderedListProps['type']) => p,
}
