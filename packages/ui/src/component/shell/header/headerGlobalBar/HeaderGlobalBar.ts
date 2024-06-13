import Flex from '@layout/flex/Flex.ts'
import { Children } from '@rvjs/core/dom'
import { prop } from '@rvjs/core/reactive'
import { headerGlobalBar_style } from '@shell/header/headerGlobalBar/HeaderGlobalBar.css.ts'

interface HeaderGlobalBarProps {
  children?: Children
}

const HeaderGlobalBar = (props: HeaderGlobalBarProps) => {
  const { children = [] } = props

  return Flex({
    as: 'ul',
    classes: [prop(() => headerGlobalBar_style)],
    children,
  })
}

export default HeaderGlobalBar
