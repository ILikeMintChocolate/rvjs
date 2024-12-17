import { Children } from '@rvjs/core'

export interface UnorderedListProps {
  children: Children
  type?: 'disc' | 'square'
}

export const unorderedListRenderProps = {
  children: (p: UnorderedListProps['children']) => p,
  type: (p: UnorderedListProps['type']) => p,
}
