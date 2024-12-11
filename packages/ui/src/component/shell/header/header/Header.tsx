import {
  header_content_style,
  header_wrapper_style,
} from '@shell/header/header/Header.css.ts'
import { HeaderProps } from '@shell/header/header/Header.props.ts'

const Header = (props: HeaderProps) => {
  return (
    <header className={header_wrapper_style}>
      <div className={header_content_style}>{props.children}</div>
    </header>
  )
}

export default Header
