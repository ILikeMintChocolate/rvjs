import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const headerMenuButton_button_style = style({
  height: vars.component.header.height,
  aspectRatio: '1/1',
  backgroundColor: vars.color.transparent,
  border: 'none',
  transition: `all ${vars.motion.productive}`,
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
  '@media': {
    'screen and (max-width: 57.9375rem)': {
      display: 'block',
    },
    'screen and (min-width: 58rem)': {
      display: 'none',
    },
  },
})

export const headerMenuButton_icon_style = style({
  fill: vars.color.iconPrimary,
})
