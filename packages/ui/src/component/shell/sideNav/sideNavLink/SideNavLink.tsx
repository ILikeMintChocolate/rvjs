import {
  sideNavLink_anchor_recipe,
  sideNavLink_style,
  sideNavLink_text_recipe,
} from '@shell//sideNav/sideNavLink/SideNavLink.css.ts'
import {
  useSideNavLinkNavigation,
  useSideNavLinkProps,
} from '@shell//sideNav/sideNavLink/SideNavLink.hook.ts'
import { SideNavLinkProps } from '@shell//sideNav/sideNavLink/SideNavLink.props.ts'
import Text from '@typography/text/Text.tsx'

const SideNavLink = (_props: SideNavLinkProps) => {
  const props = useSideNavLinkProps(_props)
  const onClickHandler = useSideNavLinkNavigation(props)

  return (
    <li className={sideNavLink_style} tabIndex={-1}>
      <a
        href={props.href}
        tabIndex={props.tabIndex}
        className={sideNavLink_anchor_recipe({
          isActive: props.isActive,
        })}
        style={{
          'padding-left': `${props.depth / 2 + 1}rem`,
        }}
        onClick={onClickHandler}
      >
        <Text
          kind="heading-compact-01"
          color="textSecondary"
          className={sideNavLink_text_recipe({ isActive: props.isActive })}
        >
          {props.text}
        </Text>
      </a>
    </li>
  )
}

export default SideNavLink
