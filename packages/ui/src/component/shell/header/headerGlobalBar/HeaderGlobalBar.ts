import Flex from '@layout/flex/Flex.ts'
import { prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import { headerGlobalBar_style } from '@shell/header/headerGlobalBar/HeaderGlobalBar.css.ts'
import {
  HeaderGlobalBarProps,
  headerGlobalPropsType,
} from '@shell/header/headerGlobalBar/HeaderGlobalBar.props.ts'

const HeaderGlobalBar = (props: HeaderGlobalBarProps) => {
  const { children } = checkProps(props, headerGlobalPropsType)

  return Flex({
    as: 'ul',
    classes: [prop(() => headerGlobalBar_style)],
    children,
  })
}

export default HeaderGlobalBar
