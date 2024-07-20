import { vars } from '@theme/variable.ts'
import { style } from '@vanilla-extract/css'

export const console_wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  height: '100%',
  boxSizing: 'border-box',
  border: `0.0625rem solid ${vars.color.borderSubtle01}`,
})

export const console_header_style = style({
  display: 'flex',
  alignItems: 'center',
  height: '1.5rem',
  gap: '0.5rem',
  backgroundColor: vars.color.backgroundHover,
  borderBottom: `0.0625rem solid ${vars.color.borderSubtle01}`,
})

export const console_headerButton_style = style({
  width: '1.5rem',
  height: '1.5rem',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  outline: 'none',
  padding: 0,
  ':hover': {
    backgroundColor: vars.color.backgroundActive,
  },
})

export const console_headerIcon_style = style({
  position: 'relative',
  width: '1rem',
  height: '1rem',
  top: '0.125rem',
})

export const console_headerText_style = style({
  margin: '0',
  fontSize: '0.875rem',
  color: vars.color.textPrimary,
})

export const console_messageWrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
})

export const console_message_style = style({
  fontSize: '0.875rem',
  margin: 0,
  padding: '0.25rem 0.5rem 0.25rem 0.5rem',
  color: vars.color.textPrimary,
  borderBottom: `0.0625rem solid ${vars.color.borderSubtle00}`,
})
