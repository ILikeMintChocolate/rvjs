import { EventHandlers } from '@type/event.ts'
import { createSvg } from '@util/svg.ts'

export interface HeaderMenuButtonProps {
  onClick?: EventHandlers['onClick']
  menuIcon?: SVGElement
  closeIcon?: SVGElement
}

export const headerMenuButtonRenderProps = {
  onClick: (p: HeaderMenuButtonProps['onClick']) => p,
  menuIcon: (p: string) => createSvg(p),
  closeIcon: (p: string) => createSvg(p),
}
