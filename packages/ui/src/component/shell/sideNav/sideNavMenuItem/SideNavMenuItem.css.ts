import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const sideNavMenuItem_style = style({
  position: 'relative',
  width: '100%',
})

export const sideNavMenuItem_anchor_recipe = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: 'none',
    paddingLeft: vars.spacing['07'],
    paddingRight: vars.spacing['05'],
    width: '100%',
    height: vars.spacing['07'],
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

export const sideNavMenuItem_icon_recipe = recipe({
  base: {
    ':hover': {
      color: `${vars.color.iconPrimary} !important`,
    },
  },
  variants: {
    isActive: {
      true: {
        fill: `${vars.color.iconPrimary} !important`,
      },
      false: {
        fill: `${vars.color.iconSecondary} !important`,
      },
    },
  },
})

export const sideNavMenuItem_text_recipe = recipe({
  base: {
    transition: `all ${vars.motion.productive}`,
    selectors: {
      [`${sideNavMenuItem_style}:hover &`]: {
        color: `${vars.color.textPrimary} !important`,
      },
      [`${sideNavMenuItem_style}:active &`]: {
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
