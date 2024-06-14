import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const headerNavigation_nav_style = style({
  flex: 1,
  height: '100%',
  paddingLeft: vars.spacing['05'],
  paddingRight: vars.spacing['05'],
})

export const headerNavigation_ul_style = style({
  padding: 0,
  margin: 0,
  height: '100%',
})
