import {
  header_content_recipe,
  header_wrapper_style,
} from '@shell/header/header/Header.css.ts'
import { useHeaderProps } from '@shell/header/header/Header.hook.ts'
import { HeaderProps } from '@shell/header/header/Header.props.ts'

const Header = (_props: HeaderProps) => {
  const props = useHeaderProps(_props)

  return (
    <header className={header_wrapper_style}>
      <div className={header_content_recipe({ deviceType: props.deviceType })}>
        {props.children}
      </div>
    </header>
  )
}

export default Header
