import { Component } from '@rvjs/core'

export interface OrderedListProps {
  children: (Component | Node)[]
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}

export const orderedListRenderProps = {
  children: (p: OrderedListProps['children']) => p,
  type: (p: OrderedListProps['type']) => p,
}
