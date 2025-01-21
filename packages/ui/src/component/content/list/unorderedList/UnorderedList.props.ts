export interface UnorderedListProps {
  children: JSX.Element
  type?: 'disc' | 'square'
}

export const unorderedListRenderProps = {
  children: (p: UnorderedListProps['children']) => p,
  type: (p: UnorderedListProps['type']) => p,
}
