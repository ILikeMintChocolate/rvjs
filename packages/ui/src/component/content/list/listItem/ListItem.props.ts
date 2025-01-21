export interface ListItemProps {
  children?: JSX.Element
}

export const listItemRenderProps = {
  children: (p: ListItemProps['children']) => p,
}
