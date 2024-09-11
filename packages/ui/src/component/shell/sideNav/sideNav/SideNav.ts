import Box from '@layout/box/Box.ts'
import Flex from '@layout/flex/Flex.ts'
import { component, onMount, prop, Toggle, useRef } from '@rvjs/core'
import { checkProps } from '@rvjs/is'
import {
  sideNav_backdrop_style,
  sideNav_nav_recipe,
  sideNav_wrapper_recipe,
} from '@shell/sideNav/sideNav/SideNav.css.ts'
import {
  SideNavProps,
  sideNavType,
} from '@shell/sideNav/sideNav/SideNav.props.ts'
import { rvjsUIThemeContext } from '@system/provider.ts'
import { coolScrollBar_style } from '@theme/util/util.css.ts'

const SideNav = component<SideNavProps>((props) => {
  const { children } = checkProps(props, sideNavType)
  const { showSideNav, setShowSideNav } = rvjsUIThemeContext.getContext()
  const sideNavBackdropRef = useRef<HTMLDivElement>()

  onMount(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setShowSideNav(false)
      }
    })
  })

  return Flex({
    classes: [
      prop(() =>
        sideNav_wrapper_recipe({
          isOpen: showSideNav(),
        }),
      ),
      prop(() => coolScrollBar_style),
    ],
    children: [
      Flex({
        as: 'nav',
        direction: 'column',
        classes: [
          prop(() =>
            sideNav_nav_recipe({
              isOpen: showSideNav(),
            }),
          ),
        ],
        children,
      }),
      Toggle(showSideNav, () => {
        return Box({
          ref: sideNavBackdropRef,
          classes: [prop(() => sideNav_backdrop_style)],
          onclick: () => {
            setShowSideNav(false)
          },
        })
      }),
    ],
  })
})

export default SideNav
