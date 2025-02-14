import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const shell_wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  margin: 0,
  padding: 0,
})

export const shellDesktop_bodyWrapper_recipe = recipe({
  base: {
    display: 'flex',
    width: '100%',
    maxWidth: '90rem',
    marginInline: 'auto',
  },
  variants: {
    deviceType: {
      desktop: {
        maxWidth: '90rem',
      },
      mobile: {},
    },
  },
})

export const shell_body_style = style({
  display: 'flex',
  flex: '1',
})
