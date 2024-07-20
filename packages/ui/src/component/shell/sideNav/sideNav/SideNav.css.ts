import vars from '@theme/variable/vars.css.ts'
import { recipe } from '@vanilla-extract/recipes'

export const sideNav_nav_recipe = recipe({
  base: {
    width: '16rem',
    height: '100%',
    backgroundColor: vars.color.background,
    borderRight: `0.0625rem solid ${vars.color.borderSubtle00}`,
    paddingTop: vars.spacing['05'],
    paddingBottom: vars.spacing['05'],
    gap: vars.spacing['05'],
    boxSizing: 'border-box',
    zIndex: 300,
    '@media': {
      'screen and (max-width: 67.9375rem)': {
        display: 'none',
      },
      'screen and (min-width: 68rem)': {
        display: 'block',
      },
    },
  },
  variants: {
    isOpen: {
      true: {
        display: 'block !important',
        position: 'absolute',
        top: vars.spacing['09'],
        left: 0,
      },
      false: {
        position: 'relative',
      },
    },
  },
})

export const sideNav_backdrop_recipe = recipe({
  base: {
    position: 'absolute',
    top: vars.spacing['09'],
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 200,
    transition: `background-color 0.15s`,
    '@media': {
      'screen and (max-width: 67.9375rem)': {
        display: 'block',
      },
      'screen and (min-width: 68rem)': {
        display: 'none',
      },
    },
  },
  variants: {
    isOpen: {
      true: {
        backgroundColor: vars.color.overlay,
      },
      false: {
        backgroundColor: vars.color.transparent,
      },
    },
  },
})
