import Flex from '@layout/flex/Flex.ts'
import { Children } from '@rvjs/core/dom'
import { prop } from '@rvjs/core/reactive'
import {
  headerNavigation_nav_style,
  headerNavigation_ul_style,
} from '@shell/header/headerNavigation/HeaderNavigation.css.ts'

interface HeaderNavigationProps {
  children?: Children
}

const HeaderNavigation = (props: HeaderNavigationProps) => {
  const { children = [] } = props

  return Flex({
    as: 'nav',
    classes: [prop(() => headerNavigation_nav_style)],
    children: [
      Flex({
        as: 'ul',
        classes: [prop(() => headerNavigation_ul_style)],
        children,
      }),
    ],
  })
}

export default HeaderNavigation
