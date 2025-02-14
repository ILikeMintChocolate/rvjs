import { ChevronDownIcon } from '@content/icon/Icons.tsx'
import {
  subMenu_button_recipe,
  subMenu_dropDown_recipe,
  subMenu_icon_recipe,
  subMenu_iconWrapper_style,
  subMenu_text_style,
  subMenu_wrapper_style,
} from '@shell/header/subMenu/SubMenu.css.ts'
import {
  useSubMenuProps,
  useSubMenuToggle,
} from '@shell/header/subMenu/SubMenu.hook.ts'
import { SubMenuProps } from '@shell/header/subMenu/SubMenu.props.ts'
import { noDrag_style } from '@theme/util/util.css.ts'
import Text from '@typography/text/Text.tsx'

const SubMenu = (_props: SubMenuProps) => {
  const props = useSubMenuProps(_props)
  const { showItems, subMenuElement, onClickHandler, onBlurHandler } =
    useSubMenuToggle(props)

  return (
    <div
      element={subMenuElement}
      className={subMenu_wrapper_style}
      aria-label={props.ariaLabel}
    >
      <button
        element={props.focusElement}
        className={subMenu_button_recipe({ isSelected: showItems() })}
        onClick={onClickHandler}
        onBlur={onBlurHandler}
        tabIndex={props.tabIndex}
      >
        <Text
          kind="body-compact-01"
          color="textSecondary"
          className={[subMenu_text_style, noDrag_style].join(' ')}
        >
          {props.menuName}
        </Text>
        <div className={subMenu_iconWrapper_style}>
          <ChevronDownIcon
            className={subMenu_icon_recipe({ isSelected: showItems() })}
          />
        </div>
      </button>
      <ul className={subMenu_dropDown_recipe({ isSelected: showItems() })}>
        {props.children}
      </ul>
    </div>
  )
}

export default SubMenu
