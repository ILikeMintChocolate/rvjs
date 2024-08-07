import Box from '@layout/box/Box.ts'
import Flex from '@layout/flex/Flex.ts'
import {
  Children,
  component,
  ComponentFn,
  onMount,
  prop,
  useEffect,
  useGlobalState,
  useRef,
} from '@rvjs/core'
import {
  sideNav_backdrop_recipe,
  sideNav_nav_recipe,
  sideNav_wrapper_style,
} from '@shell/sideNav/sideNav/SideNav.css.ts'

interface SideNavProps {
  children: Children
}

const SideNav: ComponentFn = component<SideNavProps>((props: SideNavProps) => {
  const { children } = props
  const [showSideNav, setShowSideNav] = useGlobalState('SHOW_SIDENAV', false)
  const sideNavBackdropRef = useRef<HTMLDivElement>()

  onMount(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setShowSideNav(false)
      }
    })

    if (sideNavBackdropRef.current) {
      sideNavBackdropRef.current.addEventListener('transitionend', () => {
        if (!showSideNav()) {
          sideNavBackdropRef.current!.style.zIndex = '0'
        }
      })
    }
  })

  useEffect(() => {
    if (showSideNav()) {
      sideNavBackdropRef.current!.style.zIndex = '200'
    }
  }, [showSideNav])

  return Flex({
    classes: [prop(() => sideNav_wrapper_style)],
    children: [
      Flex({
        as: 'nav',
        classes: [prop(() => sideNav_nav_recipe({ isOpen: showSideNav() }))],
        children,
      }),
      Box({
        ref: sideNavBackdropRef,
        onclick: () => {
          setShowSideNav(false)
        },
        classes: [
          prop(() => sideNav_backdrop_recipe({ isOpen: showSideNav() })),
        ],
      }),
    ],
  })
})

export default SideNav
