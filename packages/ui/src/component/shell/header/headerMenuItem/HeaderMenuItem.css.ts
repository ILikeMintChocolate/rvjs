import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const headerMenuItem_li_style = style({
  display: 'flex',
  width: '100%',
})

export const headerMenuItem_anchor_recipe = recipe({
  base: {
    listStyle: 'none',
    transition: `all ${vars.motion.productive}`,
    textDecoration: 'none',
    paddingLeft: vars.spacing['05'],
    paddingRight: vars.spacing['05'],
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
        boxShadow: `inset 0 -0.125rem 0 0 ${vars.color.borderInteractive}`,
      },
    },
  },
})

export const headerMenuItem_text_recipe = recipe({
  base: {
    transition: `all ${vars.motion.productive}`,
    textWrap: 'nowrap',
    selectors: {
      [`${headerMenuItem_li_style}:hover &`]: {
        color: `${vars.color.textPrimary} !important`,
      },
      [`${headerMenuItem_li_style}:active &`]: {
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
