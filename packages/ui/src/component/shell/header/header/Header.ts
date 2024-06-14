import Flex from '@layout/flex/Flex.ts'
import { Children } from '@rvjs/core/dom'
import { prop } from '@rvjs/core/reactive'
import { header_style } from '@shell/header/header/Header.css.ts'

interface HeaderProps {
  children?: Children
}

const Header = (props: HeaderProps) => {
  const { children = [] } = props

  return Flex({
    as: 'header',
    classes: [prop(() => header_style)],
    children,
  })
}

export default Header
