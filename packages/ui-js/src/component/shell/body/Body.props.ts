import { Children, ElementType } from '@rvjs/core'
import { isChildren, isOptional, isString } from '@rvjs/is'

export interface BodyProps {
  as?: ElementType
  children: Children
}

export const bodyPropsType = {
  as: isOptional(isString),
  children: isChildren,
}

export const bodyRenderProps = {
  as: (p: ElementType) => p,
  children: (p: Children) => p,
}
