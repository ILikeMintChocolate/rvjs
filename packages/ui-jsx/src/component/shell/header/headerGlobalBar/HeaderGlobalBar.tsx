import { headerGlobalBar_style } from '@shell/header/headerGlobalBar/HeaderGlobalBar.css.ts'
import { HeaderGlobalBarProps } from '@shell/header/headerGlobalBar/HeaderGlobalBar.props.ts'

const HeaderGlobalBar = (props: HeaderGlobalBarProps) => {
  return <ul className={headerGlobalBar_style}>{props.children}</ul>
}

export default HeaderGlobalBar
