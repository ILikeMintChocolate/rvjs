import {
  headerNavigation_nav_style,
  headerNavigation_ul_style,
} from '@shell/header/headerNavigation/HeaderNavigation.css.ts'
import { HeaderNavigationProps } from '@shell/header/headerNavigation/HeaderNavigation.props.ts'

const HeaderNavigation = (props: HeaderNavigationProps) => {
  return (
    <nav className={headerNavigation_nav_style}>
      <ul className={headerNavigation_ul_style}>{props.children}</ul>
    </nav>
  )
}

export default HeaderNavigation
