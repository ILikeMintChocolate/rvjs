import { Children } from '@rvjs/core'
import { createSvg } from '@util/svg.ts'

export interface LinkProps {
  href: string
  as?: keyof HTMLElementTagNameMap
  children?: Children
  disabled?: boolean
  inline?: boolean
  renderIcon?: SVGElement
  size?: 'sm' | 'md' | 'lg'
}

export const linkRenderProps = {
  href: (p: LinkProps['href']) => p,
  as: (p: LinkProps['as']) => p,
  children: (p: LinkProps['children']) => p,
  disabled: (p: LinkProps['disabled']) => p,
  inline: (p: LinkProps['inline']) => p,
  renderIcon: (p: string) => createSvg(p),
  size: (p: LinkProps['size']) => p,
}
