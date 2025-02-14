export interface HeaderMenuItemProps {
  text: string
  href: string
  isActive?: boolean
  tabIndex?: number
  isExternal?: boolean
}

export const headerMenuItemRenderProps = {
  text: (p: HeaderMenuItemProps['text']) => p,
  href: (p: HeaderMenuItemProps['href']) => p,
  isActive: (p: HeaderMenuItemProps['isActive']) => p,
  tabIndex: (p: HeaderMenuItemProps['tabIndex']) => p,
  isExternal: (p: HeaderMenuItemProps['isExternal']) => p,
}
