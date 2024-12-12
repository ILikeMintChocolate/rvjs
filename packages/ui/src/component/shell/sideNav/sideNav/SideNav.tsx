// @ts-nocheck

import { Toggle } from '@rvjs/core'
import {
  sideNav_backdrop_style,
  sideNav_nav_recipe,
  sideNav_wrapper_recipe,
} from '@shell/sideNav/sideNav/SideNav.css.ts'
import { useSideNavToggle } from '@shell/sideNav/sideNav/SideNav.hook.ts'
import { SideNavProps } from '@shell/sideNav/sideNav/SideNav.props.ts'
import { coolScrollBar_style } from '@theme/util/util.css.ts'

const SideNav = (props: SideNavProps) => {
  const { sideNavBackdropElement, showSideNav, onBackdropClickHandler } =
    useSideNavToggle()

  return (
    <section
      className={[
        sideNav_wrapper_recipe({ isOpen: showSideNav() }),
        coolScrollBar_style,
      ].join(' ')}
    >
      <nav className={sideNav_nav_recipe({ isOpen: showSideNav() })}>
        {props.children}
      </nav>
      <Toggle is={showSideNav()}>
        <div
          element={sideNavBackdropElement}
          className={sideNav_backdrop_style}
          onClick={onBackdropClickHandler}
        />
      </Toggle>
    </section>
  )
}

export default SideNav
