import { button, ExtendedHTMLElement } from '@rvjs/core/dom'
import { ElementBlock } from '@rvjs/core/dom/element/elementBlock.js'
import { classifyProperty } from '@system/property/property.ts'
import { StyleProperty } from '@system/property/styleProperty.ts'
import { PickProps } from '@system/property/type.js'
import Text from '@typography/text/Text.js'
import { mergeClass } from '@util/class.js'
import buttonStyle from './Button.module.less'

type ButtonProps = CustomButtonProps &
  PickProps<
    StyleProperty,
    | 'w'
    | 'h'
    | 'minW'
    | 'maxW'
    | 'minH'
    | 'maxH'
    | 'color'
    | 'bg'
    | 'bgColor'
    | 'style'
  > &
  Partial<Omit<ExtendedHTMLElement<'button'>, 'children' | 'style'>>

interface CustomButtonProps {
  text: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'solid' | 'outline' | 'ghost' | 'link'
  leftIcon?: ElementBlock
  rightIcon?: ElementBlock
}

const SIZE_STYLE_CLASS = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': 'twoXl',
}

const Button = (props: ButtonProps) => {
  const {
    text,
    size = 'md',
    variant = 'solid',
    leftIcon,
    rightIcon,
    className = '',
    ...rest
  } = props
  const { styleProps, domProps, restProps } = classifyProperty(rest)

  return button({
    className: mergeClass([
      buttonStyle.button,
      buttonStyle[variant],
      buttonStyle[SIZE_STYLE_CLASS[size]],
      ...className,
    ]),
    style: styleProps,
    children: [
      leftIcon,
      Text({
        text,
        size,
        weight: 'bold',
      }),
      rightIcon,
    ],
    ...domProps,
    ...restProps,
  })
}

export default Button
