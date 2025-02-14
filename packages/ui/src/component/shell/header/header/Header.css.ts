import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const header_wrapper_style = style({
  position: 'sticky',
  display: 'flex',
  top: 0,
  width: '100vw',
  height: vars.component.header.height,
  backgroundColor: vars.color.background,
  boxShadow: `inset 0 -0.0625rem 0 0 ${vars.color.borderSubtle00}`,
  justifyContent: 'center',
  zIndex: 1000,
})

export const header_content_recipe = recipe({
  base: {
    display: 'flex',
    top: 0,
    height: vars.component.header.height,
    backgroundColor: vars.color.background,
    boxShadow: `inset 0 -0.0625rem 0 0 ${vars.color.borderSubtle00}`,
  },
  variants: {
    deviceType: {
      desktop: {
        width: '90rem',
      },
      mobile: {
        width: '100%',
      },
    },
  },
})
