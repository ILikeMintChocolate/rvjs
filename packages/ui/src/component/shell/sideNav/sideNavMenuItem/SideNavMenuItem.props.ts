export interface SideNavMenuItemProps {
  href: string
  text: string
  isActive?: boolean
  tabIndex?: number
  isExternal?: boolean
  depth?: number
}

export const sideNavMenuItemRenderProps = {
  href: (p: SideNavMenuItemProps['href']) => p,
  text: (p: SideNavMenuItemProps['text']) => p,
  isActive: (p: SideNavMenuItemProps['isActive']) => p,
  tabIndex: (p: SideNavMenuItemProps['tabIndex']) => p,
  isExternal: (p: SideNavMenuItemProps['isExternal']) => p,
}
