import { Component, ElementObject } from '@rvjs/core'
import { EventHandlers } from '@type/event.ts'

export interface SubMenuProps {
  menuName: string
  children: (Component | Node)[]
  ariaLabel?: string
  focusElement?: ElementObject<HTMLButtonElement>
  onBlur?: EventHandlers['onBlur']
  onClick?: EventHandlers['onClick']
  tabIndex?: number
}

export const subMenuRenderProps = {
  menuName: (p: SubMenuProps['menuName']) => p,
  children: (p: SubMenuProps['children']) => p,
  ariaLabel: (p: SubMenuProps['ariaLabel']) => p,
  focusElement: (p: SubMenuProps['focusElement']) => p,
  onBlur: (p: SubMenuProps['onBlur']) => p,
  onClick: (p: SubMenuProps['onClick']) => p,
  tabIndex: (p: SubMenuProps['tabIndex']) => p,
}
