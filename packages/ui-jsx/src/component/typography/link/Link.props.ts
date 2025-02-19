import { createSvg } from '@util/svg.ts'

export interface LinkProps {
  href: string
  as?: keyof HTMLElementTagNameMap
  children?: JSX.Element
  disabled?: boolean
  inline?: boolean
  renderIcon?: SVGElement
  size?: 'sm' | 'md' | 'lg'
  isExternal?: boolean
}

export const linkRenderProps = {
  href: (p: LinkProps['href']) => p,
  as: (p: LinkProps['as']) => p,
  children: (p: LinkProps['children']) => p,
  disabled: (p: LinkProps['disabled']) => p,
  inline: (p: LinkProps['inline']) => p,
  renderIcon: (p: string) => createSvg(p),
  size: (p: LinkProps['size']) => p,
  isExternal: (p: LinkProps['isExternal']) => p,
}
