export interface SubMenuItemProps {
  href: string
  text: string
  isActive?: boolean
  tabIndex?: number
}

export const subMenuItemRenderProps = {
  href: (p: SubMenuItemProps['href']) => p,
  text: (p: SubMenuItemProps['text']) => p,
  isActive: (p: SubMenuItemProps['isActive']) => p,
  tabIndex: (p: SubMenuItemProps['tabIndex']) => p,
}
