export interface OrderedListProps {
  children: JSX.Element
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}

export const orderedListRenderProps = {
  children: (p: OrderedListProps['children']) => p,
  type: (p: OrderedListProps['type']) => p,
}
