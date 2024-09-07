import { Children, Prop, prop } from '@rvjs/core'
import {
  isArray,
  isBoolean,
  isChildren,
  isFunctionType,
  isOptional,
  isProp,
  isString,
} from '@rvjs/is'
import { EventHandlers } from '@type/event.ts'

export interface HeaderGlobalActionProps {
  children: Children
  classes?: Prop<string>[]
  isActive?: Prop<boolean>
  onClick?: EventHandlers['onClick']
  tooltip?: Prop<string>
  tooltipAlignment?: 'start' | 'center' | 'end'
}

export const headerGlobalActionPropsType = {
  children: isChildren,
  classes: isOptional(isArray(isProp(isString))),
  isActive: isOptional(isProp(isBoolean)),
  onClick: isOptional(isFunctionType),
  tooltip: isOptional(isProp(isString)),
  tooltipAlignment: isOptional(isString),
}

export const headerGlobalActionRenderProps = {
  children: (p: Children) => p,
  classes: (p: string[]) => p.map((cls) => prop(() => cls)),
  isActive: (p: boolean) => prop(() => p),
  onClick: (p: Function) => p,
  tooltip: (p: string) => prop(() => p),
  tooltipAlignment: (p: string) => p,
}
