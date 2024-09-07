import Flex from '@layout/flex/Flex.ts'
import { prop } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  headerNavigation_nav_style,
  headerNavigation_ul_style,
} from '@shell/header/headerNavigation/HeaderNavigation.css.ts'
import {
  HeaderNavigationProps,
  headerNavigationPropsType,
} from '@shell/header/headerNavigation/HeaderNavigation.props.ts'

const HeaderNavigation = (props: HeaderNavigationProps) => {
  const { children } = checkProps(props, headerNavigationPropsType)

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
