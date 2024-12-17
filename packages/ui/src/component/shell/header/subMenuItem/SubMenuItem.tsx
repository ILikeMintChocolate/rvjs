import {
  subMenuItem_anchor_recipe,
  subMenuItem_li_style,
  subMenuItem_text_recipe,
} from '@shell/header/subMenuItem/SubMenuItem.css.ts'
import {
  useSubMenuItemProps,
  useSubMenuNavigation,
} from '@shell/header/subMenuItem/SubMenuItem.hook.ts'
import { SubMenuItemProps } from '@shell/header/subMenuItem/SubMenuItem.props.ts'
import Text from '@typography/text/Text.tsx'

const SubMenuItem = (_props: SubMenuItemProps) => {
  const props = useSubMenuItemProps(_props)
  const onClickHandler = useSubMenuNavigation(props)

  return (
    <li className={subMenuItem_li_style} tabIndex={-1}>
      <a
        className={subMenuItem_anchor_recipe({ isActive: props.isActive })}
        href={props.href}
        tabIndex={props.tabIndex}
        onClick={onClickHandler}
      >
        <Text
          kind="body-compact-01"
          color="textSecondary"
          className={subMenuItem_text_recipe({ isActive: props.isActive })}
        >
          {props.text}
        </Text>
      </a>
    </li>
  )
}

export default SubMenuItem
