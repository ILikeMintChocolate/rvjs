import { ElementObject } from '@rvjs/core'
import { EventHandlers } from '@type/event.ts'

export interface SideNavMenuProps {
  menuName: string
  children: JSX.Element
  depth?: number
  ariaLabel?: string
  focusElement?: ElementObject<HTMLButtonElement>
  onBlur?: EventHandlers['onBlur']
  onClick?: EventHandlers['onClick']
  tabIndex?: number
  defaultShow?: boolean
}

export const sideNavMenuRenderProps = {
  menuName: (p: SideNavMenuProps['menuName']) => p,
  children: (p: SideNavMenuProps['children']) => p,
  depth: (p: SideNavMenuProps['depth']) => p,
  ariaLabel: (p: SideNavMenuProps['ariaLabel']) => p,
  focusElement: (p: SideNavMenuProps['focusElement']) => p,
  onBlur: (p: SideNavMenuProps['onBlur']) => p,
  onClick: (p: SideNavMenuProps['onClick']) => p,
  tabIndex: (p: SideNavMenuProps['tabIndex']) => p,
  defaultShow: (p: SideNavMenuProps['defaultShow']) => p,
}
