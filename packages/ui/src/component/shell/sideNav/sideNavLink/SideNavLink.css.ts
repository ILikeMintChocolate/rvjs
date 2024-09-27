import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const sideNavLink_style = style({
  position: 'relative',
  width: '100%',
})

export const sideNavLink_anchor_recipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    width: '100%',
    height: vars.spacing['07'],
    paddingLeft: vars.spacing['05'],
    paddingRight: vars.spacing['05'],
    backgroundColor: vars.color.background,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: vars.color.backgroundHover,
    },
    ':focus': {
      boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
    },
    ':active': {
      backgroundColor: vars.color.backgroundActive,
    },
    ':focus-visible': {
      outline: 'none',
    },
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: vars.color.backgroundSelected,
        boxShadow: `inset 0.25rem 0 0 0 ${vars.color.borderInteractive}`,
        ':focus': {
          boxShadow: `inset 0.25rem 0 0 ${vars.color.borderInteractive}, inset 0 0 0 0.125rem ${vars.color.focus}`,
        },
      },
    },
  },
})

export const sideNavLink_text_recipe = recipe({
  base: {
    transition: `all ${vars.motion.productive}`,
    selectors: {
      [`${sideNavLink_style}:hover &`]: {
        color: `${vars.color.textPrimary} !important`,
      },
      [`${sideNavLink_style}:active &`]: {
        color: `${vars.color.textPrimary} !important`,
      },
    },
  },
  variants: {
    isActive: {
      true: {
        color: `${vars.color.textPrimary} !important`,
      },
    },
  },
})
