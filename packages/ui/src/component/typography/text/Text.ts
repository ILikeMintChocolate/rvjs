import { element, ExtendedHTMLElement } from '@rvjs/core/dom'
import { classifyProperty } from '@system/property/property.ts'
import { StyleProperty } from '@system/property/styleProperty.ts'
import { PickProps } from '@system/property/type.js'
import { UtilProperty } from '@system/property/utilProperty.ts'
import {
  FONT_SIZE_VARIANT,
  FONT_WEIGHT_VARIANT,
  LINE_HEIGHT_VARIANT,
} from '@typography/text/variant.js'

type TextProps = CustomTextProps &
  PickProps<
    StyleProperty,
    | 'color'
    | 'bgColor'
    | 'fontFamily'
    | 'fs'
    | 'fw'
    | 'lh'
    | 'textAlign'
    | 'textDecoration'
    | 'style'
  > &
  PickProps<UtilProperty, 'as'> &
  Partial<Omit<ExtendedHTMLElement<'span'>, 'children' | 'style'>>

interface CustomTextProps {
  text: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  weight?: 'light' | 'regular' | 'medium' | 'bold'
}

const Text = (props: TextProps) => {
  const { as = 'span', text, size = 'md', weight = 'regular', ...rest } = props
  const { styleProps, domProps, restProps } = classifyProperty(rest)

  return element(as, {
    textContent: text,
    style: {
      fontSize: FONT_SIZE_VARIANT[size],
      lineHeight: LINE_HEIGHT_VARIANT[size],
      fontWeight: FONT_WEIGHT_VARIANT[weight],
      ...styleProps,
    },
    ...domProps,
    ...restProps,
  })
}

export default Text
