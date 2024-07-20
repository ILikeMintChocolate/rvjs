import { ElementType } from '@rvjs/core/dom'
import { Prop, prop } from '@rvjs/core/reactive'
import { isArray, isOptional, isProp, isString } from '@rvjs/is'
import { TextStyleProps } from '@typography/text/Text.css.ts'

export interface TextProps extends TextStyleProps {
  as?: ElementType
  classes?: Prop<string>[]
  text: Prop<string>
}

export const textPropsType = {
  as: isOptional(isString),
  classes: isOptional(isArray(isProp(isString))),
  text: isProp(isString),
  kind: isOptional(isProp(isString)),
  color: isOptional(isProp(isString)),
}

export const textRenderProps = {
  as: (p: ElementType) => p,
  classes: (p: string[]) => p.map((cls) => prop(() => cls)),
  text: (p: string) => prop(() => p),
  kind: (p: TextStyleProps['kind']) => prop(() => p),
  color: (p: TextStyleProps['color']) => prop(() => p),
}
