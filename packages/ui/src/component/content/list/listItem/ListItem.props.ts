import { Children } from '@rvjs/core'

export interface ListItemProps {
  children?: Children
}

export const listItemRenderProps = {
  children: (p: ListItemProps['children']) => p,
}
