import { ibmPlexSans } from '@theme/font/fontFace.css.ts'
import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const listItem_li_style = style({
  marginTop: vars.spacing['03'],
  marginBottom: vars.spacing['03'],
  paddingLeft: vars.spacing['03'],
  color: vars.color.textPrimary,
  '::marker': {
    fontFamily: ibmPlexSans,
    fontStyle: 'normal',
    fontVariant: 'normal',
    fontWeight: vars.font.weight.regular,
    fontSize: vars.font.size['14'],
    lineHeight: vars.font.size['20'],
    letterSpacing: vars.font.letterSpacing['01'],
  },
})
