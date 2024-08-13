import Flex from '@layout/flex/Flex.ts'
import { Children, prop } from '@rvjs/core'
import {
  header_content_style,
  header_style,
} from '@shell/header/header/Header.css.ts'

interface HeaderProps {
  children?: Children
}

const Header = (props: HeaderProps) => {
  const { children = [] } = props

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
