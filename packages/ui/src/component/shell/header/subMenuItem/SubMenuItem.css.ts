import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const subMenuItem_li_style = style({
  width: '100%',
})

export const subMenuItem_anchor_recipe = recipe({
  base: {
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
    textDecoration: 'none',
    paddingLeft: vars.spacing['05'],
    paddingRight: vars.spacing['05'],
    listStyle: 'none',
    cursor: 'pointer',
    transition: `all ${vars.motion.productive}`,
    backgroundColor: vars.color.layer01,
    ':hover': {
      backgroundColor: vars.color.layerHover01,
    },
    ':focus': {
      boxShadow: `inset 0 0 0 0.125rem ${vars.color.focus}`,
    },
    ':active': {
      backgroundColor: vars.color.layerActive01,
    },
    ':focus-visible': {
      outline: 'none',
    },
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: vars.color.layerSelected01,
        boxShadow: `inset 0.125rem 0 0 0 ${vars.color.borderInteractive}`,
      },
    },
  },
})

export const subMenuItem_text_recipe = recipe({
  base: {
    transition: `all ${vars.motion.productive}`,
    selectors: {
      [`${subMenuItem_li_style}:hover &`]: {
        color: `${vars.color.textPrimary} !important`,
      },
      [`${subMenuItem_li_style}:active &`]: {
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
