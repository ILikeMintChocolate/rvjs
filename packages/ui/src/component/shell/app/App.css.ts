import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const app_style = style({
  width: '100vw',
  height: '100vh',
  margin: 0,
  padding: 0,
  overflowY: 'hidden',
})

export const app_sideNavBodyWrapper_style = style({
  flex: 1,
  overflowY: 'hidden',
  height: `calc(100vh - ${vars.spacing['09']})`,
})
