import Box from '@layout/box/Box.ts'
import Flex from '@layout/flex/Flex.ts'
import {
  Children,
  component,
  ComponentFn,
  onMount,
  prop,
  Toggle,
  useRef,
} from '@rvjs/core'
import {
  sideNav_backdrop_style,
  sideNav_nav_recipe,
  sideNav_wrapper_recipe,
} from '@shell/sideNav/sideNav/SideNav.css.ts'
import { rvjsUIThemeContext } from '@system/provider.ts'
import { coolScrollBar_style } from '@theme/util/util.css.ts'

interface SideNavProps {
  children: Children
}

const SideNav: ComponentFn = component<SideNavProps>((props: SideNavProps) => {
  const { children } = props
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
