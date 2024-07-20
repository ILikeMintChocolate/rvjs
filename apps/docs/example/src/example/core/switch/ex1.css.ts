import { vars } from '@theme/variable.ts'
import { style } from '@vanilla-extract/css'

export const buttonWrapper_style = style({
  display: 'flex',
  gap: '0.5rem',
})

export const statusText_style = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
})

export const loadingText_style = style({
  color: vars.color.textSecondary,
})

export const loadedText_style = style({
  color: vars.color.textPrimary,
})

export const errorText_style = style({
  color: vars.color.textError,
})
