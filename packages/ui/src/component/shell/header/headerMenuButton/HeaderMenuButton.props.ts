import { svg } from '@rvjs/core'
import { isChild, isFunction, isOptional } from '@rvjs/is'
import { EventHandlers } from '@type/event.ts'

export interface HeaderMenuButtonProps {
  onClick?: EventHandlers['onClick']
  menuIcon?: SVGElement
  closeIcon?: SVGElement
}

export const headerMenuButtonPropsType = {
  onClick: isOptional(isFunction),
  menuIcon: isOptional(isChild),
  closeIcon: isOptional(isChild),
}

export const headerMenuButtonRenderProps = {
  onClick: (p: Function) => p,
  menuIcon: (p: SVGElement) => svg(p),
  closeIcon: (p: SVGElement) => svg(p),
}
