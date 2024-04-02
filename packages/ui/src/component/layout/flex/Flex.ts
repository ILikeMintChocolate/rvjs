import { element } from '@rvjs/core/dom'
import { classifyProperty } from '@system/property/property.ts'
import { StyleProperty } from '@system/property/styleProperty.ts'
import { PickProps } from '@system/property/type.ts'
import { BoxProps } from '../box/Box.ts'

type FlexProps = BoxProps &
  PickProps<
    StyleProperty,
    | 'direction'
    | 'justify'
    | 'gap'
    | 'wrap'
    | 'basis'
    | 'grow'
    | 'shrink'
    | 'align'
  >

const Flex = (props?: FlexProps) => {
  const { as = 'div', ...rest } = props ?? {}
  const { styleProps, domProps, restProps } = classifyProperty(rest)

  return element(as, {
    style: styleProps,
    ...domProps,
    ...restProps,
  })
}

export default Flex
