export interface SideNavProps {
  children: JSX.Element
}

export const sideNavProps = {
  children: (p: SideNavProps['children']) => p,
}
