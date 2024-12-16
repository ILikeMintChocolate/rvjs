// @ts-nocheck

import { ChevronDownIcon } from '@content/icon/Icons.tsx'
import {
  sideNavMenu_button_style,
  sideNavMenu_icon_recipe,
  sideNavMenu_iconWrapper_style,
  sideNavMenu_text_style,
  sideNavMenu_ul_recipe,
  sideNavMenu_wrapper_style,
} from '@shell/sideNav/sideNavMenu/SideNavMenu.css.ts'
import {
  useSideNavMenuProps,
  useSideNavMenuToggle,
} from '@shell/sideNav/sideNavMenu/SideNavMenu.hook.ts'
import { SideNavMenuProps } from '@shell/sideNav/sideNavMenu/SideNavMenu.props.ts'
import { noDrag_style } from '@theme/util/util.css.ts'
import Text from '@typography/text/Text.tsx'

const SideNavMenu = (_props: SideNavMenuProps) => {
  const props = useSideNavMenuProps(_props)
  const { showItems, onClickHandler, onBlurHandler } =
    useSideNavMenuToggle(props)

  return (
    <div className={sideNavMenu_wrapper_style} aria-label={props.ariaLabel}>
      <button
        element={props.focusElement}
        className={sideNavMenu_button_style}
        tabIndex={props.tabIndex}
        onClick={onClickHandler}
        onBlur={onBlurHandler}
      >
        <Text
          kind="heading-compact-01"
          color="textSecondary"
          className={[sideNavMenu_text_style, noDrag_style].join(' ')}
        >
          {props.menuName}
        </Text>
        <div className={sideNavMenu_iconWrapper_style}>
          <ChevronDownIcon
            className={sideNavMenu_icon_recipe({ isShow: showItems() })}
          />
        </div>
      </button>
      <ul className={sideNavMenu_ul_recipe({ isShow: showItems() })}>
        {props.children}
      </ul>
    </div>
  )
}

export default SideNavMenu
