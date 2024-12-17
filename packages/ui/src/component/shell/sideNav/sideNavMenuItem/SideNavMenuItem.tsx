import {
  sideNavMenuItem_anchor_recipe,
  sideNavMenuItem_text_recipe,
  sideNavMenuItem_wrapper_style,
} from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.css.ts'
import {
  useSideNavMenuItemNavigation,
  useSideNavMenuItemProps,
} from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.hook.ts'
import { SideNavMenuItemProps } from '@shell/sideNav/sideNavMenuItem/SideNavMenuItem.props.ts'
import Text from '@typography/text/Text.tsx'

const SideNavMenuItem = (_props: SideNavMenuItemProps) => {
  const props = useSideNavMenuItemProps(_props)
  const onClickHandler = useSideNavMenuItemNavigation(props)

  return (
    <li className={sideNavMenuItem_wrapper_style} tabIndex={-1}>
      <a
        href={props.href}
        className={sideNavMenuItem_anchor_recipe({ isActive: props.isActive })}
        tabIndex={props.tabIndex}
        onClick={onClickHandler}
      >
        <Text
          kind="body-compact-01"
          color="textSecondary"
          className={sideNavMenuItem_text_recipe({ isActive: props.isActive })}
        >
          {props.text}
        </Text>
      </a>
    </li>
  )
}

export default SideNavMenuItem
