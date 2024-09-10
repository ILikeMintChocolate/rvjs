import { CloseIcon, MenuIcon } from '@content/icon/Icons.ts'
import { button, component, ComponentFn, svg, Switch } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  headerMenuButton_button_style,
  headerMenuButton_icon_style,
} from '@shell/header/headerMenuButton/HeaderMenuButton.css.ts'
import {
  HeaderMenuButtonProps,
  headerMenuButtonPropsType,
} from '@shell/header/headerMenuButton/HeaderMenuButton.props.ts'
import { rvjsUIThemeContext } from '@system/provider.ts'

const HeaderMenuButton: ComponentFn = component<HeaderMenuButtonProps>(
  (props) => {
    const { onClick, menuIcon, closeIcon } = checkProps(
      props,
      headerMenuButtonPropsType,
    )
    const { showSideNav, setShowSideNav } = rvjsUIThemeContext.getContext()

    return button({
      type: 'button',
      classes: [headerMenuButton_button_style],
      onclick: (event: MouseEvent) => {
        setShowSideNav(!showSideNav())
        if (onClick) {
          onClick(event)
        }
      },
      children: [
        Switch(showSideNav, () => {
          const iconProps = {
            classes: [headerMenuButton_icon_style],
            style: {
              width: '1.25rem',
              height: '1.25rem',
            },
          }
          if (showSideNav()) {
            if (closeIcon) {
              return svg(closeIcon, iconProps)
            } else {
              return CloseIcon(iconProps)
            }
          } else {
            if (menuIcon) {
              return svg(menuIcon, iconProps)
            } else {
              return MenuIcon(iconProps)
            }
          }
        }),
      ],
    })
  },
)

export default HeaderMenuButton
