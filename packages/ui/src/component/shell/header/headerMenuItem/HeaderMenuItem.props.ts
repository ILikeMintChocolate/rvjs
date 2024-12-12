export interface HeaderMenuItemProps {
  text: string
  href: string
  isActive?: boolean
  tabIndex?: number
}

export const headerMenuItemRenderProps = {
  text: (p: HeaderMenuItemProps['text']) => p,
  href: (p: HeaderMenuItemProps['href']) => p,
  isActive: (p: HeaderMenuItemProps['isActive']) => p,
  tabIndex: (p: HeaderMenuItemProps['tabIndex']) => p,
}
