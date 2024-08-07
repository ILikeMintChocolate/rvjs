import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const headerGlobalAction_li_style = style({
  height: vars.component.header.height,
  aspectRatio: '1/1',
})

export const headerGlobalAction_button_recipe = recipe({
  base: {
    height: vars.component.header.height,
    aspectRatio: '1/1',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: vars.color.transparent,
    transition: `all ${vars.motion.productive}`,
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
        backgroundColor: vars.color.layer01,
        boxShadow: `inset 0 0 0 0.125rem ${vars.color.borderSubtle01}`,
      },
    },
  },
})
