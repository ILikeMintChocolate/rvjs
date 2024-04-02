import { element, ExtendedHTMLElement } from '@rvjs/core/dom'
import { DomProperty } from '@system/property/domProperty.ts'
import { classifyProperty } from '@system/property/property.ts'
import { StyleProperty } from '@system/property/styleProperty.ts'
import { PickProps } from '@system/property/type.ts'
import { UtilProperty } from '@system/property/utilProperty.ts'

export type BoxProps = PickProps<
  StyleProperty,
  | 'w'
  | 'h'
  | 'minW'
  | 'maxW'
  | 'minH'
  | 'maxH'
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'color'
  | 'bg'
  | 'bgColor'
  | 'opacity'
  | 't'
  | 'r'
  | 'b'
  | 'l'
  | 'zIndex'
  | 'style'
> &
  PickProps<DomProperty, 'c' | 'text'> &
  PickProps<UtilProperty, 'as'> &
  Partial<Omit<ExtendedHTMLElement<'div'>, 'children' | 'style'>>

const Box = (props?: BoxProps) => {
  const { as = 'div', ...rest } = props ?? {}
  const { styleProps, domProps, restProps } = classifyProperty(rest)

  return element(as, {
    style: styleProps,
    ...domProps,
    ...restProps,
  })
}

export default Box
