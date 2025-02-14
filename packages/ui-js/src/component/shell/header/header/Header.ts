import Flex from '@layout/flex/Flex.ts'
import { prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  header_content_style,
  header_style,
} from '@shell/header/header/Header.css.ts'
import {
  HeaderProps,
  headerPropsType,
} from '@shell/header/header/Header.props.ts'

const Header = (props: HeaderProps) => {
  const { children = [] } = checkProps(props, headerPropsType)

  return Flex({
    as: 'header',
    classes: [prop(() => header_style)],
    children: [
      Flex({
        classes: [prop(() => header_content_style)],
        children,
      }),
    ],
  })
}

export default Header
