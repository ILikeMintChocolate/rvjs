export interface SideNavLinkProps {
  text: string
  href: string
  isActive?: boolean
  tabIndex?: number
  isExternal?: boolean
  depth?: number
}

export const sideNavLinkRenderProps = {
  href: (p: SideNavLinkProps['href']) => p,
  text: (p: SideNavLinkProps['text']) => p,
  isActive: (p: SideNavLinkProps['isActive']) => p,
  tabIndex: (p: SideNavLinkProps['tabIndex']) => p,
  isExternal: (p: SideNavLinkProps['isExternal']) => p,
  depth: (p: SideNavLinkProps['depth']) => p,
}
