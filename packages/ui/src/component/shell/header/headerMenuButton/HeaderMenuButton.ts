import defaultCloseSvg from '@icon/close.svg?element'
import defaultMenuSvg from '@icon/menu.svg?element'
import {
  button,
  component,
  ComponentFn,
  svg,
  Switch,
  useGlobalState,
} from '@rvjs/core'
import {
  headerMenuButton_button_style,
  headerMenuButton_icon_style,
} from '@shell/header/headerMenuButton/HeaderMenuButton.css.ts'
import { EventHandlers } from '@type/event.ts'

interface HeaderMenuButtonProps {
  onClick?: EventHandlers['onClick']
  menuIcon?: SVGElement
  closeIcon?: SVGElement
}

const HeaderMenuButton: ComponentFn = component<HeaderMenuButtonProps>(
  (props) => {
    const {
      onClick,
      menuIcon = defaultMenuSvg,
      closeIcon = defaultCloseSvg,
    } = props
    const [showSideNav, setShowSideNav] = useGlobalState('SHOW_SIDENAV', false)

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
          if (showSideNav()) {
            return svg(closeIcon, {
              classes: [headerMenuButton_icon_style],
              style: {
                width: '1.25rem',
                height: '1.25rem',
              },
            })
          } else {
            return svg(menuIcon, {
              classes: [headerMenuButton_icon_style],
              style: {
                width: '1.25rem',
                height: '1.25rem',
              },
            })
          }
        }),
      ],
    })
  },
)

export default HeaderMenuButton
