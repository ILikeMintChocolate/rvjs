import { Component } from '@rvjs/core'

export interface ListItemProps {
  children?: (Component | Node)[]
}

export const listItemRenderProps = {
  children: (p: ListItemProps['children']) => p,
}
