export interface HeaderNavigationProps {
  children: JSX.Element
}

export const headerNavigationRenderProps = {
  children: (p: HeaderNavigationProps['children']) => p,
}
