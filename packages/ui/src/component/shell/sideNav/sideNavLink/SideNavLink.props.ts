export interface SideNavLinkProps {
  text: string
  href: string
  isActive?: boolean
  tabIndex?: number
}

export const sideNavLinkRenderProps = {
  href: (p: SideNavLinkProps['href']) => p,
  text: (p: SideNavLinkProps['text']) => p,
  isActive: (p: SideNavLinkProps['isActive']) => p,
  tabIndex: (p: SideNavLinkProps['tabIndex']) => p,
}
