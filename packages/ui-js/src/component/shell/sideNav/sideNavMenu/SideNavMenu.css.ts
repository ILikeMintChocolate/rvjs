import vars from '@theme/variable/vars.css.ts'
import { style } from '@vanilla-extract/css'

export const sideNavMenu_style = style({
  width: '100%',
  height: vars.spacing['07'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: vars.spacing['05'],
  paddingRight: vars.spacing['05'],
  transition: `all ${vars.motion.productive}`,
  border: 'none',
  cursor: 'pointer',
  backgroundColor: vars.color.background,
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
})

export const sideNavMenu_text_style = style({
  transition: `all ${vars.motion.productive}`,
  selectors: {
    [`${sideNavMenu_style}:hover &`]: {
      color: `${vars.color.textPrimary} !important`,
    },
    [`${sideNavMenu_style}:active &`]: {
      color: `${vars.color.textPrimary} !important`,
    },
  },
})

export const subMenu_icon_style = style({
  width: vars.spacing['05'],
  height: vars.spacing['05'],
  fill: vars.color.iconSecondary,
  transition: `all ${vars.motion.productive}`,
  selectors: {
    [`${sideNavMenu_style}:hover &`]: {
      fill: vars.color.iconPrimary,
    },
    [`${sideNavMenu_style}:active &`]: {
      fill: vars.color.iconPrimary,
    },
  },
})

export const subMenu_ul_style = style({
  padding: '0',
})
