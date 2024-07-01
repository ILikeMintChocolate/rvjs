import { Child } from '@rvjs/core/dom'
import { prop, Prop } from '@rvjs/core/reactive'
import { isChild, isOptional, isProp, isString } from '@rvjs/is'

export interface TooltipProps {
  trigger: Child
  description: Prop<string>
  kind?: 'standard' | 'iconButton' | 'definition'
  showOnHoverOrClick?: 'hover' | 'click'
}

export const tooltipPropsType = {
  trigger: isChild,
  description: isProp(isString),
  kind: isOptional(isString),
  showOnHoverOrClick: isOptional(isString),
}

export const tooltipRenderProps = {
  trigger: (p: Child) => p,
  description: (p: string) => prop(() => p),
  kind: (p: string) => p,
  showOnHoverOrClick: (p: string) => p,
}
