import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const sideNav_wrapper_recipe = recipe({
  base: {
    width: vars.component.sideNav.width,
    backgroundColor: vars.color.background,
    overflowY: 'scroll',
    boxSizing: 'border-box',
    '@media': {
      'screen and (max-width: 57.9375rem)': {
        display: 'none',
      },
      'screen and (min-width: 58rem)': {
        display: 'flex',
      },
    },
  },
  variants: {
    isOpen: {
      true: {
        display: 'flex !important',
        position: 'fixed',
        height: `calc(100vh - ${vars.component.header.height})`,
        top: vars.component.header.height,
      },
      false: {
        position: 'sticky',
        height: `calc(100vh - ${vars.component.header.height} - ${vars.spacing['05']} - ${vars.spacing['12']})`,
        top: `calc(${vars.component.header.height} + ${vars.spacing['05']})`,
        marginTop: vars.spacing['05'],
        marginBottom: vars.spacing['12'],
      },
    },
  },
})

export const sideNav_nav_recipe = recipe({
  base: {
    width: '100%',
  },
  variants: {
    isOpen: {
      true: {
        paddingBottom: vars.spacing['12'],
      },
      false: {},
    },
  },
})

export const sideNav_backdrop_style = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: vars.component.sideNav.width,
  backgroundColor: 'black',
  opacity: '0.5',
})
