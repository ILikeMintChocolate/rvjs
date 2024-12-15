import {
  headerMenuItem_anchor_recipe,
  headerMenuItem_li_style,
  headerMenuItem_text_recipe,
} from '@shell/header/headerMenuItem/HeaderMenuItem.css.ts'
import {
  useHeaderMenuItemNavigation,
  useHeaderMenuItemProps,
} from '@shell/header/headerMenuItem/HeaderMenuItem.hook.ts'
import { HeaderMenuItemProps } from '@shell/header/headerMenuItem/HeaderMenuItem.props.ts'
import Text from '@typography/text/Text.tsx'

const HeaderMenuItem = (_props: HeaderMenuItemProps) => {
  const props = useHeaderMenuItemProps(_props)
  const onClickHandler = useHeaderMenuItemNavigation(props)

  return (
    <li className={headerMenuItem_li_style} tabIndex={-1}>
      <a
        className={headerMenuItem_anchor_recipe({ isActive: props.isActive })}
        href={props.href}
        tabIndex={props.tabIndex}
        onClick={onClickHandler}
      >
        <Text
          kind="body-compact-01"
          color="textSecondary"
          className={headerMenuItem_text_recipe({ isActive: props.isActive })}
        >
          {props.text}
        </Text>
      </a>
    </li>
  )
}

export default HeaderMenuItem
